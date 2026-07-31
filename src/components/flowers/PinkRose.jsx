/** Premium layered pink rose — lush botanical illustration with realistic depth */
export default function PinkRose({ size = 80, id = 'pink-rose', stage = 'full' }) {
  const budScale = stage === 'partial' ? 0.7 : 1

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
        {/* Main warm pink gradient */}
        <radialGradient id={`${id}-g1`} cx="36%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#ffe4ed" />
          <stop offset="30%" stopColor="#f9b8ce" />
          <stop offset="65%" stopColor="#e8809a" />
          <stop offset="100%" stopColor="#c05070" />
        </radialGradient>
        {/* Lighter inner gradient */}
        <radialGradient id={`${id}-g2`} cx="42%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#fff4f8" />
          <stop offset="40%" stopColor="#fdd0e0" />
          <stop offset="80%" stopColor="#e89cb4" />
          <stop offset="100%" stopColor="#c87890" />
        </radialGradient>
        {/* Deep center gradient */}
        <radialGradient id={`${id}-g3`} cx="34%" cy="30%" r="58%">
          <stop offset="0%" stopColor="#ffc8dc" />
          <stop offset="50%" stopColor="#e070a0" />
          <stop offset="100%" stopColor="#a84060" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id={`${id}-g4`} cx="30%" cy="25%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,220,235,0)" />
        </radialGradient>
        {/* Soft bloom shadow filter */}
        <filter id={`${id}-shadow`} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#7a3050" floodOpacity="0.28" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#ff90b0" floodOpacity="0.15" />
        </filter>
        {/* Inner glow filter */}
        <filter id={`${id}-glow`} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        {/* Outermost guard petals - wide spread */}
        {[0, 60, 120, 180, 240, 300].map((rot, i) => (
          <path
            key={`guard-${i}`}
            d="M 60 14 C 44 20 34 40 36 58 C 38 70 48 78 60 80 C 72 78 82 70 84 58 C 86 40 76 20 60 14 Z"
            fill={`url(#${id}-g1)`}
            transform={`rotate(${rot} 60 60)`}
            opacity={0.85 + (i % 2) * 0.06}
          />
        ))}

        {/* Outer petals - second ring, slightly inward */}
        {[30, 90, 150, 210, 270, 330].map((rot, i) => (
          <path
            key={`outer-${i}`}
            d="M 60 20 C 46 26 38 44 40 58 C 42 68 50 74 60 76 C 70 74 78 68 80 58 C 82 44 74 26 60 20 Z"
            fill={`url(#${id}-g2)`}
            transform={`rotate(${rot} 60 60)`}
            opacity={0.88 + (i % 3) * 0.04}
          />
        ))}

        {/* Middle petals - cupped shape */}
        {[15, 75, 135, 195, 255, 315].map((rot, i) => (
          <path
            key={`mid-${i}`}
            d="M 60 28 C 50 32 44 46 46 56 C 48 63 54 68 60 69 C 66 68 72 63 74 56 C 76 46 70 32 60 28 Z"
            fill={`url(#${id}-g3)`}
            transform={`rotate(${rot} 60 60)`}
            opacity="0.93"
          />
        ))}

        {/* Inner petals - tight spiral */}
        {[0, 72, 144, 216, 288].map((rot, i) => (
          <path
            key={`inner-${i}`}
            d="M 60 35 C 53 38 49 48 50 56 C 51 61 55 65 60 66 C 65 65 69 61 70 56 C 71 48 67 38 60 35 Z"
            fill={`url(#${id}-g2)`}
            transform={`rotate(${rot} 60 60)`}
            opacity="0.97"
          />
        ))}

        {/* Innermost furled center */}
        {[36, 108, 180, 252, 324].map((rot, i) => (
          <ellipse
            key={`core-${i}`}
            cx="60" cy="57" rx="6" ry="9"
            fill={`url(#${id}-g3)`}
            transform={`rotate(${rot} 60 60)`}
            opacity="1"
          />
        ))}

        {/* Center stamen */}
        <circle cx="60" cy="60" r="7" fill="#c06080" opacity="0.9" />
        <circle cx="60" cy="60" r="4" fill="#d88aa0" opacity="0.8" />

        {/* Highlight specular */}
        <ellipse cx="54" cy="53" rx="5" ry="3.5"
          fill={`url(#${id}-g4)`} opacity="0.7" transform="rotate(-25 60 60)" />
      </g>
    </svg>
  )
}
