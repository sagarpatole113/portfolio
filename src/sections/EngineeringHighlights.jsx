import SectionHeading from '../components/SectionHeading'
import { engineeringHighlights } from '../data/portfolioData'

export default function EngineeringHighlights() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Engineering Expertise"
          subtitle="Areas where I deliver value"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringHighlights.map((highlight, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 bg-background rounded-lg border border-border-color hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {highlight.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {highlight.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 bg-card-bg border border-border-color rounded-full text-foreground/80 group-hover:border-primary/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
