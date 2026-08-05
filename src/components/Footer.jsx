import { Github, Linkedin, Mail } from 'lucide-react'
import { githubUrl, linkedinUrl, emailAddress } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card-bg border-t border-border-color">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary mb-2">
              <span className="text-foreground">&lt;</span>
              <span>SP</span>
              <span className="text-foreground">/&gt;</span>
            </div>
            <p className="text-foreground/70">Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2 text-foreground/70 text-sm">
              <a href="#home" className="hover:text-primary transition-colors">Home</a><br />
              <a href="#about" className="hover:text-primary transition-colors">About</a><br />
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a><br />
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-color pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Sagar Patole. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60">
              Built with React.js + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
