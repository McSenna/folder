import { useMemo } from 'react'
import { generateAmbientPetals } from '../utils/roseConfig'

function AmbientPetal({ petal, index }) {
  const mod3 = index % 3
  const blurAmount = mod3 === 0 ? '1.5px' : mod3 === 2 ? '0px' : '0.5px'
  const opacity = mod3 === 0 ? 0.28 : mod3 === 2 ? 0.52 : 0.42
  const rotDeg = (index * 47) % 360

  const colors = [
    { c0: '#fff0f5', c50: '#f4b8cc', c100: '#d898ae' },
    { c0: '#ffd4e3', c50: '#f0a0bc', c100: '#c87898' },
    { c0: '#ffe8f2', c50: '#f8c8da', c100: '#e09ab0' },
  ]
  const { c0, c50, c100 } = colors[mod3]

  return (
    <div
      className="absolute will-change-transform"
      style={{
        left: `${petal.x}%`,
        top: `${petal.y}%`,
        width: petal.size,
        height: petal.size * 1.4,
        animationName: 'float',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDelay: `${petal.delay}s`,
        animationDuration: `${petal.duration}s`,
        opacity,
        filter: `blur(${blurAmount})`,
        transform: `rotate(${rotDeg}deg)`,
      }}
    >
      <svg viewBox="-10 -4 20 32" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id={`ap-${petal.id}`} cx="35%" cy="28%" r="70%">
            <stop offset="0%"   stopColor={c0} />
            <stop offset="50%"  stopColor={c50} />
            <stop offset="100%" stopColor={c100} />
          </radialGradient>
        </defs>
        <path
          d="M 0 0 C -6 4 -9 14 -7 24 C -5 30 0 34 0 34 C 0 34 5 30 7 24 C 9 14 6 4 0 0 Z"
          fill={`url(#ap-${petal.id})`}
        />
        <path
          d="M 0 2 C 0.5 10 0.3 20 0 32"
          stroke="rgba(200,120,150,0.22)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default function FloatingPetals({ active }) {
  const petals = useMemo(() => generateAmbientPetals(24), [])

  if (!active) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[12] overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal, i) => (
        <AmbientPetal key={petal.id} petal={petal} index={i} />
      ))}
    </div>
  )
}
