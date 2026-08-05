import { Award } from 'lucide-react'
import { award } from '../data/portfolioData'

export default function Achievement() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Recognition
        </h2>

        <div className="flex flex-col items-center justify-center gap-6">
          {/* Award icon */}
          <div className="p-4 bg-primary/20 rounded-full">
            <Award size={48} className="text-primary" />
          </div>

          {/* Award content */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">
              {award.title}
            </h3>
            <p className="text-foreground/70 text-lg mb-4">
              {award.year}
            </p>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
              {award.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
