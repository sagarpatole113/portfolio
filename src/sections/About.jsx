import SectionHeading from '../components/SectionHeading'
import { aboutText, profileInfo } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Main description */}
          <div className="md:col-span-2">
            <div className="bg-card-bg rounded-lg p-8 border border-border-color hover:border-primary/50 transition-colors duration-300">
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                {aboutText.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Profile card */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-card-bg to-background rounded-lg p-6 border border-border-color hover:border-primary/50 transition-colors duration-300 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-6">Profile</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Role</p>
                  <p className="text-foreground font-semibold">{profileInfo.role}</p>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Experience</p>
                  <p className="text-foreground font-semibold">{profileInfo.experience}</p>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Location</p>
                  <p className="text-foreground font-semibold">{profileInfo.location}</p>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Focus</p>
                  <p className="text-foreground font-semibold">{profileInfo.focus}</p>
                </div>

                <div className="pt-4 border-t border-border-color">
                  <p className="text-sm text-foreground/60 uppercase tracking-wider mb-3">Interests</p>
                  <div className="space-y-2">
                    {profileInfo.interests.map((interest, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground text-sm">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
