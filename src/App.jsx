import { useEffect, useState } from 'react'
import { Github, Linkedin } from './components/BrandIcons'
import { trackVisit, submitVisitorContact } from './visitorTracking'
import Admin from './Admin'

const resumePath = `${import.meta.env.BASE_URL}Sagar_Patole_Resume.pdf`

const projects = [
  { name:'FLEETPULSE', type:'Fleet Management & Real-Time Tracking', description:'Full-stack fleet management for vehicles, drivers, trips and live operations.', stack:'React · TypeScript · Node.js · Firebase · Socket.IO · Leaflet', link:'https://fleet-pulse-dash.netlify.app/', accent:'01' },
  { name:'FOOD FLOW', type:'Real-Time Order Management', description:'End-to-end food ordering with cart management and live delivery status updates.', stack:'React · Vite · Firebase · Node.js · REST APIs', link:'https://order-management-dash.netlify.app/', accent:'02' },
  { name: 'SAATATYA',type: 'Daily Mock Test & Exam Practice Platform', description: 'Built a bilingual MPSC practice platform with 100-question timed exams, negative marking, sequential test progression, score history and automated daily test publishing.', stack: 'React Native · Node.js · Express · Firebase · Firestore · Node Cron', link: 'https://github.com/sagarpatole113/daily-challenge-mono', accent: '03'}

]

const skills = [
  ['LANGUAGES', 'C#, JavaScript (ES6+), TypeScript, SQL'],
  ['FRONTEND', 'React.js, Material UI, Redux, Redux Toolkit'],
  ['BACKEND', '.NET Core, Node.js (Express), REST APIs'],
  ['DATA', 'MongoDB, PostgreSQL'],
  ['SECURITY', 'JWT, AES Encryption, Data Masking'],
  ['TOOLS', 'Git, Postman, Swagger, Jira, Visual Studio, VS Code'],
]

const experience = [
  {
    number:'01', role:'SOFTWARE DEVELOPMENT ENGINEER', company:'GROW INDIGO PRIVATE LTD · MUMBAI', duration:'DEC 2023 – JUN 2026',
    projects:[
      ['Grow Online','Node.js · MongoDB · .NET Core · PostgreSQL · React.js',['Built and maintained REST APIs for a rewards-based loyalty program.','Developed reward configuration, transaction history, and scheduled backend services.']],
      ['Agricloud','Node.js · MongoDB · .NET Core · PostgreSQL · React.js',['Led a data security PoC for encrypting requests and responses across React, Node.js, and .NET Core.','Built reusable NPM and NuGet encryption packages with data masking, adopted by multiple teams.','Built product bulk-upload workflows for multi-entity imports and ZIP-based image uploads.']],
      ['Connect Plus','React.js · Axios · Context API · .NET Core APIs · React Router · Material UI',['Built a responsive React dashboard for an internal SaaS platform used across business teams.','Added role-based access, protected routes, and reusable components.']],
      ['Field Connect','.NET Core · ASP.NET · PostgreSQL · SAP APIs · Third-Party APIs',['Built a penalty calculation engine for sales returns based on expiry and shelf-life rules.','Automated proof-of-delivery tracking with background workers and integrated WhatsApp, OTP, and email notifications.']],
      ['Excel Plugin for Reports','VBA · Excel Add-in · Snowflake · SQL',['Built an Excel add-in to pull live data from Snowflake views and trigger parameterized queries through filters.','Automated report exports directly into Excel.']],
      ['Farmer Portal','.NET Core · React.js · PostgreSQL · JWT · Entity Framework Core · REST APIs',['Built a standalone JWT authentication service with PostgreSQL-backed token tracking.','Built a React dashboard connected to secure APIs for self-service farmer workflows.']]
    ]
  },
  {
    number:'02', role:'SOFTWARE DEVELOPER INTERN', company:'GROW INDIGO PRIVATE LTD · MUMBAI', duration:'JUN 2023 – DEC 2023',
    projects:[['Internal Platform Initiatives','.NET Core · React.js · Redash · Metabase',['Developed an internal Wi-Fi request form using .NET Core and React.js for employee onboarding.','Led a PoC for interactive, user-driven dashboards using Redash and Metabase.']]]
  }
]

const nav = ['ABOUT', 'WORK', 'PROJECTS', 'STACK', 'CONTACT']

function App(){
  if(window.location.hash === '#/admin') return <Admin />
  const [menuOpen,setMenuOpen]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  const [contact,setContact]=useState({name:'',email:'',company:'',message:''})
  const [contactStatus,setContactStatus]=useState('')
  useEffect(()=>{ trackVisit(); const onScroll=()=>setScrolled(window.scrollY>20); window.addEventListener('scroll',onScroll); return()=>window.removeEventListener('scroll',onScroll)},[])
  const sendContact=async(e)=>{e.preventDefault();setContactStatus('Sending...');try{await submitVisitorContact(contact);setContactStatus('Thanks — your details were sent.');setContact({name:'',email:'',company:'',message:''})}catch(err){setContactStatus(err.message)}}
  const go=(id)=>{setMenuOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}

  return <div className="flyt-site">
    <header className={`topbar ${scrolled?'scrolled':''}`}>
      <button className="logo" onClick={()=>go('home')}><span className="logo-mark">S</span><span>SAGAR.P</span></button>
      <nav className={menuOpen?'open':''}>{nav.map(n=><button key={n} onClick={()=>go(n.toLowerCase())}>{n}</button>)}</nav>
      <div className="top-actions">
        <a className="resume-btn" href={resumePath} download>GET RESUME ↗</a>
        <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?'×':'☰'}</button>
      </div>
    </header>

    <main>
      <section id="home" className="hero-section paper-grid">
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <p className="micro">FULL STACK DEVELOPER · INDIA</p>
            <h1>CODE AT<br/><span>FULL SPEED.</span></h1>
            <p className="hero-tag">Hard problems. Secure systems. Meaningful products.</p>
            <div className="hero-buttons">
              <button className="pixel-button" onClick={()=>go('projects')}>EXPLORE WORK <span>→</span></button>
              <a className="text-link" href={resumePath} download>DOWNLOAD CV ↓</a>
            </div>
          </div>
          <div className="pixel-scene" aria-label="Developer profile illustration">
            <div className="scene-sun"></div>
            <div className="pixel-card">
              <div className="pixel-window-bar"><i></i><i></i><i></i><span>developer@portfolio</span></div>
              <div className="profile-zone"><img src={`${import.meta.env.BASE_URL}sagar-profile.jpg`} alt="Sagar Patole"/><div className="pixel-overlay"></div></div>
              <div className="terminal-lines"><span>$ build scalable things</span><span>✓ APIs connected</span><span>✓ systems shipped</span><span className="blink">_</span></div>
            </div>
            <div className="scene-label">3 YEARS<br/>OF BUILDING</div>
          </div>
        </div>
      </section>

      <section id="about" className="mission-section dark-section">
        <div className="wrap mission-grid">
          <p className="micro orange">ABOUT ME</p>
          <div>
            <h2>BUILDING DIGITAL SYSTEMS THAT <em>ACTUALLY WORK.</em></h2>
            <p className="lead">I'm Sagar Moses Patole, a Full Stack Developer with 3 years of experience building robust applications with .NET Core, React, Node.js, MongoDB and PostgreSQL.</p>
            <p>I enjoy taking a feature from a rough idea to a reliable, maintainable product—whether that means designing APIs, securing data, building dashboards, or connecting the entire stack.</p>
          </div>
        </div>
      </section>

      <section id="work" className="work-section cream-section">
        <div className="wrap">
          <div className="section-head"><p className="micro">EXPERIENCE LOG</p><h2>WHERE I BUILT<br/><span>THE THINGS.</span></h2></div>
          <div className="experience-list">
            {experience.map(exp=><article className="job job-expanded" key={exp.number}>
              <div className="job-index">{exp.number}</div><div className="job-year">{exp.duration}</div>
              <div className="job-body"><h3>{exp.role}</h3><h4>{exp.company}</h4>
                <div className="experience-projects">{exp.projects.map(([name,tech,items])=><div className="experience-project" key={name}><h5>{name}</h5><p className="experience-tech">{tech}</p><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section dark-section">
        <div className="wrap">
          <div className="section-head light"><p className="micro orange">SELECTED BUILDS</p><h2>PROJECTS WITH<br/><span>REAL MOVEMENT.</span></h2></div>
          <div className="project-grid">{projects.map(p=><article className="project-card" key={p.name}>
            <div className="project-art"><span>{p.accent}</span><div className="project-art-lines"></div><b>{'{ }'}</b></div>
            <div className="project-content"><p className="micro orange">PERSONAL PROJECT</p><h3>{p.name}</h3><h4>{p.type}</h4><p>{p.description}</p><code>{p.stack}</code><a href={p.link} target="_blank" rel="noreferrer">VIEW LIVE PROJECT ↗</a></div>
          </article>)}</div>
        </div>
      </section>

      <section id="stack" className="stack-section paper-grid">
        <div className="wrap">
          <div className="section-head"><p className="micro">MY TOOLBOX</p><h2>THE STACK I<br/><span>SHIP WITH.</span></h2></div>
          <div className="stack-grid">{skills.map(([title,content],i)=><article className="stack-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{content}</p></article>)}</div>
        </div>
      </section>

      <section className="award-strip"><div className="wrap"><span>★</span><strong>TECH RISING STAR AWARD — 2024</strong><p>Recognized for technical contributions and innovation across multiple projects.</p></div></section>

      <section id="contact" className="contact-section cream-section">
        <div className="wrap contact-grid">
          <div><p className="micro">LET'S BUILD</p><h2>GOT A HARD<br/>PROBLEM?</h2><p className="lead">I’m open to full-stack opportunities where I can build, learn and ship meaningful software.</p></div>
          <div className="contact-box"><a href="mailto:sagarpatole113@gmail.com">sagarpatole113@gmail.com ↗</a><p>JALNA, MAHARASHTRA · INDIA</p><div className="socials"><a href="https://github.com/sagarpatole113" target="_blank" rel="noreferrer"><Github size={18}/> GITHUB</a><a href="https://www.linkedin.com/in/sagar-patole-953015182/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LINKEDIN</a></div><form className="visitor-form" onSubmit={sendContact}><p className="micro">LEAVE YOUR DETAILS</p><input required placeholder="Your name" value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})}/><input required type="email" placeholder="Email" value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})}/><input placeholder="Company (optional)" value={contact.company} onChange={e=>setContact({...contact,company:e.target.value})}/><textarea placeholder="Message (optional)" value={contact.message} onChange={e=>setContact({...contact,message:e.target.value})}/><button type="submit">SEND DETAILS ↗</button>{contactStatus&&<small>{contactStatus}</small>}</form></div>
        </div>
      </section>
    </main>
    <footer><div className="wrap"><span>© 2026 SAGAR PATOLE</span><span>DESIGNED TO BUILD · BUILT TO SHIP</span></div></footer>
  </div>
}
export default App
