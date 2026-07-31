import { getRosePetals, SEPAL_PATH } from './rosePetalConfig'
import { RealisticPetalSvg } from './RealisticPetalSvg'

export default function RoseBloom3D({ bloomDelay = 0, bloomDuration = 2.2, variant = 0, tilt = 0 }) {
  const petals = getRosePetals(variant)

  return (
    <div
      className="relative"
      style={{
        width: '5.5rem',
        height: '5.5rem',
        perspective: '900px',
      }}
    >
      <div
        className="absolute inset-0 animate-bloom-3d"
        style={{
          transformStyle: 'preserve-3d',
          '--tilt': `${tilt}deg`,
          animationDelay: `${bloomDelay}s`,
          animationDuration: `${bloomDuration}s`,
          animationFillMode: 'forwards',
        }}
      >
        {[0, 72, 144, 216, 288].map((rot) => (
          <div
            key={`sepal-${rot}`}
            className="absolute left-1/2 top-1/2 origin-center animate-sepal-unfurl"
            style={{
              '--rz': `${rot}deg`,
              transform: `translate(-50%, -30%) rotateZ(${rot}deg) translateY(14px)`,
              animationDelay: `${bloomDelay + 0.15}s`,
              animationFillMode: 'forwards',
            }}
          >
            <svg viewBox="-6 -6 12 14" width="14" height="16" aria-hidden="true">
              <defs>
                <linearGradient id={`calyx-${rot}-${variant}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6fa058" />
                  <stop offset="100%" stopColor="#3f6534" />
                </linearGradient>
              </defs>
              <path d={SEPAL_PATH} fill={`url(#calyx-${rot}-${variant})`} />
            </svg>
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/2"
          style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%)' }}
        >
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="absolute origin-bottom animate-petal-unfurl will-change-transform"
              style={{
                left: '50%',
                bottom: 0,
                width: petal.width,
                height: petal.height,
                marginLeft: -petal.width / 2,
                transformStyle: 'preserve-3d',
                '--ry': `${petal.rotateY}deg`,
                '--rx': `${petal.rotateX}deg`,
                '--tz': `${petal.translateZ}px`,
                '--curl': `${petal.curl}deg`,
                animationDelay: `${bloomDelay + petal.delay}s`,
                animationDuration: `${bloomDuration * 0.9}s`,
                animationFillMode: 'forwards',
              }}
            >
              <RealisticPetalSvg
                id={`petal-${variant}-${petal.id}`}
                width={petal.width}
                height={petal.height}
                lightness={petal.lightness}
              />
            </div>
          ))}

          <div
            className="absolute left-1/2 top-1/2 opacity-0 animate-fade-in"
            style={{
              width: 14,
              height: 14,
              marginLeft: -7,
              marginTop: -7,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 35% 30%, #e8889e 0%, #9e4560 70%, #6d3045 100%)',
              boxShadow:
                'inset 0 -2px 4px rgba(0,0,0,0.25), 0 2px 8px rgba(120,50,70,0.3)',
              transform: 'translateZ(6px)',
              animationDelay: `${bloomDelay + 0.35}s`,
              animationFillMode: 'forwards',
            }}
          />
        </div>
      </div>

      <div
        className="absolute left-1/2 top-[88%] h-4 w-16 -translate-x-1/2 rounded-[100%] bg-[rgba(80,40,55,0.2)] blur-lg"
        aria-hidden="true"
      />
    </div>
  )
}
