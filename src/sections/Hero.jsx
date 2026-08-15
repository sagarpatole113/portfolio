import { ArrowRight,  Mail } from 'lucide-react'
import { Github, Linkedin } from '../components/BrandIcons'
import { githubUrl, linkedinUrl, emailAddress } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="fade-up">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">
                Full Stack Developer • 3+ Years Experience
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I&apos;m
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Sagar Patole
                </span>
              </span>
              I build scalable, secure
              <span className="block">web applications.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl">
              Full Stack Developer specializing in .NET Core, React.js and Node.js, with experience building scalable APIs, secure backend systems and enterprise web applications.
            </p>

            {/* Availability badge */}
            <div className="mb-8 flex items-center gap-2 text-sm text-foreground/70">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Open to Full Stack Development Opportunities</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-all duration-300 hover:gap-3"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => alert('Resume download feature coming soon!')}
                className="flex items-center justify-center gap-2 px-8 py-3 border border-primary/50 text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
              >
                Download Resume
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card-bg hover:bg-primary/20 rounded-lg text-foreground hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card-bg hover:bg-primary/20 rounded-lg text-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="p-3 bg-card-bg hover:bg-primary/20 rounded-lg text-foreground hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Terminal visual */}
          <div className="fade-up hidden md:block">
            <div className="bg-card-bg border border-border-color rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-background px-4 py-3 border-b border-border-color flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-foreground/50 text-xs ml-4">terminal</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-primary mb-2">$ developer.profile</div>

                <div className="space-y-1 text-foreground/80 mb-4">
                  <div>
                    <span className="text-accent">name</span>
                    <span className="text-foreground/50">       </span>
                    <span>Sagar Patole</span>
                  </div>
                  <div>
                    <span className="text-accent">role</span>
                    <span className="text-foreground/50">       </span>
                    <span>Full Stack Developer</span>
                  </div>
                  <div>
                    <span className="text-accent">experience</span>
                    <span className="text-foreground/50"> </span>
                    <span>3+ years</span>
                  </div>
                </div>

                <div className="space-y-1 text-foreground/80">
                  <div>
                    <span className="text-accent">backend</span>
                    <span className="text-foreground/50">    </span>
                    <span>.NET Core / Node.js</span>
                  </div>
                  <div>
                    <span className="text-accent">frontend</span>
                    <span className="text-foreground/50">    </span>
                    <span>React.js</span>
                  </div>
                  <div>
                    <span className="text-accent">database</span>
                    <span className="text-foreground/50">    </span>
                    <span>PostgreSQL / MongoDB</span>
                  </div>
                </div>

                <div className="mt-4 text-primary">
                  $ building scalable systems...
                  <span className="cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
