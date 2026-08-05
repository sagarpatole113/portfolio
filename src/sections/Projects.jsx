import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Professional projects that demonstrate my expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 p-8 bg-background rounded-lg border border-border-color text-center">
          <p className="text-foreground/70 mb-4">
            These are my notable professional projects with Grow Indigo and other organizations. Each project demonstrates different aspects of full-stack development, from API design to frontend optimization.
          </p>
          <p className="text-sm text-foreground/60">
            All projects involved solving real-world engineering challenges with scalable, secure and maintainable solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
