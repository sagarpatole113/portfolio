import { ChevronRight } from 'lucide-react'

export default function ExperienceCard({ exp, isLast }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-20 h-12 w-1 bg-gradient-to-b from-primary to-primary/20" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 rounded-full bg-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="pb-12 flex-1">
          <div className="group">
            {/* Header */}
            <div className="mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {exp.position}
              </h3>
              <p className="text-primary font-semibold">
                {exp.company} • {exp.location}
              </p>
            </div>

            {/* Duration */}
            <p className="text-sm text-foreground/60 mb-4">
              {exp.duration}
            </p>

            {/* Description */}
            <p className="text-foreground/80 mb-4">
              {exp.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-background border border-border-color rounded-full text-foreground/70 hover:border-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="ml-4">
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/75">
                    <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
