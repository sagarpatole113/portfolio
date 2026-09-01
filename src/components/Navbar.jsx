import { useState } from 'react'
import { Menu, X,  FileText } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { githubUrl, linkedinUrl } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-color">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold text-lg text-primary hover:text-primary-dark">
            <span className="text-foreground">&lt;</span>
            <span>SP</span>
            <span className="text-foreground">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side icons and button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-background rounded-md transition-colors font-medium text-sm"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card-bg rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border-color">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-card-bg rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 px-4 pt-2">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
