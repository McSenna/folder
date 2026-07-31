import { useMemo } from 'react'
import { generateBouquetFlowers, generateBouquetDissolvePetals } from '../utils/bouquetConfig'
import BouquetFlower from './flowers/BouquetFlower'

function DissolvePetals({ petals }) {
  return petals.map((p) => (
    <div
      key={p.id}
      className="absolute animate-bouquet-petal-drift pointer-events-none will-change-transform"
      style={{
        left: `calc(50% + ${p.x}px)`,
        top: `calc(50% + ${p.y}px)`,
        width: p.size,
        height: p.size * 1.4,
        '--drift-x': `${p.driftX}px`,
        '--drift-y': `${p.driftY}px`,
        '--drift-rot': `${p.rot}deg`,
        animationDelay: `${p.delay}s`,
        animationFillMode: 'forwards',
      }}
    >
      <svg viewBox="-10 -4 20 32" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id={`dp-${p.id}`} cx="35%" cy="28%" r="70%">
            <stop offset="0%" stopColor={p.variant === 'blush' ? '#fff0f5' : '#ffd4e3'} />
            <stop offset="50%" stopColor={p.variant === 'blush' ? '#f4d0de' : '#f4afc6'} />
            <stop offset="100%" stopColor={p.variant === 'blush' ? '#d898a8' : '#c8708a'} />
          </radialGradient>
        </defs>
        <path
          d="M 0 0 C -6 4 -9 14 -7 24 C -5 30 0 34 0 34 C 0 34 5 30 7 24 C 9 14 6 4 0 0 Z"
          fill={`url(#dp-${p.id})`}
          opacity="0.88"
        />
      </svg>
    </div>
  ))
}

export default function HeroBouquet({ visible, dissolving, fading }) {
  const flowers = useMemo(() => generateBouquetFlowers(), [])
  const dissolvePetals = useMemo(
    () => (dissolving ? generateBouquetDissolvePetals(flowers) : []),
    [dissolving, flowers],
  )

  if (!visible && !dissolving) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Bouquet glow underneath ── */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-[2500ms] ${
          fading ? 'opacity-0' : 'opacity-60'
        }`}
        style={{
          width: 'min(80vw, 640px)',
          height: 'min(60vh, 520px)',
          background: 'radial-gradient(ellipse, rgba(247,202,219,0.55) 0%, rgba(244,175,198,0.3) 45%, transparent 75%)',
        }}
      />

      {/* ── Main bouquet container ── */}
      <div
        className={`relative transition-opacity duration-[2800ms] ease-out ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          width: 'min(98vw, 860px)',
          height: 'min(88vh, 920px)',
        }}
      >
        {/* Stem bundle hint */}
        <div
          className="absolute left-1/2 bottom-[6%] h-20 w-10 -translate-x-1/2 rounded-b-full opacity-35"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(80,120,60,0.4))',
          }}
        />

        {/* Ribbon/wrap hint */}
        <div
          className="absolute left-1/2 bottom-[4%] h-4 w-20 -translate-x-1/2 rounded-full opacity-25"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(247,202,219,0.7) 40%, rgba(200,139,153,0.5) 60%, transparent)',
          }}
        />

        {/* Flowers */}
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="absolute left-1/2 top-1/2"
            style={{
              zIndex: flower.zIndex,
              transform: `translate(calc(-50% + ${flower.x}px), calc(-50% + ${flower.y}px))`,
            }}
          >
            <div
              className="origin-center animate-flower-bloom will-change-transform"
              style={{
                '--bloom-rot': `${flower.rotate}deg`,
                animationDelay: `${flower.bloomDelay}s`,
                animationDuration: `${flower.bloomDuration}s`,
                animationFillMode: 'forwards',
              }}
            >
              <div
                className={`origin-center ${!dissolving ? 'animate-bouquet-sway' : ''}`}
                style={{
                  '--sway-angle': `${flower.sway}deg`,
                  animationDelay: `${flower.bloomDelay + 1.5}s`,
                }}
              >
                <BouquetFlower flower={flower} dissolving={dissolving} />
              </div>
            </div>
          </div>
        ))}

        {dissolving && <DissolvePetals petals={dissolvePetals} />}
      </div>

      {/* ── Ground shadow ── */}
      <div
        className={`absolute left-1/2 bottom-[10%] h-8 w-72 -translate-x-1/2 rounded-[100%] blur-2xl transition-opacity duration-[2500ms] ${
          fading ? 'opacity-0' : 'opacity-35'
        }`}
        style={{ background: 'rgba(80, 40, 55, 0.3)' }}
      />
    </div>
  )
}
