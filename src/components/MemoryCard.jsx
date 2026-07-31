export default function MemoryCard({ memory, index, visible }) {
  // Stagger floating animation offset per card
  const floatDelay = index * 1.4

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.02] ${
        visible ? 'opacity-0 animate-section-reveal' : 'opacity-0'
      }`}
      style={{
        animationDelay: visible ? `${0.2 + index * 0.18}s` : undefined,
        animationFillMode: 'forwards',
        /* Premium polaroid-style shadow */
        boxShadow:
          '0 2px 0 1px rgba(200,139,153,0.12), 0 6px 20px rgba(200,139,153,0.18), 0 20px 48px rgba(180,100,130,0.12), inset 0 1px 0 rgba(255,255,255,0.85)',
        background: 'linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(255,248,252,0.94) 100%)',
      }}
    >
      {/* ── Polaroid white border frame ── */}
      <div className="p-3 pb-0">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={memory.image}
            alt={memory.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            style={{ transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          />

          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(58,31,46,0.55)] via-[rgba(58,31,46,0.1)] to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Glass reflection at top */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/12 to-transparent" />

          {/* Date badge */}
          <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/25 px-3 py-1 text-[0.68rem] font-medium tracking-wide text-white backdrop-blur-md">
            {memory.date}
          </span>

          {/* Shimmer on hover */}
          <div
            className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-none group-hover:animate-shimmer"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── Content area — polaroid caption style ── */}
      <div className="relative px-4 py-4 sm:px-5 sm:py-5">
        {/* Floating animation on whole card */}
        <div
          className="absolute -inset-full"
          style={{
            animation: `card-float ${7 + floatDelay * 0.5}s ease-in-out ${floatDelay * 0.3}s infinite`,
          }}
        />

        <div className="mb-2.5 flex items-center gap-2">
          <span className="text-xl" role="img" aria-hidden="true">{memory.emoji}</span>
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-pink-accent" aria-hidden="true">
            <path
              d="M8 14 C8 14 2 9 2 5.5 C2 3.5 3.5 2 5.5 2 C6.8 2 8 2.8 8 4 C8 2.8 9.2 2 10.5 2 C12.5 2 14 3.5 14 5.5 C14 9 8 14 8 14Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <h3 className="font-heading text-[1.15rem] font-semibold leading-tight tracking-wide text-text-primary sm:text-[1.3rem]">
          {memory.title}
        </h3>
        <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-rose-gold/80">
          {memory.subtitle}
        </p>
        <p className="mt-2.5 text-[0.82rem] leading-[1.75] text-text-secondary/85">
          {memory.description}
        </p>

        {/* Bottom ornament */}
        <div className="mt-4 flex items-center gap-2 opacity-40">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-gold/60" />
          <svg viewBox="0 0 12 12" className="h-2 w-2 text-rose-gold" aria-hidden="true">
            <circle cx="6" cy="6" r="2" fill="currentColor" />
          </svg>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-gold/60" />
        </div>
      </div>

      {/* ── Hover glow border ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-600 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, rgba(247,202,219,0.18), transparent 50%, rgba(244,175,198,0.12))',
          boxShadow: 'inset 0 0 0 1px rgba(244,175,198,0.35)',
        }}
        aria-hidden="true"
      />
    </article>
  )
}
