export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
