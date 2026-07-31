const WORDS = ["HAPPY", "GIRLFRIEND'S", "DAY!"]

const SUBTITLE =
  "Every flower blooms with grace, just as every moment becomes more beautiful because of you. Happy Girlfriend's Day, my love."

function OrnamentLine({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={`h-2.5 w-24 sm:h-3 sm:w-40 ${className}`}
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
      className="relative z-20 flex w-full flex-col items-center px-3 text-center sm:px-6"
      aria-labelledby="hero-title"
      aria-live="polite"
    >
      <div
        className="relative w-full max-w-[92vw] rounded-2xl border border-white/50 bg-white/20 px-4 py-8 shadow-[0_24px_64px_rgba(200,139,153,0.18),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl sm:max-w-2xl sm:rounded-3xl sm:px-14 sm:py-12"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,234,242,0.25) 50%, rgba(255,255,255,0.2) 100%)',
        }}
      >
        {/* Corner accents */}
        <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-rose-gold/40 rounded-tl-lg sm:left-4 sm:top-4 sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-rose-gold/40 rounded-tr-lg sm:right-4 sm:top-4 sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-rose-gold/40 rounded-bl-lg sm:bottom-4 sm:left-4 sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-rose-gold/40 rounded-br-lg sm:bottom-4 sm:right-4 sm:h-6 sm:w-6" aria-hidden="true" />

        <span
          className="mb-3 block text-2xl opacity-0 animate-fade-up sm:mb-4 sm:text-4xl"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>

        <div
          className="mx-auto mb-4 opacity-0 animate-fade-in sm:mb-5"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          <OrnamentLine />
        </div>

        {/* Title: three intentional stacked lines, never collapsing into one row */}
        <h1
          id="hero-title"
          className="font-heading font-semibold text-text-primary animate-glow-pulse mx-auto mt-4 mb-6 flex w-full max-w-[85vw] flex-col items-center justify-center gap-y-1 sm:max-w-md sm:gap-y-2 md:max-w-lg"
        >
          {WORDS.map((word, wordIndex) => {
            const delay = 0.35 + wordIndex * 0.2 // ~200ms stagger between lines
            return (
              <span
                key={word}
                className="block whitespace-nowrap text-center leading-[0.95] tracking-tight opacity-0 animate-title-line text-[clamp(2.4rem,11vw,3.5rem)] sm:text-[clamp(3.5rem,7vw,5.5rem)] md:text-[clamp(4.5rem,6vw,7rem)]"
                style={{
                  animationDelay: `${delay}s`,
                  animationFillMode: 'forwards',
                  textShadow: '0 2px 10px rgba(247, 202, 219, 0.4)',
                }}
              >
                {word}
              </span>
            )
          })}
        </h1>

        <div
          className="mx-auto mt-4 opacity-0 animate-fade-in sm:mt-5"
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
          <OrnamentLine />
        </div>

        <span
          className="mt-3 block text-2xl opacity-0 animate-letter-reveal sm:mt-4 sm:text-4xl"
          style={{ animationDelay: '1.65s', animationFillMode: 'forwards' }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>

        <p
          className="mx-auto mt-6 max-w-lg font-body text-[clamp(0.85rem,3.2vw,1.12rem)] font-light italic leading-[1.65] text-text-secondary opacity-0 animate-fade-up sm:mt-8 sm:leading-[1.75]"
          style={{ animationDelay: '2.05s', animationFillMode: 'forwards' }}
        >
          &ldquo;{SUBTITLE}&rdquo;
        </p>
      </div>
    </section>
  )
}