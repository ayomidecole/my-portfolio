function ExperienceItem({ role, company, location, start, end, bullets = [], tags = [], logo }) {
  return (
    <article className="relative pl-6 pb-6 border-b border-gray-100">
      {/* Timeline dot */}
      <div className="absolute left-[-7px] top-5 h-2.5 w-2.5 rounded-full bg-gray-900 ring-2 ring-white shadow-[0_0_0_2px_#e5e7eb]" />

      {/* Header */}
      <header className="flex items-baseline justify-between gap-4">
        <h3 className="m-0 font-semibold text-gray-900">
          <span className="inline-flex items-center gap-2">
            {logo && (
              <img
                src={logo}
                alt={`${company} logo`}
                className="h-6 w-6 rounded object-contain"
              />
            )}
            {role} <span className="text-gray-600">@ {company}</span>
          </span>
        </h3>
        <span className="text-sm text-gray-600">{start} – {end}</span>
      </header>

      {/* Meta */}
      <p className="mt-1 mb-3 text-gray-700">{location}</p>

      {/* Bullets */}
      <ul className="mb-3 ml-5 list-disc space-y-1 text-gray-800">
        {bullets.map((b, i) => (
          <li key={i} className="leading-relaxed">{b}</li>
        ))}
      </ul>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 rounded-full border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ExperienceItem;
