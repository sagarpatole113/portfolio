import { useState } from 'react'
import { Menu, X, Mail, Phone, MapPin, ArrowRight, ExternalLink, Download, Code, Briefcase, GraduationCap, Award } from 'lucide-react'

const portfolioData = {
  name: 'Sagar Moses Patole',
  title: 'Full Stack Developer | .NET Core, React.js & Node.js Developer',
  summary: 'I build secure, scalable, and maintainable web applications by combining strong backend engineering with modern frontend development.',
  email: 'sagarpatole113@gmail.com',
  phone: '+91 7020641225',
  location: 'Jalna, Maharashtra',
  profileImage: `${import.meta.env.BASE_URL}sagar-profile.jpg`,
  description:  'I’m a Full Stack Developer with 3+ years of experience working on enterprise applications across agriculture, customer loyalty, internal SaaS platforms, and business operations. My primary stack includes .NET Core, React.js, and Node.js, with PostgreSQL and MongoDB for data management. I have worked on REST API development, authentication and authorization, background services, third-party integrations, data encryption, and reusable application components. I enjoy solving backend and full-stack engineering problems and turning complex business requirements into clean, reliable, and maintainable solutions.',
  linkedinUrl: 'https://www.linkedin.com/in/sagar-patole-953015182/',
  githubUrl: 'https://github.com/sagarpatole113',


  skills: [
    { category: 'Languages', items: ['C#', 'JavaScript (ES6+)', 'TypeScript', 'SQL'] },
    { category: 'Frontend', items: ['React.js', 'Context API','Redux Toolkit', 'Material UI (MUI)'] },
    { category: 'Backend', items: ['.NET Core', 'ASP.NET', 'Node.js (Express.js)'] },
    { category: 'Databases', items: ['MongoDB (NoSQL)', 'PostgreSQL (Relational/SQL)', 'Redis', 'Entity Framework'] },
    { category: 'Security', items: ['JWT Authentication'] },
    { category: 'Tools', items: ['Agile/Scrum', 'SDLC', 'Git', 'Postman', 'Swagger/OpenAPI', 'Jira', 'Visual Studio', 'VS Code'] }
  ],

   experience: [
    {
      company: 'Grow Indigo Private Ltd',
      location: 'Jalna',
      role: 'Software Development Engineer',
      duration: 'Dec 2023 – Jun 2026',
      projects: [
        {
          name: 'Grow Online',
          tech: 'Node.js, MongoDB, .NET Core, PostgreSQL, React.js',
          points: [
            'Developed and maintained RESTful APIs for rewards-based customer loyalty program',
            'Implemented backend services for reward configuration and transaction history tracking',
            'Led data security proof-of-concept for end-to-end request/response encryption',
            'Built and published reusable encryption components as NPM and NuGet packages',
            'Developed product bulk-upload module supporting multi-entity imports and ZIP-based bulk image uploads',
            'Added built-in data masking support to reusable encryption packages for downstream teams',
            'Contributed to CMS and IAM integrations, Schemes module, and cross-module bug fixes'
          ]
        },
        {
          name: 'Agricloud',
          tech: 'Node.js, MongoDB, .NET Core, PostgreSQL, React.js',
          points: [
            'Built React.js dashboard for internal SaaS platform',
            'Integrated .NET Core APIs via Axios with Context API state management',
            'Implemented role-based access control and protected routes',
            'Created reusable UI and API components to accelerate future development'
          ]
        },
        {
          name: 'Connect Plus',
          tech: 'React.js, Axios, Context API, .NET Core APIs, React Router, Material UI',
          points: [
            'Developed an internal Wi-Fi request form using .NET Core and React.js to streamline employee onboarding',
            'Led a proof-of-concept for interactive, self-service business analytics dashboards using Redash and Metabase'
          ]
        },
        {
          name: 'Field Connect',
          tech: '.NET Core, ASP.NET, PostgreSQL, SAP APIs',
          points: [
            'Designed penalty calculation engine for sales returns',
            'Developed background worker services for POD processing',
            'Integrated WhatsApp, OTP, and email notifications with retry logic and error handling',
            'Automated proof-of-delivery (POD) processing and delivery confirmations'
          ]
        },
          {
          name: 'Excel Plugin for Reports',
          tech: 'VBA, Excel Add-in, Snowflake, SQL',
          points: [
            'Built an Excel add-in using VBA to pull data directly from Snowflake views into user reports',
            'Designed a user-friendly Excel interface with dynamic filters to trigger view-based queries on demand',
            'Implemented parameterized Snowflake view queries based on selected filters and exported results directly into Excel workbooks'
          ]
        },
        {
          name: 'Farmer Portal',
          tech: '.NET Core, React.js, PostgreSQL, JWT, Entity Framework Core, REST APIs',
          points: [
            'Built a standalone JWT authentication service in .NET Core for farmer-specific APIs without altering existing user middleware',
            'Designed a secure token generation and validation flow with PostgreSQL-backed token tracking using Entity Framework and repository pattern',
            'Built a React dashboard integrated with authenticated APIs to support secure self-service farmer workflows'
          ]
        }
       ]
    },
    {
      company: 'Grow Indigo Private Ltd',
      location: 'Jalna',
      role: 'Software Developer Intern',
      duration: 'Jun 2023 – Dec 2023',
      projects: [
      
      ]
    }
  ],

  education: [
    {
      degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
      institution: 'Centre for Development of Advanced Computing (C-DAC)',
      year: 'Sep 2022'
    },
    {
      degree: 'MBA IT',
      institution: 'Savitribai Phule Pune University',
      year: '2019'
    },
    {
      degree: 'BCA',
      institution: 'Dr. Babasaheb Ambedkar Marathwada University, Aurangabad',
      year: '2017'
    }
  ],

  achievements: [
    {
      title: 'Tech Rising Star Award – 2024',
      description: 'Recognized at annual company conference for outstanding technical contributions and innovation across multiple projects'
    }
  ]
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-color">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="flex items-center gap-2 font-bold text-lg text-primary">
              <span className="text-foreground">&lt;</span>
              <span>SP</span>
              <span className="text-foreground">/&gt;</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm">About</a>
              <a href="#experience" className="text-foreground hover:text-primary transition-colors text-sm">Experience</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors text-sm">Skills</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm">Contact</a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                Github
              </a>
              <a href={portfolioData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-primary text-sm font-semibold mb-2">Welcome to my portfolio</p>
                <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-4">
                  {portfolioData.name}
                </h1>
                <p className="text-2xl text-accent font-semibold">{portfolioData.title}</p>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {portfolioData.summary}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`mailto:${portfolioData.email}`} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                  <Mail size={20} /> Get in touch
                </a>
                <a href="tel:+917020641225" className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
                  <Phone size={20} /> {portfolioData.phone}
                </a>
              </div>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2"><MapPin size={16} /> {portfolioData.location}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={portfolioData.profileImage} alt="Sagar Moses Patole" className="w-80 h-80 rounded-lg object-cover border-2 border-primary shadow-2xl" />
            </div>
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

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            {portfolioData.description}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code size={32} className="text-primary" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills.map((skillGroup, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-lg border border-border-color hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, j) => (
                    <span key={j} className="bg-background px-3 py-1 rounded-full text-sm text-gray-300 border border-border-color">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase size={32} className="text-primary" /> Work Experience
          </h2>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-primary text-lg font-semibold">{exp.company} • {exp.location}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
                <div className="mt-6 space-y-6">
                  {exp.projects.map((project, j) => (
                    <div key={j} className="bg-background p-4 rounded-lg">
                      <h4 className="text-lg font-bold mb-2">{project.name}</h4>
                      <p className="text-accent text-sm mb-3">{project.tech}</p>
                      <ul className="space-y-2">
                        {project.points.map((point, k) => (
                          <li key={k} className="text-gray-400 flex gap-3">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap size={32} className="text-primary" /> Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-lg border border-border-color hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-foreground font-semibold">{edu.institution}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Award size={32} className="text-primary" /> Achievements
          </h2>
          <div className="space-y-6">
            {portfolioData.achievements.map((achievement, i) => (
              <div key={i} className="bg-background p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-accent mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <a href={`mailto:${portfolioData.email}`} className="bg-background p-6 rounded-lg border border-border-color hover:border-primary transition-colors hover:shadow-lg">
                <Mail size={32} className="text-primary mx-auto mb-3" />
                <p className="text-foreground font-semibold mb-2">Email</p>
                <p className="text-gray-400 text-sm break-all">{portfolioData.email}</p>
              </a>
              <a href={`tel:${portfolioData.phone}`} className="bg-background p-6 rounded-lg border border-border-color hover:border-primary transition-colors hover:shadow-lg">
                <Phone size={32} className="text-primary mx-auto mb-3" />
                <p className="text-foreground font-semibold mb-2">Phone</p>
                <p className="text-gray-400 text-sm">{portfolioData.phone}</p>
              </a>
              <div className="bg-background p-6 rounded-lg border border-border-color hover:border-primary transition-colors">
                <MapPin size={32} className="text-primary mx-auto mb-3" />
                <p className="text-foreground font-semibold mb-2">Location</p>
                <p className="text-gray-400 text-sm">{portfolioData.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-color py-8 px-4 sm:px-6 lg:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>&copy; 2026 Sagar Moses Patole. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
export default App
