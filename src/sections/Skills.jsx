import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import { skills } from '../data/portfolioData'

export default function Skills() {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'Security', items: skills.security },
    { title: 'Tools', items: skills.tools },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card-bg/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="bg-background rounded-lg p-6 border border-border-color hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, j) => (
                  <SkillBadge key={j} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-foreground/70">
            I believe in continuous learning and staying updated with the latest technologies and best practices in software development.
          </p>
        </div>
      </div>
    </section>
  )
}
