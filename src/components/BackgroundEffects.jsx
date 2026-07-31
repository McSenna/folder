/** Cinematic background — multi-layer ambient lighting, bokeh, particles, film grain */

const BOKEH = [
  { size: 280, x: 4,  y: 8,  delay: 0,   opacity: 0.42 },
  { size: 340, x: 72, y: 4,  delay: 2.5, opacity: 0.35 },
  { size: 200, x: 90, y: 48, delay: 4.5, opacity: 0.38 },
  { size: 300, x: 10, y: 62, delay: 1.8, opacity: 0.30 },
  { size: 180, x: 48, y: 28, delay: 3.2, opacity: 0.36 },
  { size: 240, x: 60, y: 80, delay: 5.5, opacity: 0.28 },
  { size: 160, x: 28, y: 84, delay: 2.8, opacity: 0.32 },
  { size: 120, x: 55, y: 55, delay: 6,   opacity: 0.24 },
  { size: 200, x: 82, y: 22, delay: 1,   opacity: 0.30 },
]

const SPARKLES = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  x: (i * 13 + 9) % 97,
  y: (i * 17 + 7) % 90,
  size: 1.5 + (i % 5),
  delay: (i % 11) * 0.45,
  slow: i % 3 === 0,
}))

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i * 11 + 3) % 100,
  delay: i * 0.9,
  duration: 13 + (i % 8) * 2.2,
  size: 2.5 + (i % 6),
  isPetal: i % 4 === 0,
}))

function FloatingPetalParticle({ p }) {
  return (
    <div
      className="absolute animate-particle will-change-transform"
      style={{
        left: `${p.x}%`,
        bottom: '-5%',
        animationDuration: `${p.duration}s`,
        animationDelay: `${p.delay}s`,
        width: p.size * 1.6,
        height: p.size * 2.2,
      }}
    >
      <svg viewBox="-8 -3 16 26" className="h-full w-full overflow-visible opacity-40">
        <defs>
          <radialGradient id={`pp-${p.id}`} cx="38%" cy="30%" r="68%">
            <stop offset="0%" stopColor="#ffd4e3" />
            <stop offset="100%" stopColor="#e090a8" />
          </radialGradient>
        </defs>
        <path
          d="M 0 0 C -5 3 -7 11 -5 19 C -4 24 0 28 0 28 C 0 28 4 24 5 19 C 7 11 5 3 0 0 Z"
          fill={`url(#pp-${p.id})`}
        />
      </svg>
    </div>
  )
}

export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Base gradient canvas ── */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#fef8fb_0%,#fdeef5_35%,#fef2f8_65%,#fdf5fa_100%)]" />

      {/* ── Primary ambient glow — breathes slowly ── */}
      <div className="absolute inset-0 animate-breathe bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(247,202,219,0.65)_0%,transparent_70%)]" />

      {/* ── Secondary warm fills ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_78%,rgba(255,234,242,0.75)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_8%_82%,rgba(244,175,198,0.35)_0%,transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_10%,rgba(255,240,248,0.5)_0%,transparent_45%)]" />

      {/* ── Cinematic shifting spotlight ── */}
      <div
        className="absolute left-[15%] top-[5%] h-[55vh] w-[40vw] animate-spotlight-drift rounded-full blur-[80px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,230,242,0.55) 0%, rgba(247,202,219,0.2) 50%, transparent 80%)',
        }}
      />

      {/* ── Cinematic light ray ── */}
      <div
        className="absolute -left-[10%] top-0 h-full w-[50%] animate-light-ray opacity-[0.18]"
        style={{
          background: 'linear-gradient(108deg, transparent 28%, rgba(255,238,248,0.6) 50%, transparent 72%)',
        }}
      />
      {/* Second light ray */}
      <div
        className="absolute left-[55%] top-0 h-full w-[35%] animate-light-ray opacity-[0.10]"
        style={{
          background: 'linear-gradient(100deg, transparent 30%, rgba(255,220,240,0.4) 50%, transparent 70%)',
          animationDelay: '6s',
        }}
      />

      {/* ── Bokeh circles ── */}
      {BOKEH.map((circle) => (
        <div
          key={`bokeh-${circle.x}-${circle.y}`}
          className="absolute rounded-full animate-bokeh-drift blur-3xl"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            background: `radial-gradient(circle, rgba(247,202,219,${circle.opacity}) 0%, rgba(244,175,198,${circle.opacity * 0.45}) 42%, transparent 75%)`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}

      {/* ── Ground mist ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] animate-mist"
        style={{
          background: 'linear-gradient(to top, rgba(253,238,245,0.9) 0%, rgba(255,247,251,0.5) 50%, transparent 100%)',
        }}
      />

      {/* ── Particles — mix of dots and petals ── */}
      {PARTICLES.map((p) =>
        p.isPetal
          ? <FloatingPetalParticle key={p.id} p={p} />
          : (
            <div
              key={p.id}
              className="absolute rounded-full animate-particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                bottom: '-5%',
                background: 'rgba(244, 175, 198, 0.4)',
                filter: 'blur(0.5px)',
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          )
      )}

      {/* ── Sparkles ── */}
      {SPARKLES.map((s) => (
        <div
          key={s.id}
          className={`absolute ${s.slow ? 'animate-sparkle-slow' : 'animate-sparkle'}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
            width: s.size,
            height: s.size,
          }}
        >
          {s.id % 5 === 0 ? (
            /* Diamond sparkle */
            <svg viewBox="0 0 10 10" className="h-full w-full text-pink-primary/70">
              <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="currentColor" />
            </svg>
          ) : (
            /* Star sparkle */
            <svg viewBox="0 0 10 10" className="h-full w-full text-pink-accent/65">
              <path d="M5 0 L5.7 4.3 L10 5 L5.7 5.7 L5 10 L4.3 5.7 L0 5 L4.3 4.3 Z" fill="currentColor" />
            </svg>
          )}
        </div>
      ))}

      {/* ── Soft vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 38%, rgba(58,31,46,0.07) 100%)',
        }}
      />

      {/* ── Film grain texture ── */}
      <div
        className="absolute inset-0 opacity-[0.028] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
