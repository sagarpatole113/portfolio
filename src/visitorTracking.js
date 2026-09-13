import {
  addDoc,
  collection,
  serverTimestamp,
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

export async function getCurrentNetworkInfo() {
  return {}
}

export async function trackVisit() {
  if (!firebaseConfigured || !db) return

  try {
    const visitorId = getVisitorId()

    await addDoc(collection(db, 'portfolio_visits'), {
      visitorId,
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