import { useState } from 'react'
import { Mail, AlertCircle, CheckCircle } from 'lucide-react'
import { emailAddress } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulate form submission
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })

    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Build Something Great.
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I&apos;m open to Full Stack Developer and Software Engineer opportunities where I can contribute to building scalable and reliable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact info */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-start gap-4 p-4 bg-card-bg rounded-lg border border-border-color hover:border-primary transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Email</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {emailAddress}
                  </p>
                </div>
              </a>

              {/* Quick actions */}
              <div className="space-y-3">
                <a
                  href={`mailto:${emailAddress}?subject=Let's Work Together&body=Hi Sagar,%0D%0A%0D%0AI'd like to discuss opportunities with you.`}
                  className="block px-6 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Email Me
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="block px-6 py-3 border border-border-color hover:border-primary rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="space-y-4">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card-bg border rounded-lg outline-none transition-all duration-300 text-foreground placeholder-foreground/40 ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-border-color focus:border-primary focus:shadow-lg focus:shadow-primary/20'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card-bg border rounded-lg outline-none transition-all duration-300 text-foreground placeholder-foreground/40 ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-border-color focus:border-primary focus:shadow-lg focus:shadow-primary/20'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 bg-card-bg border rounded-lg outline-none transition-all duration-300 text-foreground placeholder-foreground/40 resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-border-color focus:border-primary focus:shadow-lg focus:shadow-primary/20'
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>

              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Message received! I&apos;ll get back to you soon.</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
