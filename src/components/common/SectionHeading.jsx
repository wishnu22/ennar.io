function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-4xl min-w-0 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-[#C7A15A] sm:text-sm">{eyebrow}</p>
      <h2 className="font-display break-words text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.94] tracking-[-0.02em] text-slate-900">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl break-words text-[1rem] leading-8 text-slate-600 sm:text-[1.06rem] sm:leading-8">{description}</p>
    </div>
  )
}

export default SectionHeading
