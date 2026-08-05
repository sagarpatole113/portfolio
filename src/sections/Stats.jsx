import { stats } from '../data/portfolioData'

export default function Stats() {
  return (
    <section className="py-12 px-4 bg-card-bg border-y border-border-color">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <p className="text-foreground/70 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
