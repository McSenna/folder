import { PETAL_PATH } from './rosePetalConfig'

let gradientCounter = 0

export function RealisticPetalSvg({
  width = 20,
  height = 32,
  lightness = 0.9,
  id,
  className = '',
}) {
  const gradId = id ?? `petal-grad-${++gradientCounter}`
  const highlight = `hsl(344, ${55 + lightness * 15}%, ${72 + lightness * 18}%)`
  const mid = `hsl(346, ${60 + lightness * 10}%, ${58 + lightness * 12}%)`
  const shadow = `hsl(348, ${45 + lightness * 8}%, ${42 + lightness * 8}%)`
  const vein = `hsl(347, 40%, ${48 + lightness * 10}%)`

  return (
    <svg
      viewBox="-14 -4 28 44"
      width={width}
      height={height}
      className={`drop-shadow-[0_4px_8px_rgba(120,50,70,0.25)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradId} cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="45%" stopColor={mid} />
          <stop offset="100%" stopColor={shadow} />
        </radialGradient>
        <linearGradient id={`${gradId}-vein`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={vein} stopOpacity="0.15" />
          <stop offset="100%" stopColor={vein} stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path d={PETAL_PATH} fill={`url(#${gradId})`} />
      <path
        d="M 0 4 C 0 14 0 24 0 34"
        stroke={`url(#${gradId}-vein)`}
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d={PETAL_PATH}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="0.4"
        transform="scale(0.92)"
      />
    </svg>
  )
}

export function RealisticSepalSvg({ rotate = 0, size = 10 }) {
  return (
    <svg
      viewBox="-8 -6 16 16"
      width={size}
      height={size}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sepal-${rotate}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5a8a48" />
          <stop offset="100%" stopColor="#3d6b35" />
        </linearGradient>
      </defs>
      <path
        d="M 0 5 L -5 -1 L 0 -5 L 5 -1 Z"
        fill={`url(#sepal-${rotate})`}
        opacity="0.9"
      />
    </svg>
  )
}
