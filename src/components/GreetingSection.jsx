const TITLE = "HAPPY GIRLFRIEND'S DAY"
const TAGLINE = '✦  August 1  ·  A Day For Love  ✦'
const SUBTITLE =
  'Every flower blossoms beautifully, just as every day becomes brighter because of you.'

function OrnamentLine({ wide = false }) {
  return (
    <svg
      viewBox="0 0 260 16"
      className={`mx-auto h-4 ${wide ? 'w-48 sm:w-64' : 'w-36 sm:w-48'}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="greet-ornament" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="20%"  stopColor="#C88B99" stopOpacity="0.4" />
          <stop offset="45%"  stopColor="#F4AFC6" />
          <stop offset="50%"  stopColor="#E8A0B8" />
          <stop offset="55%"  stopColor="#F4AFC6" />
          <stop offset="80%"  stopColor="#C88B99" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Main wave */}
      <path
        d="M 0 8 Q 65 3 130 8 Q 195 13 260 8"
        stroke="url(#greet-ornament)"
        strokeWidth="0.9"
        fill="none"
      />
      {/* Tiny flourishes */}
      <path d="M 108 8 L 104 4 M 108 8 L 104 12" stroke="#C88B99" strokeWidth="0.6" fill="none" opacity="0.6" />
      <circle cx="130" cy="8" r="2.8" fill="#C88B99" opacity="0.7" />
      <path d="M 152 8 L 156 4 M 152 8 L 156 12" stroke="#C88B99" strokeWidth="0.6" fill="none" opacity="0.6" />
    </svg>
  )
}

function FloralAccent() {
  return (
    <div className="flex items-center justify-center gap-3 opacity-0 animate-fade-in"
         style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}>
      <svg viewBox="0 0 32 12" className="h-2.5 w-12 sm:w-16" aria-hidden="true">
        <path d="M 0 6 Q 8 2 16 6 Q 24 10 32 6" stroke="#C88B99" strokeWidth="0.7" fill="none" opacity="0.5" />
      </svg>
      <span
        className="font-heading text-[0.62rem] sm:text-[0.7rem] tracking-[0.22em] uppercase text-rose-gold/70 opacity-0 animate-tag-reveal"
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        {TAGLINE}
      </span>
      <svg viewBox="0 0 32 12" className="h-2.5 w-12 sm:w-16 scale-x-[-1]" aria-hidden="true">
        <path d="M 0 6 Q 8 2 16 6 Q 24 10 32 6" stroke="#C88B99" strokeWidth="0.7" fill="none" opacity="0.5" />
      </svg>
    </div>
  )
}

export default function GreetingSection({ visible }) {
  if (!visible) {
    return (
      <div className="sr-only" aria-live="polite">
        Preparing your greeting...
      </div>
    )
  }

  return (
    <section
      className="relative z-20 flex flex-col items-center px-4 text-center sm:px-6"
      aria-labelledby="greeting-title"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Tagline */}
        <FloralAccent />

        {/* Top ornament */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <OrnamentLine wide />
        </div>

        {/* Heart */}
        <span
          className="block text-4xl sm:text-5xl md:text-6xl opacity-0 animate-section-reveal"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>

        {/* Main title */}
        <h1
          id="greeting-title"
          className="font-heading text-[clamp(2.6rem,9vw,6rem)] font-semibold leading-[1.04] tracking-[0.06em] text-text-primary animate-glow-pulse"
        >
          {TITLE.split('').map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="inline-block opacity-0 animate-letter-reveal"
              style={{
                animationDelay: `${0.35 + i * 0.038}s`,
                animationFillMode: 'forwards',
                minWidth: char === ' ' ? '0.32em' : undefined,
              }}
              aria-hidden={char === ' '}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Heart */}
        <span
          className="block text-4xl sm:text-5xl md:text-6xl opacity-0 animate-letter-reveal"
          style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>

        {/* Bottom ornament */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
        >
          <OrnamentLine wide />
        </div>

        {/* Quote */}
        <p
          className="mx-auto mt-4 max-w-xl font-heading text-[clamp(1.05rem,2.8vw,1.3rem)] font-light italic leading-[1.9] text-text-secondary/90 opacity-0 animate-fade-up"
          style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}
        >
          &ldquo;{SUBTITLE}&rdquo;
        </p>
      </div>
    </section>
  )
}
