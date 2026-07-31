import { MEMORY_CARDS } from '../utils/bouquetConfig'
import MemoryCard from './MemoryCard'

function SectionDivider() {
  return (
    <div className="mx-auto flex items-center gap-4 opacity-0 animate-fade-in"
         style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-rose-gold/50 sm:w-28" />
      <svg viewBox="0 0 24 12" className="h-2.5 w-10" aria-hidden="true">
        <path d="M 0 6 L 4 2 L 8 6 L 12 2 L 16 6 L 20 2 L 24 6"
          stroke="#C88B99" strokeWidth="0.8" fill="none" opacity="0.6" />
      </svg>
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-rose-gold/65" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 12" className="h-2.5 w-10 scale-x-[-1]" aria-hidden="true">
        <path d="M 0 6 L 4 2 L 8 6 L 12 2 L 16 6 L 20 2 L 24 6"
          stroke="#C88B99" strokeWidth="0.8" fill="none" opacity="0.6" />
      </svg>
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-rose-gold/50 sm:w-28" />
    </div>
  )
}

export default function MemoriesSection({ visible }) {
  return (
    <section
      id="memories"
      className="relative px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
      aria-labelledby="memories-heading"
    >
      {/* Subtle section background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-48 w-[70vw] blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse, rgba(247,202,219,0.6) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14 text-center sm:mb-18">
          <p
            className={`mb-3 font-body text-[0.68rem] uppercase tracking-[0.28em] text-rose-gold/65 opacity-0 ${
              visible ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
          >
            ✦ Treasured Moments ✦
          </p>
          <h2
            id="memories-heading"
            className={`font-heading text-[clamp(2.1rem,5vw,3.4rem)] font-semibold tracking-[0.04em] text-text-primary opacity-0 ${
              visible ? 'animate-section-reveal' : ''
            }`}
            style={{ animationFillMode: 'forwards' }}
          >
            Our Beautiful Memories
          </h2>
          <div className="mt-6">
            <SectionDivider />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {MEMORY_CARDS.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
