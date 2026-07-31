const TITLE = "HAPPY GIRLFRIEND'S DAY"

const SUBTITLE =
  "Every flower blooms with grace, just as every moment becomes more beautiful because of you. Happy Girlfriend's Day, my love."

function OrnamentLine({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={`h-3 w-32 sm:w-40 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ornament-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#C88B99" />
          <stop offset="50%" stopColor="#F4AFC6" />
          <stop offset="70%" stopColor="#C88B99" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M 0 6 Q 50 2 100 6 Q 150 10 200 6"
        stroke="url(#ornament-grad)"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="100" cy="6" r="2.5" fill="#C88B99" opacity="0.8" />
    </svg>
  )
}

export default function HeroMessage({ visible }) {
  if (!visible) {
    return (
      <div className="sr-only" aria-live="polite">
        Preparing your message...
      </div>
    )
  }

  return (
    <section
      className="relative z-20 flex flex-col items-center px-4 text-center sm:px-6"
      aria-labelledby="hero-title"
      aria-live="polite"
    >
      <div
        className="relative rounded-3xl border border-white/50 bg-white/20 px-8 py-10 shadow-[0_24px_64px_rgba(200,139,153,0.18),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl sm:px-14 sm:py-12"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,234,242,0.25) 50%, rgba(255,255,255,0.2) 100%)',
        }}
      >
        {/* Corner accents */}
        <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-rose-gold/40 rounded-tl-lg" aria-hidden="true" />
        <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-rose-gold/40 rounded-tr-lg" aria-hidden="true" />
        <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-rose-gold/40 rounded-bl-lg" aria-hidden="true" />
        <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-rose-gold/40 rounded-br-lg" aria-hidden="true" />

        <span
          className="mb-4 block text-3xl sm:text-4xl opacity-0 animate-fade-up"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>

        <div
          className="mx-auto mb-5 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          <OrnamentLine />
        </div>

        <h1
          id="hero-title"
          className="font-heading text-[clamp(2rem,7.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[0.06em] text-text-primary animate-glow-pulse"
        >
          {TITLE.split('').map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="inline-block opacity-0 animate-letter-reveal"
              style={{
                animationDelay: `${0.35 + i * 0.042}s`,
                animationFillMode: 'forwards',
                minWidth: char === ' ' ? '0.35em' : undefined,
              }}
              aria-hidden={char === ' '}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div
          className="mx-auto mt-5 opacity-0 animate-fade-in"
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
          <OrnamentLine />
        </div>

        <span
          className="mt-4 block text-3xl sm:text-4xl opacity-0 animate-letter-reveal"
          style={{ animationDelay: '1.65s', animationFillMode: 'forwards' }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>

        <p
          className="mx-auto mt-8 max-w-lg font-body text-[clamp(0.95rem,2.5vw,1.12rem)] font-light italic leading-[1.75] text-text-secondary opacity-0 animate-fade-up"
          style={{ animationDelay: '2.05s', animationFillMode: 'forwards' }}
        >
          &ldquo;{SUBTITLE}&rdquo;
        </p>
      </div>
    </section>
  )
}
