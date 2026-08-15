import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,

  GraduationCap,
  Layers3,

  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import { Github, Linkedin } from './components/BrandIcons'

const resumePath = `${import.meta.env.BASE_URL}Sagar_Patole_Resume.pdf`

const data = {
  name: 'Sagar Patole',
  role: 'Full Stack Developer',
  tagline: 'Building secure, scalable & maintainable web applications.',
  email: 'sagarpatole113@gmail.com',
  phone: '+91 7020641225',
  location: 'Jalna, Maharashtra',
  github: 'https://github.com/sagarpatole113',
  linkedin: 'https://www.linkedin.com/in/sagar-patole-953015182/',
  summary:
    'Full Stack Developer with 3+ years of experience building robust web applications using .NET Core, React, Node.js, MongoDB, and PostgreSQL. Experienced in scalable APIs, secure data masking solutions, backend services, and frontend-backend integration.',
  skills: {
    Languages: ['C#', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
    Frontend: ['React.js', 'Material UI', 'Redux', 'Redux Toolkit'],
    Backend: ['.NET Core', 'Node.js (Express)', 'REST APIs'],
    Databases: ['MongoDB', 'PostgreSQL'],
    Security: ['JWT', 'AES Encryption', 'Data Masking'],
    Tools: ['Git', 'Postman', 'Swagger', 'Jira', 'Visual Studio', 'VS Code'],
  },
  experience: [
    {
      role: 'Software Development Engineer',
      company: 'Grow Indigo Private Ltd',
      location: 'Mumbai',
      period: 'Dec 2023 – Jun 2026',
      projects: [
        {
          name: 'Grow Online',
          tech: 'Node.js · MongoDB · .NET Core · PostgreSQL · React.js',
          points: [
            'Built and maintained REST APIs for a rewards-based loyalty program.',
            'Developed reward configuration, transaction history, and scheduled backend services.',
          ],
        },
        {
          name: 'Agricloud',
          tech: 'Node.js · MongoDB · .NET Core · PostgreSQL · React.js',
          points: [
            'Led a data security PoC for encrypting requests and responses across React, Node.js, and .NET Core.',
            'Built reusable NPM and NuGet encryption packages with data masking, adopted by multiple teams.',
            'Built product bulk-upload workflows for multi-entity imports and ZIP-based image uploads.',
          ],
        },
        {
          name: 'Connect Plus',
          tech: 'React.js · Axios · Context API · .NET Core APIs · React Router · Material UI',
          points: [
            'Built a responsive React dashboard for an internal SaaS platform used across business teams.',
            'Added role-based access, protected routes, and reusable components.',
          ],
        },
        {
          name: 'Field Connect',
          tech: '.NET Core · ASP.NET · PostgreSQL · SAP APIs · Third-Party APIs',
          points: [
            'Built a penalty calculation engine for sales returns based on expiry and shelf-life rules.',
            'Automated proof-of-delivery tracking with background workers and integrated WhatsApp, OTP, and email notifications.',
          ],
        },
        {
          name: 'Excel Plugin for Reports',
          tech: 'VBA · Excel Add-in · Snowflake · SQL',
          points: [
            'Built an Excel add-in to pull live data from Snowflake views and trigger parameterized queries through filters.',
            'Automated report exports directly into Excel.',
          ],
        },
        {
          name: 'Farmer Portal',
          tech: '.NET Core · React.js · PostgreSQL · JWT · Entity Framework Core · REST APIs',
          points: [
            'Built a standalone JWT authentication service with PostgreSQL-backed token tracking.',
            'Built a React dashboard connected to secure APIs for self-service farmer workflows.',
          ],
        },
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Grow Indigo Private Ltd',
      location: 'Mumbai',
      period: 'Jun 2023 – Dec 2023',
      projects: [
        {
          name: 'Internal Platform Initiatives',
          tech: '.NET Core · React.js · Redash · Metabase',
          points: [
            'Developed an internal Wi-Fi request form using .NET Core and React.js for employee onboarding.',
            'Led a PoC for interactive, user-driven dashboards using Redash and Metabase.',
          ],
        },
      ],
    },
  ],
  personalProjects: [
    {
      name: 'FleetPulse',
      label: 'Fleet Management & Real-Time Tracking',
      description:
        'Full-stack fleet management application for vehicles, drivers, trips, and real-time fleet operations.',
      tech: ['React.js', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'Firebase', 'Socket.IO', 'Leaflet'],
      points: [
        'Built modular REST APIs with authentication, validation, middleware, and role-based access control.',
        'Implemented real-time vehicle and trip tracking with Socket.IO and Leaflet.',
        'Deployed frontend on Netlify and backend APIs on Render.',
      ],
      link: 'https://fleet-pulse-dash.netlify.app/',
    },
    {
      name: 'Food Delivery Order Management',
      label: 'Real-Time Order Management',
      description:
        'Full-stack food delivery application for menu browsing, cart management, ordering, and live order status.',
      tech: ['React.js', 'Vite', 'Firebase', 'Node.js', 'REST APIs', 'Netlify', 'Render'],
      points: [
        'Built REST APIs for menu data, order placement, and order-status updates.',
        'Implemented real-time order tracking from Order Received through Delivered.',
        'Deployed frontend on Netlify and backend on Render.',
      ],
      link: 'https://order-management-dash.netlify.app/',
    },
  ],
  education: [
    ['PG-DAC', 'Centre for Development of Advanced Computing', '2022'],
    ['MBA IT', 'Savitribai Phule Pune University', '2017 – 2019'],
    ['BCA', 'Dr. Babasaheb Ambedkar Marathwada University, Aurangabad', '2014 – 2017'],
  ],
}

const navItems = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

function SectionTitle({ eyebrow, title, icon: Icon }) {
  return (
    <div className="section-title">
      <div className="eyebrow"><Icon size={15} /> {eyebrow}</div>
      <h2>{title}</h2>
    </div>
  )
}

function TechPill({ children }) {
  return <span className="tech-pill">{children}</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: [0.1, 0.3, 0.6] }
    )
    navItems.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav">
          <button className="brand" onClick={() => go('home')} aria-label="Go home">
            {/* <span className="brand-bracket">&lt;</span>SP<span className="brand-bracket">/&gt;</span> */}
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item}
                className={active === item ? 'active' : ''}
                onClick={() => go(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <a href={data.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a className="nav-resume" href={resumePath} download>Resume <Download size={15} /></a>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy reveal">
            <div className="status"><span /> Available for Full Stack Opportunities</div>
            <p className="hero-kicker"><Terminal size={16} /> Hello, world. I&apos;m</p>
            <h1>{data.name}</h1>
            <div className="hero-role"><span>{'>'}</span> {data.role}</div>
            <p className="hero-tagline">{data.tagline}</p>
            <p className="hero-summary">{data.summary}</p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => go('projects')}>Explore Projects <ArrowDown size={17} /></button>
              <a className="btn btn-ghost" href={resumePath} download>Download Resume <Download size={17} /></a>
            </div>

            <div className="hero-meta">
              <a href={`mailto:${data.email}`}><Mail size={15} /> {data.email}</a>
              <span><MapPin size={15} /> {data.location}</span>
            </div>
          </div>

          <div className="hero-terminal reveal">
            <div className="terminal-window">
              <div className="terminal-top">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                <span className="terminal-title">sagar@portfolio ~</span>
              </div>
              <div className="terminal-body">
                <div className="code-line"><span className="prompt">$</span> whoami</div>
                <div className="output big">Sagar Moses Patole</div>
                <div className="code-line"><span className="prompt">$</span> cat stack.json</div>
                <pre>{`{
  "frontend": ["React", "Redux", "MUI"],
  "backend": [".NET Core", "Node.js"],
  "data": ["PostgreSQL", "MongoDB"],
  "security": ["JWT", "AES", "Masking"]
}`}</pre>
                <div className="code-line"><span className="prompt">$</span> ./build-something-great<span className="cursor">▋</span></div>
              </div>
            </div>
            <div className="floating-chip chip-one"><Code2 size={15} /> clean code</div>
            <div className="floating-chip chip-two"><ShieldCheck size={15} /> secure by design</div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats">
            <div><strong>3+</strong><span>Years Experience</span></div>
            <div><strong>6+</strong><span>Enterprise Projects</span></div>
            <div><strong>2</strong><span>Production Side Projects</span></div>
            <div><strong>2024</strong><span>Tech Rising Star</span></div>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionTitle eyebrow="01 / ABOUT" title="Engineering with a product mindset." icon={Code2} />
          <div className="about-grid">
            <div className="about-card">
              <p>
                I&apos;m a Full Stack Developer with 3+ years of experience working on enterprise applications across agriculture, customer loyalty, internal SaaS platforms, and business operations.
              </p>
              <p>
                My core stack combines .NET Core, React.js, and Node.js with PostgreSQL and MongoDB. I enjoy solving backend and full-stack engineering problems—from REST APIs and authentication to background services, integrations, encryption, and reusable components.
              </p>
            </div>
            <div className="principles">
              {[
                ['01', 'Scalable APIs', 'Clean REST APIs and modular backend services.'],
                ['02', 'Secure Systems', 'JWT, AES encryption and data masking.'],
                ['03', 'Reusable UI', 'React components built for consistency and speed.'],
              ].map(([num, title, text]) => (
                <div className="principle" key={num}>
                  <span>{num}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionTitle eyebrow="02 / EXPERIENCE" title="Where I&apos;ve built things." icon={BriefcaseBusiness} />
          <div className="experience-list">
            {data.experience.map((exp, i) => (
              <article className="experience-item" key={i}>
                <div className="timeline">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {i < data.experience.length - 1 && <i />}
                </div>
                <div className="experience-content">
                  <div className="experience-head">
                    <div>
                      <h3>{exp.role}</h3>
                      <p>{exp.company} <span>·</span> {exp.location}</p>
                    </div>
                    <time>{exp.period}</time>
                  </div>
                  <div className="work-projects">
                    {exp.projects.map((project) => (
                      <div className="work-project" key={project.name}>
                        <div className="project-title-row">
                          <h4>{project.name}</h4>
                          <span className="project-tech">{project.tech}</span>
                        </div>
                        <ul>
                          {project.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionTitle eyebrow="03 / PROJECTS" title="Things I built outside the day job." icon={Layers3} />
            <div className="project-grid">
              {data.personalProjects.map((project, i) => (
                <article className="project-card" key={project.name}>
                  <div className="project-card-top">
                    <span className="project-index">0{i + 1}</span>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  <div className="project-icon"><Sparkles size={19} /></div>
                  <p className="project-label">{project.label}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-points">
                    {project.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <div className="tech-list">{project.tech.map((tech) => <TechPill key={tech}>{tech}</TechPill>)}</div>
                  <a className="live-link" href={project.link} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionTitle eyebrow="04 / STACK" title="Tools I use to ship." icon={Terminal} />
          <div className="skills-grid">
            {Object.entries(data.skills).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <div className="skill-number">{String(Object.keys(data.skills).indexOf(category) + 1).padStart(2, '0')}</div>
                <h3>{category}</h3>
                <div className="tech-list">{items.map((item) => <TechPill key={item}>{item}</TechPill>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section container">
          <SectionTitle eyebrow="05 / EDUCATION" title="Foundation." icon={GraduationCap} />
          <div className="education-grid">
            {data.education.map(([degree, institution, year]) => (
              <article className="education-card" key={degree}>
                <GraduationCap size={21} />
                <div><span>{year}</span><h3>{degree}</h3><p>{institution}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="award-banner container">
          <Award size={28} />
          <div><span>RECOGNITION · 2024</span><h3>Tech Rising Star Award</h3><p>Recognized at the annual company conference for outstanding technical contributions and innovation across multiple projects.</p></div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow"><Mail size={15} /> 06 / CONTACT</p>
              <h2>Let&apos;s build the<br /><span>next thing.</span></h2>
              <p className="contact-copy">Open to Full Stack Developer and Software Engineer opportunities where I can contribute to scalable and reliable applications.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${data.email}`}><Mail /> <span><small>Email</small>{data.email}</span><ArrowUpRight /></a>
              <a href={`tel:${data.phone}`}><Phone /> <span><small>Phone</small>{data.phone}</span><ArrowUpRight /></a>
              <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin /> <span><small>LinkedIn</small>Connect with me</span><ArrowUpRight /></a>
              <a href={data.github} target="_blank" rel="noreferrer"><Github /> <span><small>GitHub</small>View my code</span><ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span><span className="brand-bracket">&lt;</span>SP<span className="brand-bracket">/&gt;</span></span>
          <span>© 2026 Sagar Patole</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={15} /> Back to top</button>
        </div>
      </footer>
    </div>
  )
}
