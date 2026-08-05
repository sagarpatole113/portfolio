import SectionHeading from '../components/SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-card-bg/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education & Certification"
          subtitle="My academic and professional development"
        />

        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-6 md:p-8 bg-background rounded-lg border border-border-color hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-foreground/80 mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-semibold text-foreground">
                    {edu.year || edu.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
