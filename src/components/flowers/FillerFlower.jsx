/** Premium baby's breath filler — delicate multi-bloom cluster */
export default function FillerFlower({ size = 50, id = 'filler' }) {
  const blooms = [
    { x: 0, y: 0, r: 2.8 },
    { x: -5, y: -7, r: 2.2 },
    { x: 6, y: -6, r: 2.5 },
    { x: -8, y: 2, r: 2.0 },
    { x: 8, y: 3, r: 2.3 },
    { x: -4, y: 9, r: 2.0 },
    { x: 5, y: 8, r: 2.2 },
    { x: -10, y: -3, r: 1.8 },
    { x: 10, y: -2, r: 1.8 },
    { x: -6, y: -12, r: 1.7 },
    { x: 7, y: -11, r: 1.9 },
    { x: 0, y: -14, r: 1.6 },
    { x: -2, y: 13, r: 1.5 },
    { x: 3, y: 12, r: 1.5 },
  ]

  return (
    <svg
      viewBox="-22 -22 44 44"
      width={size}
      height={size}
      className="overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-dot`} cx="32%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#fff5f8" />
          <stop offset="100%" stopColor="#f0e0e8" />
        </radialGradient>
        <radialGradient id={`${id}-center`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffe8f0" />
          <stop offset="100%" stopColor="#d4a0b0" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0.5" stdDeviation="0.8" floodColor="#c890a8" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        {/* Delicate stems */}
        {blooms.slice(1).map(({ x, y }, i) => (
          <line
            key={`stem-${i}`}
            x1="0" y1="0"
            x2={x * 0.75} y2={y * 0.75}
            stroke="#8aaa72"
            strokeWidth="0.5"
            opacity={0.45 + (i % 3) * 0.1}
          />
        ))}

        {/* Bloom clusters */}
        {blooms.map(({ x, y, r }, i) => (
          <g key={`bloom-${i}`}>
            {/* 5-petal star */}
            {[0, 72, 144, 216, 288].map((rot, j) => (
              <ellipse
                key={j}
                cx={x + Math.cos((rot * Math.PI) / 180) * r * 0.9}
                cy={y + Math.sin((rot * Math.PI) / 180) * r * 0.9}
                rx={r * 0.55}
                ry={r * 0.75}
                fill={`url(#${id}-dot)`}
                transform={`rotate(${rot} ${x} ${y})`}
                opacity={0.88 - (i % 4) * 0.04}
              />
            ))}
            {/* Center dot */}
            <circle
              cx={x} cy={y} r={r * 0.38}
              fill={`url(#${id}-center)`}
              opacity="0.9"
            />
          </g>
        ))}
      </g>
    </svg>
  )
}
