/** Premium blush rose — soft ivory-pink with layered depth */
export default function BlushRose({ size = 80, id = 'blush-rose', stage = 'full' }) {
  const budScale = stage === 'partial' ? 0.68 : 1

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="overflow-visible"
      aria-hidden="true"
      style={{ transform: `scale(${budScale})` }}
    >
      <defs>
        <radialGradient id={`${id}-b1`} cx="38%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#fff8fa" />
          <stop offset="25%" stopColor="#fdeef4" />
          <stop offset="60%" stopColor="#f4c8d8" />
          <stop offset="100%" stopColor="#dfa0b4" />
        </radialGradient>
        <radialGradient id={`${id}-b2`} cx="42%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#fffafe" />
          <stop offset="40%" stopColor="#f9e0ea" />
          <stop offset="80%" stopColor="#eabac8" />
          <stop offset="100%" stopColor="#d298a8" />
        </radialGradient>
        <radialGradient id={`${id}-b3`} cx="36%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fef2f6" />
          <stop offset="50%" stopColor="#f0ccd8" />
          <stop offset="100%" stopColor="#c89aac" />
        </radialGradient>
        <radialGradient id={`${id}-hl`} cx="28%" cy="22%" r="48%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,240,248,0)" />
        </radialGradient>
        <filter id={`${id}-sh`} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#8a5868" floodOpacity="0.22" />
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#ffb0c8" floodOpacity="0.12" />
        </filter>
      </defs>

      <g filter={`url(#${id}-sh)`}>
        {/* Outermost petals */}
        {[0, 60, 120, 180, 240, 300].map((rot, i) => (
          <path
            key={`og-${i}`}
            d="M 60 16 C 44 22 34 42 36 58 C 38 70 48 78 60 80 C 72 78 82 70 84 58 C 86 42 76 22 60 16 Z"
            fill={`url(#${id}-b${(i % 2) + 1})`}
            transform={`rotate(${rot} 60 60)`}
            opacity={0.82 + (i % 2) * 0.08}
          />
        ))}

        {/* Second ring */}
        {[30, 90, 150, 210, 270, 330].map((rot, i) => (
          <path
            key={`sr-${i}`}
            d="M 60 22 C 46 28 40 46 42 58 C 44 66 52 72 60 74 C 68 72 76 66 78 58 C 80 46 74 28 60 22 Z"
            fill={`url(#${id}-b2)`}
            transform={`rotate(${rot} 60 60)`}
            opacity="0.9"
          />
        ))}

        {/* Inner cupped petals */}
        {[15, 75, 135, 195, 255, 315].map((rot, i) => (
          <path
            key={`ic-${i}`}
            d="M 60 30 C 52 34 46 46 48 56 C 50 63 55 67 60 68 C 65 67 70 63 72 56 C 74 46 68 34 60 30 Z"
            fill={`url(#${id}-b3)`}
            transform={`rotate(${rot} 60 60)`}
            opacity="0.95"
          />
        ))}

        {/* Tight inner petals */}
        {[0, 90, 180, 270].map((rot, i) => (
          <path
            key={`ti-${i}`}
            d="M 60 38 C 55 41 52 50 53 57 C 54 62 57 65 60 66 C 63 65 66 62 67 57 C 68 50 65 41 60 38 Z"
            fill={`url(#${id}-b1)`}
            transform={`rotate(${rot} 60 60)`}
            opacity="1"
          />
        ))}

        {/* Center */}
        <circle cx="60" cy="60" r="6.5" fill="#d898a8" opacity="0.85" />
        <circle cx="60" cy="60" r="3.5" fill="#e8b0be" opacity="0.75" />

        {/* Specular highlight */}
        <ellipse cx="52" cy="50" rx="5" ry="3.5"
          fill={`url(#${id}-hl)`} opacity="0.65" transform="rotate(-20 60 60)" />
      </g>
    </svg>
  )
}
