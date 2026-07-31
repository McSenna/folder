import { useState, useCallback } from 'react'

export default function AnimatedButton({ visible, onClick }) {
  const [ripples, setRipples] = useState([])

  const handleClick = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const id = Date.now()

      setRipples((prev) => [...prev, { id, x, y }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)

      onClick?.(event)
    },
    [onClick],
  )

  if (!visible) return null

  return (
    <div
      className="relative z-20 mt-12 opacity-0 animate-fade-up px-4"
      style={{ animationDelay: '2.65s', animationFillMode: 'forwards' }}
    >
      <button
        type="button"
        onClick={handleClick}
        className="group relative overflow-hidden rounded-full px-11 py-4 font-body text-[clamp(0.9rem,2.5vw,1.05rem)] font-medium tracking-[0.08em] text-text-primary transition-all duration-500 ease-out animate-button-float hover:scale-[1.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-gold active:scale-[0.98]"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,234,242,0.35) 50%, rgba(255,255,255,0.3) 100%)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow:
            '0 8px 32px rgba(200,139,153,0.28), 0 2px 8px rgba(244,175,198,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
          backdropFilter: 'blur(16px)',
        }}
        aria-label="Open my surprise"
      >
        {/* Rose-gold ring glow on hover */}
        <span
          className="pointer-events-none absolute -inset-[1px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(200,139,153,0.4), rgba(244,175,198,0.3), rgba(200,139,153,0.4))',
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          aria-hidden="true"
        />

        <span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <span className="absolute inset-y-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </span>

        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="pointer-events-none absolute animate-ripple rounded-full bg-pink-accent/35"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              transform: 'translate(-50%, -50%)',
            }}
            aria-hidden="true"
          />
        ))}

        <span className="relative z-10">Open My Surprise ❤️</span>
      </button>
    </div>
  )
}
