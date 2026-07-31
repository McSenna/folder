/** Premium soft peony — lush ruffled layers with voluminous depth */
export default function Peony({ size = 90, id = 'peony', stage = 'full' }) {
  const budScale = stage === 'partial' ? 0.62 : 1

  return (
    <svg
      viewBox="0 0 130 130"
      width={size}
      height={size}
      className="overflow-visible"
      aria-hidden="true"
      style={{ transform: `scale(${budScale})` }}
    >
      <defs>
        <radialGradient id={`${id}-p1`} cx="34%" cy="25%" r="72%">
          <stop offset="0%" stopColor="#fff8fb" />
          <stop offset="20%" stopColor="#fde8f0" />
          <stop offset="55%" stopColor="#f0b8cc" />
          <stop offset="85%" stopColor="#d888a0" />
          <stop offset="100%" stopColor="#b86880" />
        </radialGradient>
        <radialGradient id={`${id}-p2`} cx="40%" cy="30%" r="67%">
          <stop offset="0%" stopColor="#fff4f7" />
          <stop offset="35%" stopColor="#fcd4e2" />
          <stop offset="75%" stopColor="#e8a0b8" />
          <stop offset="100%" stopColor="#c87890" />
        </radialGradient>
        <radialGradient id={`${id}-p3`} cx="38%" cy="28%" r="60%">
          <stop offset="0%" stopColor="#ffecf2" />
          <stop offset="50%" stopColor="#f0c0d0" />
          <stop offset="100%" stopColor="#d898aa" />
        </radialGradient>
        <radialGradient id={`${id}-hl`} cx="28%" cy="20%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="70%" stopColor="rgba(255,240,250,0.3)" />
          <stop offset="100%" stopColor="rgba(255,220,240,0)" />
        </radialGradient>
        <filter id={`${id}-ps`} x="-28%" y="-28%" width="156%" height="156%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#784858" floodOpacity="0.26" />
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#ff90b0" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter={`url(#${id}-ps)`}>
        {/* Outermost guard petals — very wide, slightly cupped */}
        {Array.from({ length: 10 }, (_, i) => {
          const rot = i * 36 + (i % 2) * 6
          const ry = 34 - (i % 3) * 2
          return (
            <path
              key={`og-${i}`}
              d={`M 65 ${14 + (i % 2) * 2} C ${45 - (i % 2) * 2} 22 34 42 36 58 C 38 70 50 80 65 82 C 80 80 92 70 94 58 C 96 42 85 22 65 ${14 + (i % 2) * 2} Z`}
              fill={`url(#${id}-p1)`}
              transform={`rotate(${rot} 65 65)`}
              opacity={0.80 + (i % 4) * 0.04}
            />
          )
        })}

        {/* Second ruffled layer */}
        {Array.from({ length: 8 }, (_, i) => {
          const rot = i * 45 + 22
          return (
            <path
              key={`rl-${i}`}
              d={`M 65 ${22 + (i % 2) * 3} C 50 28 42 46 44 58 C 46 68 55 74 65 76 C 75 74 84 68 86 58 C 88 46 80 28 65 ${22 + (i % 2) * 3} Z`}
              fill={`url(#${id}-p2)`}
              transform={`rotate(${rot} 65 65)`}
              opacity="0.88"
            />
          )
        })}

        {/* Middle frilled layer */}
        {Array.from({ length: 8 }, (_, i) => {
          const rot = i * 45 + 10
          return (
            <path
              key={`mf-${i}`}
              d={`M 65 30 C 54 34 47 48 49 58 C 51 65 57 70 65 71 C 73 70 79 65 81 58 C 83 48 76 34 65 30 Z`}
              fill={`url(#${id}-p3)`}
              transform={`rotate(${rot} 65 65)`}
              opacity="0.93"
            />
          )
        })}

        {/* Inner petals — tight cup */}
        {Array.from({ length: 6 }, (_, i) => {
          const rot = i * 60 + 5
          return (
            <path
              key={`ip-${i}`}
              d="M 65 38 C 57 41 52 51 54 60 C 56 66 60 70 65 71 C 70 70 74 66 76 60 C 78 51 73 41 65 38 Z"
              fill={`url(#${id}-p2)`}
              transform={`rotate(${rot} 65 65)`}
              opacity="0.97"
            />
          )
        })}

        {/* Center puff ellipses */}
        {Array.from({ length: 7 }, (_, i) => (
          <ellipse
            key={`cp-${i}`}
            cx="65" cy="62" rx="7" ry="10"
            fill={`url(#${id}-p3)`}
            transform={`rotate(${i * 51 + 8} 65 65)`}
            opacity="0.97"
          />
        ))}

        {/* Stamen center */}
        <circle cx="65" cy="65" r="9" fill="#c07890" opacity="0.78" />
        <circle cx="65" cy="65" r="5.5" fill="#d898a8" opacity="0.85" />
        <circle cx="65" cy="65" r="2.5" fill="#e8b8c4" opacity="0.9" />

        {/* Highlight specular */}
        <ellipse cx="55" cy="53" rx="7" ry="4.5"
          fill={`url(#${id}-hl)`} opacity="0.75" transform="rotate(-30 65 65)" />
      </g>
    </svg>
  )
}
