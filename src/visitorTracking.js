import { addDoc, collection, serverTimestamp, getDocs, query, where } from 'firebase/firestore'
import { db, firebaseConfigured } from './firebase'

const visitorKey = 'sagar_portfolio_visitor_id'
const cachedNetworkKey = 'sagar_portfolio_network_info'

function getVisitorId() {
  let id = localStorage.getItem(visitorKey)
  if (!id) {
    id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`
    localStorage.setItem(visitorKey, id)
  }
  return id
}

async function getNetworkInfo() {
  try {
    const cached = sessionStorage.getItem(cachedNetworkKey)
    if (cached) return JSON.parse(cached)
    const response = await fetch('https://ipapi.co/json/', { headers: { Accept: 'application/json' } })
    if (!response.ok) throw new Error('IP lookup failed')
    const data = await response.json()
    const result = {
      ip: data.ip || null,
      country: data.country_name || null,
      region: data.region || null,
      city: data.city || null,
      postal: data.postal || null,
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      org: data.org || null,
      timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    }
    sessionStorage.setItem(cachedNetworkKey, JSON.stringify(result))
    return result
  } catch {
    return {
      ip: null,
      country: null,
      region: null,
      city: null,
      postal: null,
      latitude: null,
      longitude: null,
      org: null,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    }
  }
}

export async function getCurrentNetworkInfo() {
  return getNetworkInfo()
}

async function isWhitelistedIp(ip) {
  if (!ip || !db) return false
  const snapshot = await getDocs(query(collection(db, 'portfolio_ip_whitelist'), where('ip', '==', ip)))
  return snapshot.docs.some(doc => doc.data().enabled !== false)
}

export async function trackVisit() {
  if (!firebaseConfigured || !db) return
  try {
    const network = await getNetworkInfo()
    if (await isWhitelistedIp(network.ip)) return
    const visitorId = getVisitorId()
    await addDoc(collection(db, 'portfolio_visits'), {
      visitorId,
      ...network,
      visitedAt: serverTimestamp(),
      path: window.location.pathname + window.location.hash,
      referrer: document.referrer || 'direct',
      language: navigator.language || null,
      languages: navigator.languages ? [...navigator.languages] : [],
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
      deviceType: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    })
  } catch (error) {
    console.warn('Visitor tracking unavailable:', error.message)
  }
}

export async function submitVisitorContact({ name, email, company, message }) {
  if (!firebaseConfigured || !db) throw new Error('Firebase is not configured yet.')
  return addDoc(collection(db, 'visitor_contacts'), {
    name, email, company: company || null, message: message || null,
    submittedAt: serverTimestamp(),
  })
}
