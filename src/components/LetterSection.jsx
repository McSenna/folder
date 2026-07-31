import { useState, useCallback } from 'react'

const LETTER_CONTENT = [
  'Happy Girlfriend\'s Day, my dearest lalab. ❤️🌹 Thank you for choosing to love me every single day,',
  'for believing in me even when I struggle to believe in myself, and for always being my greatest',
  'supporter. Thank you for caring for me with a love so genuine and selfless that it makes me feel like',
  'the luckiest man in the world. You are my safe place, my comfort, and one of the greatest blessings in my life.',
  '',
  'I know I may not be able to give you everything you deserve right now, but I promise that this is not',
  'where our story ends. One day, I\'ll make it all up to you. I\'ll repay every sacrifice, every understanding,',
  'every tear, and every moment you\'ve stayed by my side with a love that never stops choosing you.',
  'Until that day comes, please hold my hand a little longer, because every step I take is for us and for the',
  'beautiful future we\'ll build together. I love you more than words could ever express, today, tomorrow,',
  'and for the rest of my life. Happy Girlfriend\'s Day, my forever love. 🤍',
]

/* ── Decorative SVG envelope component ── */
function EnvelopeSVG({ isOpen }) {
  return (
    <svg
      viewBox="0 0 300 200"
      className="h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* Envelope body gradient — warm ivory */}
        <linearGradient id="env-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fdf6ee" />
          <stop offset="50%"  stopColor="#f8ece0" />
          <stop offset="100%" stopColor="#f2e2d0" />
        </linearGradient>
        {/* Envelope interior (visible when open) */}
        <linearGradient id="env-interior" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#e8d8c8" />
          <stop offset="100%" stopColor="#d4c0aa" />
        </linearGradient>
        {/* Flap gradient */}
        <linearGradient id="env-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f5ebe0" />
          <stop offset="70%"  stopColor="#ecdcc8" />
          <stop offset="100%" stopColor="#e0ccb8" />
        </linearGradient>
        {/* Side flap left */}
        <linearGradient id="env-side-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ecdccc" />
          <stop offset="100%" stopColor="#f5ede0" />
        </linearGradient>
        {/* Side flap right */}
        <linearGradient id="env-side-r" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#f5ede0" />
          <stop offset="100%" stopColor="#ecdccc" />
        </linearGradient>
        {/* Rose-gold accent */}
        <linearGradient id="rg-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#d4a8b4" />
          <stop offset="50%"  stopColor="#c08898" />
          <stop offset="100%" stopColor="#b07888" />
        </linearGradient>
        {/* Wax seal gradient */}
        <radialGradient id="wax-seal" cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#e05060" />
          <stop offset="50%"  stopColor="#c03848" />
          <stop offset="100%" stopColor="#901828" />
        </radialGradient>
        <filter id="env-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#8a6040" floodOpacity="0.22" />
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#d4a080" floodOpacity="0.15" />
        </filter>
        <filter id="seal-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#600020" floodOpacity="0.4" />
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      <g filter="url(#env-shadow)">
        {/* ── Envelope body ── */}
        <rect x="10" y="60" width="280" height="130" rx="6" ry="6" fill="url(#env-body)" />

        {/* ── Interior shadow (always visible at bottom) ── */}
        <rect x="10" y="150" width="280" height="40" rx="0" ry="0" fill="url(#env-interior)" opacity="0.4" />

        {/* ── Bottom fold left ── */}
        <polygon points="10,190 150,125 10,60" fill="url(#env-side-l)" opacity="0.75" />

        {/* ── Bottom fold right ── */}
        <polygon points="290,190 150,125 290,60" fill="url(#env-side-r)" opacity="0.75" />

        {/* ── Bottom flap (always visible) ── */}
        <polygon points="10,190 150,130 290,190" fill="url(#env-flap)" opacity="0.9" />

        {/* ── Rose-gold border accent ── */}
        <rect x="10" y="60" width="280" height="130" rx="6" ry="6"
          fill="none" stroke="url(#rg-accent)" strokeWidth="1.2" opacity="0.55" />

        {/* ── Decorative inner border ── */}
        <rect x="16" y="66" width="268" height="118" rx="4" ry="4"
          fill="none" stroke="#c08898" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />

        {/* ── TOP FLAP ── animated open/close ── */}
        <g
          style={{
            transformOrigin: '150px 60px',
            transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
            transition: 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transformStyle: 'preserve-3d',
          }}
        >
          <polygon points="10,60 290,60 150,130" fill="url(#env-flap)" />
          <polygon points="10,60 290,60 150,130"
            fill="none" stroke="url(#rg-accent)" strokeWidth="1" opacity="0.5" />
          {/* Flap crease line */}
          <line x1="10" y1="60" x2="290" y2="60"
            stroke="#c8a888" strokeWidth="0.8" opacity="0.6" />
        </g>
      </g>

      {/* ── Wax seal — only shown when closed ── */}
      {!isOpen && (
        <g
          style={{
            transformOrigin: '150px 130px',
            transition: 'opacity 0.3s ease',
          }}
          filter="url(#seal-shadow)"
        >
          <circle cx="150" cy="130" r="18" fill="url(#wax-seal)" />
          {/* Heart emboss */}
          <path
            d="M 150 124 C 150 124 144 119 141 121 C 138 123 138 127 141 130 L 150 138 L 159 130 C 162 127 162 123 159 121 C 156 119 150 124 150 124 Z"
            fill="rgba(255,255,255,0.28)"
          />
          {/* Outer ring */}
          <circle cx="150" cy="130" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <circle cx="150" cy="130" r="15" fill="none" stroke="rgba(255,200,180,0.25)" strokeWidth="0.6" />
        </g>
      )}
    </svg>
  )
}

/* ── Floral corner accent ── */
function FloralCorner({ flip = false }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className="h-12 w-12 sm:h-14 sm:w-14 text-rose-gold/30"
      style={{ transform: flip ? 'scale(-1, -1)' : undefined }}
      aria-hidden="true"
    >
      <path
        d="M 5 55 C 5 55 5 30 15 20 C 20 15 28 12 28 12"
        stroke="currentColor" strokeWidth="1" fill="none"
      />
      {/* Small rose */}
      <circle cx="28" cy="11" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="28" cy="11" r="3" fill="currentColor" opacity="0.4" />
      {/* Leaves */}
      <path d="M 10 38 C 6 34 4 28 8 26 C 12 24 14 30 10 38 Z" fill="currentColor" opacity="0.5" />
      <path d="M 15 30 C 12 24 14 18 18 18 C 22 18 20 26 15 30 Z" fill="currentColor" opacity="0.45" />
      {/* Small bud */}
      <circle cx="22" cy="22" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

/* ── The letter card itself ── */
function LetterCard({ onClose }) {
  return (
    <div
      className="relative mx-auto max-w-2xl w-full rounded-[20px] overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #faf6ee 0%, #f8f0e6 60%, #f5ebe0 100%)',
        boxShadow:
          '0 4px 0 1px rgba(200,150,100,0.12), 0 16px 48px rgba(160,100,60,0.2), 0 40px 100px rgba(140,80,50,0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
        border: '1px solid rgba(200,160,120,0.3)',
      }}
    >
      {/* Paper texture stripe */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(140,100,60,0.5) 24px, rgba(140,100,60,0.5) 25px)',
        }}
        aria-hidden="true"
      />

      {/* Floral corner accents */}
      <div className="absolute left-3 top-3 pointer-events-none">
        <FloralCorner />
      </div>
      <div className="absolute right-3 top-3 pointer-events-none">
        <FloralCorner flip />
      </div>
      <div className="absolute left-3 bottom-3 pointer-events-none" style={{ transform: 'scale(1, -1)' }}>
        <FloralCorner />
      </div>
      <div className="absolute right-3 bottom-3 pointer-events-none" style={{ transform: 'scale(-1, -1)' }}>
        <FloralCorner />
      </div>

      {/* Rose-gold inner border */}
      <div
        className="absolute inset-[10px] rounded-[14px] pointer-events-none"
        style={{ border: '1px solid rgba(200,140,100,0.2)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative px-10 py-12 sm:px-16 sm:py-14">
        {/* Decorative header ornament */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <svg viewBox="0 0 200 14" className="h-3 w-40 mx-auto" aria-hidden="true">
            <defs>
              <linearGradient id="letter-orn" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="#c08888" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#d4a898" />
                <stop offset="70%" stopColor="#c08888" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M 0 7 Q 50 2 100 7 Q 150 12 200 7"
              stroke="url(#letter-orn)" strokeWidth="1" fill="none" />
            <circle cx="100" cy="7" r="2.5" fill="#c09080" opacity="0.65" />
          </svg>

          <h2
            className="font-heading text-[clamp(1.5rem,4.5vw,2.4rem)] font-semibold italic leading-tight tracking-wide"
            style={{ color: '#8a5040', textShadow: '0 1px 4px rgba(140,80,50,0.1)' }}
          >
            My Dearest Love
          </h2>

          <svg viewBox="0 0 200 14" className="h-3 w-40 mx-auto scale-x-[-1]" aria-hidden="true">
            <path d="M 0 7 Q 50 2 100 7 Q 150 12 200 7"
              stroke="url(#letter-orn)" strokeWidth="1" fill="none" />
            <circle cx="100" cy="7" r="2.5" fill="#c09080" opacity="0.65" />
          </svg>
        </div>

        {/* Letter body */}
        <div
          className="font-body text-[clamp(0.88rem,2.2vw,1rem)] leading-[2.1] space-y-0"
          style={{ color: '#5a3828' }}
        >
          {LETTER_CONTENT.map((line, i) =>
            line === '' ? (
              <div key={`br-${i}`} className="h-4" />
            ) : (
              <p
                key={i}
                className={
                  i === 0
                    ? 'font-heading text-[clamp(1rem,2.6vw,1.15rem)] font-medium italic'
                    : i >= LETTER_CONTENT.length - 2
                    ? 'font-heading text-[clamp(0.95rem,2.4vw,1.1rem)] font-medium italic'
                    : ''
                }
              >
                {line}
              </p>
            )
          )}
        </div>

        {/* Closing ornament */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <svg viewBox="0 0 200 14" className="h-3 w-32 mx-auto" aria-hidden="true">
            <path d="M 0 7 Q 50 2 100 7 Q 150 12 200 7"
              stroke="url(#letter-orn)" strokeWidth="1" fill="none" />
            <circle cx="100" cy="7" r="2" fill="#c09080" opacity="0.55" />
          </svg>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="group mt-2 flex items-center gap-2 rounded-full border border-[rgba(200,140,100,0.35)] bg-white/50 px-6 py-2.5 text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-[0_4px_16px_rgba(180,100,60,0.18)] hover:border-[rgba(200,140,100,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/50"
            style={{ color: '#8a5040' }}
            aria-label="Close letter"
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true">
              <path d="M8 14 C8 14 2 9 2 5.5 C2 3.5 3.5 2 5.5 2 C6.8 2 8 2.8 8 4 C8 2.8 9.2 2 10.5 2 C12.5 2 14 3.5 14 5.5 C14 9 8 14 8 14Z"
                fill="currentColor" opacity="0.7" />
            </svg>
            Close Letter
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Section header ── */
function SectionHeader({ visible }) {
  return (
    <header className="mb-14 text-center sm:mb-16">
      <p
        className={`mb-3 font-body text-[0.68rem] uppercase tracking-[0.28em] text-rose-gold/65 opacity-0 ${
          visible ? 'animate-fade-in' : ''
        }`}
        style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
      >
        ✦ For You, Always ✦
      </p>
      <h2
        id="letter-heading"
        className={`font-heading text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[0.04em] text-text-primary opacity-0 ${
          visible ? 'animate-section-reveal' : ''
        }`}
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        A Letter From My Heart
      </h2>
      <div
        className={`mt-5 mx-auto opacity-0 ${visible ? 'animate-fade-in' : ''}`}
        style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
      >
        <svg viewBox="0 0 260 14" className="mx-auto h-3 w-44 sm:w-52" aria-hidden="true">
          <defs>
            <linearGradient id="sec-orn" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="transparent" />
              <stop offset="25%"  stopColor="#C88B99" stopOpacity="0.5" />
              <stop offset="50%"  stopColor="#F4AFC6" />
              <stop offset="75%"  stopColor="#C88B99" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M 0 7 Q 65 2 130 7 Q 195 12 260 7"
            stroke="url(#sec-orn)" strokeWidth="0.9" fill="none" />
          <circle cx="130" cy="7" r="2.5" fill="#C88B99" opacity="0.7" />
        </svg>
      </div>
    </header>
  )
}

/* ── Main export ── */
export default function LetterSection({ visible }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleOpen = useCallback(() => {
    if (isOpen) return
    setIsOpen(true)
    // Letter slides in after flap opens
    setTimeout(() => setShowLetter(true), 600)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setShowLetter(false)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 700)
  }, [])

  return (
    <section
      id="letter"
      className="relative px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
      aria-labelledby="letter-heading"
    >
      {/* Ambient glow behind section */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[80vw] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse, rgba(244,175,198,0.4) 0%, rgba(247,202,219,0.2) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeader visible={visible} />

        {/* ── Overlay backdrop (when letter is open) ── */}
        {showLetter && (
          <div
            className="fixed inset-0 z-40 bg-[rgba(30,12,20,0.45)] backdrop-blur-[6px] transition-all duration-500"
            style={{ animation: 'overlay-in 0.5s ease forwards' }}
            onClick={handleClose}
            aria-hidden="true"
          />
        )}

        {/* ── Envelope container ── */}
        <div
          className={`relative z-50 flex flex-col items-center gap-6 transition-all duration-500 ${
            showLetter ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'
          }`}
          style={{ transition: 'opacity 0.4s ease, transform 0.5s ease' }}
        >
          {/* Envelope */}
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpen}
            className={`group relative w-full max-w-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/60 rounded-xl transition-all duration-500 ${
              !isOpen
                ? 'hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(200,139,153,0.35)]'
                : ''
            }`}
            style={{
              aspectRatio: '3/2',
              animation: !isOpen ? 'envelope-idle 4s ease-in-out infinite' : 'none',
            }}
            aria-label="Click to open your letter"
          >
            {/* Envelope glow */}
            <div
              className="absolute -inset-4 rounded-2xl blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(247,202,219,0.5) 0%, rgba(244,175,198,0.25) 60%, transparent 85%)',
              }}
              aria-hidden="true"
            />

            <EnvelopeSVG isOpen={isOpen} />
          </button>

          {/* Prompt text */}
          {!isOpen && (
            <p
              className={`font-heading text-[clamp(0.85rem,2.5vw,1.05rem)] italic tracking-wide text-text-secondary/70 opacity-0 animate-fade-in`}
              style={{ animationDelay: visible ? '0.6s' : '0s', animationFillMode: 'forwards' }}
            >
              Click the envelope to open your letter ❤️
            </p>
          )}
        </div>

        {/* ── Letter — slides up from envelope ── */}
        {showLetter && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Love letter"
          >
            <div
              style={{
                animation: isClosing
                  ? 'letter-retract 0.65s cubic-bezier(0.55, 0, 1, 0.45) forwards'
                  : 'letter-emerge 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                width: '100%',
                maxWidth: '680px',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <LetterCard onClose={handleClose} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
