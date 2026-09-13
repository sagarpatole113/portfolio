import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db, firebaseConfigured } from './firebase'

const visitorKey = 'sagar_portfolio_visitor_id'

function getVisitorId() {
  let id = localStorage.getItem(visitorKey)

  if (!id) {
    id =
      globalThis.crypto?.randomUUID?.() ||
      `${Date.now()}-${Math.random()}`

    localStorage.setItem(visitorKey, id)
  }

  return id
}

function emptyNetworkInfo() {
  return {
    ip: null,
    country: null,
    region: null,
    city: null,
    postal: null,
    latitude: null,
    longitude: null,
    org: null,
    timezone:
      Intl.DateTimeFormat().resolvedOptions().timeZone || null,
  }
}

async function fetchJson(url) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }

    return await response.json()
  } finally {
    clearTimeout(timeout)
  }
}

async function getNetworkInfo() {
  // Do not cache IP.
  // Wi-Fi and mobile data can have different public IPs.
  try {
    const data = await fetchJson('https://ipapi.co/json/')

    return {
      ip: data.ip || null,
      country: data.country_name || null,
      region: data.region || null,
      city: data.city || null,
      postal: data.postal || null,
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      org: data.org || null,
      timezone:
        data.timezone ||
        Intl.DateTimeFormat().resolvedOptions().timeZone ||
        null,
    }
  } catch {
    // Fallback IP service for mobile networks.
    try {
      const data = await fetchJson('https://ipwho.is/')

      return {
        ip: data.ip || null,
        country: data.country || null,
        region: data.region || null,
        city: data.city || null,
        postal: data.postal || null,
        latitude: data.latitude || null,
        longitude: data.longitude || null,
        org: data.connection?.org || null,
        timezone:
          data.timezone?.id ||
          Intl.DateTimeFormat().resolvedOptions().timeZone ||
          null,
      }
    } catch {
      return emptyNetworkInfo()
    }
  }
}

export async function getCurrentNetworkInfo() {
  return getNetworkInfo()
}

async function isWhitelistedIp(ip) {
  const normalizedIp = String(ip || '').trim()

  // If IP detection fails, do not whitelist the visitor.
  // The visit will still be saved in Firebase.
  if (!normalizedIp || !db) {
    return false
  }

  const snapshot = await getDocs(
    query(
      collection(db, 'portfolio_ip_whitelist'),
      where('ip', '==', normalizedIp)
    )
  )

  return snapshot.docs.some((item) => {
    const savedIp = String(item.data().ip || '').trim()

    return (
      savedIp === normalizedIp &&
      item.data().enabled !== false
    )
  })
}

export async function trackVisit() {
  if (!firebaseConfigured || !db) {
    return
  }

  try {
    const network = await getNetworkInfo()

    // Skip only explicitly whitelisted IPs.
    const whitelisted = await isWhitelistedIp(network.ip)

    if (whitelisted) {
      return
    }

    const visitorId = getVisitorId()

    await addDoc(collection(db, 'portfolio_visits'), {
      visitorId,
      ...network,
      visitedAt: serverTimestamp(),
      path: window.location.pathname + window.location.hash,
      referrer: document.referrer || 'direct',
      language: navigator.language || null,
      languages: navigator.languages
        ? [...navigator.languages]
        : [],
      userAgent: navigator.userAgent || null,
      platform: navigator.platform || null,
      vendor: navigator.vendor || null,
      deviceMemory: navigator.deviceMemory || null,
      cpuCores: navigator.hardwareConcurrency || null,
      touchPoints: navigator.maxTouchPoints || 0,
      online: navigator.onLine,
      screen: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      colorDepth: window.screen.colorDepth || null,
      deviceType:
        /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
          ? 'mobile'
          : 'desktop',
    })
  } catch (error) {
    console.warn(
      'Visitor tracking unavailable:',
      error?.message || error
    )
  }
}

export async function submitVisitorContact({
  name,
  email,
  company,
  message,
}) {
  if (!firebaseConfigured || !db) {
    throw new Error('Firebase is not configured yet.')
  }

  return addDoc(collection(db, 'visitor_contacts'), {
    name,
    email,
    company: company || null,
    message: message || null,
    submittedAt: serverTimestamp(),
  })
}