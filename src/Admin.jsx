import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, limit, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore'
import { auth, db, firebaseConfigured } from './firebase'
import { getCurrentNetworkInfo } from './visitorTracking'

export default function Admin() {
  const [user,setUser]=useState(null),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState(''),[loading,setLoading]=useState(true)
  const [visits,setVisits]=useState([]),[contacts,setContacts]=useState([]),[ips,setIps]=useState([]),[currentIp,setCurrentIp]=useState(''),[label,setLabel]=useState(''),[status,setStatus]=useState('')

  useEffect(()=>{ if(!auth){setLoading(false);return} return onAuthStateChanged(auth,u=>{setUser(u);setLoading(false);if(u) load()}) },[])
  async function load(){
    try {
      const [v,c,i]=await Promise.all([
        getDocs(query(collection(db,'portfolio_visits'),limit(500))),
        getDocs(query(collection(db,'visitor_contacts'),limit(500))),
        getDocs(query(collection(db,'portfolio_ip_whitelist'),limit(100)))
      ])
      setVisits(v.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.visitedAt?.seconds||0)-(a.visitedAt?.seconds||0)))
      setContacts(c.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.submittedAt?.seconds||0)-(a.submittedAt?.seconds||0)))
      setIps(i.docs.map(d=>({id:d.id,...d.data()})))
    } catch(e){setError(e.message)}
  }
  async function login(e){e.preventDefault();setError('');try{await signInWithEmailAndPassword(auth,email,password)}catch(e){setError('Login failed. Check your email and password.')}}
  async function detectIp(){setStatus('Detecting IP…');const n=await getCurrentNetworkInfo();setCurrentIp(n.ip||'');setStatus(n.ip?`Detected ${n.ip} (${n.city||'location unavailable'})`:'Could not detect IP')}
  async function whitelistIp(e){
    e.preventDefault();if(!currentIp)return
    try{await addDoc(collection(db,'portfolio_ip_whitelist'),{ip:currentIp,label:label||'Personal device/network',enabled:true,createdAt:serverTimestamp(),createdBy:user.email});setLabel('');setStatus('IP added to whitelist.');load()}catch(e){setStatus(e.message)}
  }
  async function removeIp(id){await deleteDoc(doc(db,'portfolio_ip_whitelist',id));load()}
  if(loading)return <div className="admin-page"><h1>Loading admin…</h1></div>
  if(!firebaseConfigured)return <div className="admin-page"><h1>Firebase is not configured</h1><p>Add the VITE_FIREBASE_* variables during the GitHub Pages build.</p></div>
  if(!user)return <div className="admin-page"><form className="admin-login" onSubmit={login}><p className="micro">PRIVATE AREA</p><h1>Admin login</h1><input required type="email" placeholder="Admin email" value={email} onChange={e=>setEmail(e.target.value)}/><input required type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><button type="submit">SIGN IN ↗</button>{error&&<p>{error}</p>}</form></div>
  return <div className="admin-page">
    <div className="admin-head"><div><p className="micro">PRIVATE DASHBOARD</p><h1>Portfolio analytics</h1></div><button onClick={()=>signOut(auth)}>SIGN OUT</button></div>
    <div className="admin-stats"><div><b>{visits.length}</b><span>Tracked visits</span></div><div><b>{contacts.length}</b><span>Contact leads</span></div><div><b>{new Set(visits.map(v=>v.visitorId).filter(Boolean)).size}</b><span>Unique visitors</span></div></div>
    <section className="admin-panel"><h2>Whitelist your Wi‑Fi IP</h2><p>Whitelist your public IP to exclude your laptop and phone on the same network from analytics.</p><form onSubmit={whitelistIp} className="visitor-form"><input value={currentIp} onChange={e=>setCurrentIp(e.target.value)} placeholder="Public IP address" required/><input value={label} onChange={e=>setLabel(e.target.value)} placeholder="Label, e.g. Home Wi‑Fi"/><button type="button" onClick={detectIp}>DETECT MY IP</button><button type="submit">ADD TO WHITELIST</button>{status&&<small>{status}</small>}</form><div className="admin-table">{ips.map(i=><article key={i.id}><strong>{i.ip}</strong><span>{i.label||'—'}</span><button onClick={()=>removeIp(i.id)}>REMOVE</button></article>)}</div></section>
    <section className="admin-panel"><h2>Recent contacts</h2>{contacts.length===0?<p>No contacts yet.</p>:<div className="admin-table">{contacts.map(c=><article key={c.id}><strong>{c.name}</strong><span>{c.email}</span><span>{c.company||'—'}</span><p>{c.message||'No message'}</p></article>)}</div>}</section>
    <section className="admin-panel"><h2>Recent visits</h2>{visits.slice(0,50).map(v=><article className="visit-row" key={v.id}><span>{v.visitedAt?.toDate?.().toLocaleString?.()||'Pending timestamp'}</span><span>{v.ip||'—'}</span><span>{[v.city,v.region,v.country].filter(Boolean).join(', ')||'—'}</span><span>{v.deviceType||'—'}</span><span>{v.path}</span></article>)}</section>
  </div>
}
