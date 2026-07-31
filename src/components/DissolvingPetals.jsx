import { useMemo } from 'react'
import { generateRoses, generateDissolvePetals } from '../utils/roseConfig'
import { RealisticPetalSvg } from './rose/RealisticPetalSvg'

export default function DissolvingPetals({ active }) {
  const petals = useMemo(() => {
    const roses = generateRoses(16)
    return generateDissolvePetals(roses)
  }, [])

  if (!active) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[18] overflow-hidden"
      style={{ perspective: '800px' }}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-drift-3d will-change-transform"
          style={{
            left: `${petal.x}%`,
            bottom: `${petal.bottomVmin}vmin`,
            width: petal.size,
            height: petal.size * 1.45,
            '--drift-x': `${petal.driftX}px`,
            '--drift-y': `${petal.upward ? -140 : 90}px`,
            '--drift-rot': `${petal.driftRot}deg`,
            '--rx-drift': `${petal.rxDrift}deg`,
            '--ry-drift': `${petal.ryDrift}deg`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${3.8 + petal.size / 18}s`,
            animationFillMode: 'forwards',
            transformStyle: 'preserve-3d',
          }}
        >
          <RealisticPetalSvg
            id={`dissolve-${petal.id}`}
            width={petal.size}
            height={petal.size * 1.45}
            lightness={petal.lightness}
          />
        </div>
      ))}
    </div>
  )
}
