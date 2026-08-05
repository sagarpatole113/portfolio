import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey in full-stack development"
        />

        <div className="relative">
          {experience.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
