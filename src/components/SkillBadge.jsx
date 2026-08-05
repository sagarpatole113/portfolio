export default function SkillBadge({ skill }) {
  return (
    <div className="px-4 py-2 bg-card-bg border border-border-color rounded-full text-foreground text-sm hover:border-primary hover:shadow-lg transition-all duration-300 cursor-default">
      {skill}
    </div>
  )
}
