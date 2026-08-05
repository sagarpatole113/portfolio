import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, featured }) {
  return (
    <div className={`group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-2xl ${
      featured
        ? 'border-primary bg-gradient-to-br from-card-bg to-transparent md:col-span-2 lg:col-span-1'
        : 'border-border-color bg-card-bg hover:border-primary'
    }`}>
      {/* Background gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 md:p-8">
        {/* Type badge */}
        <div className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
          {project.type}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3">Key Contributions</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.highlights.slice(0, 4).map((highlight, i) => (
              <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-background border border-border-color rounded-md text-foreground/80 hover:border-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details button */}
        <button className="mt-6 flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium">
          View Details
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  )
}
