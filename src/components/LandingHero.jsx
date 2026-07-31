import { useCallback } from 'react'
import BackgroundEffects from './BackgroundEffects'
import HeroBouquet from './HeroBouquet'
import GreetingSection from './GreetingSection'
import MemoriesSection from './MemoriesSection'
import LetterSection from './LetterSection'
import FloatingPetals from './FloatingPetals'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useAnimationTimeline } from '../hooks/useAnimationTimeline'

export default function LandingHero() {
  const reducedMotion = useReducedMotion()
  const {
    showMessage,
    showBouquet,
    isDissolving,
    isRevealed,
    skipToReveal,
  } = useAnimationTimeline(reducedMotion)

  const handleSkip = useCallback(() => skipToReveal(), [skipToReveal])

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* ── HERO ── */}
      <section
        className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <BackgroundEffects />

        {/* Greeting revealed on dissolve */}
        <div
          className={`relative flex min-h-svh w-full flex-col items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
            showMessage || isRevealed ? 'z-20' : 'z-0 opacity-0'
          }`}
        >
          <GreetingSection visible={showMessage || isRevealed} />
        </div>

        <HeroBouquet
          visible={showBouquet && !isRevealed}
          dissolving={isDissolving}
          fading={isDissolving}
        />

        <FloatingPetals active={isRevealed || isDissolving} />

        {/* Atmospheric veil during bloom */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-[2200ms] ease-out"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 12%, rgba(254,248,251,0.5) 100%)',
            opacity: isRevealed ? 0 : showMessage ? 0.04 : 0.32,
          }}
          aria-hidden="true"
        />

        {/* Skip button (keyboard accessible only) */}
        {!isRevealed && !reducedMotion && (
          <button
            type="button"
            onClick={handleSkip}
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white/85 focus:px-5 focus:py-2 focus:text-sm focus:text-text-primary focus:shadow-xl focus:backdrop-blur-md"
          >
            Skip animation
          </button>
        )}

        {/* Scroll hint after reveal */}
        {isRevealed && (
          <div
            className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 opacity-0 animate-fade-up"
            style={{ animationDelay: '3.2s', animationFillMode: 'forwards' }}
          >
            <div className="flex flex-col items-center gap-2 text-text-secondary/50">
              <span className="font-body text-[0.62rem] tracking-[0.28em] uppercase">
                Scroll
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 animate-button-float"
                aria-hidden="true"
              >
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        )}
      </section>

      {/* ── MEMORIES ── */}
      <MemoriesSection visible={isRevealed} />

      {/* ── LETTER ── */}
      <LetterSection visible={isRevealed} />

      {/* ── Footer ── */}
      {isRevealed && (
        <footer
          className="pb-16 pt-4 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 200 12" className="mx-auto h-2.5 w-32" aria-hidden="true">
              <defs>
                <linearGradient id="footer-orn" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="40%" stopColor="#C88B99" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F4AFC6" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#C88B99" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path d="M 0 6 Q 50 2 100 6 Q 150 10 200 6"
                stroke="url(#footer-orn)" strokeWidth="0.8" fill="none" />
              <circle cx="100" cy="6" r="1.8" fill="#C88B99" opacity="0.55" />
            </svg>
            <p className="font-heading text-[0.78rem] italic tracking-[0.18em] text-text-secondary/40">
              Made with love ❤️
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
