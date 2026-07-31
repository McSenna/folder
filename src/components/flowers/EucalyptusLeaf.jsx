/** Premium eucalyptus — realistic botanical leaf with veins and depth */
export default function EucalyptusLeaf({ size = 70, id = 'leaf' }) {
  return (
    <svg
      viewBox="0 0 80 38"
      width={size}
      height={size * 0.48}
      className="overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-lg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a0c880" />
          <stop offset="30%" stopColor="#78aa60" />
          <stop offset="65%" stopColor="#5a8e48" />
          <stop offset="100%" stopColor="#3e6e32" />
        </linearGradient>
        <linearGradient id={`${id}-vein`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3e6e32" stopOpacity="0" />
          <stop offset="50%" stopColor="#4a7a3c" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3e6e32" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-hl`} cx="30%" cy="35%" r="55%">
          <stop offset="0%" stopColor="rgba(180,230,150,0.55)" />
          <stop offset="100%" stopColor="rgba(80,140,60,0)" />
        </radialGradient>
        <filter id={`${id}-ls`} x="-20%" y="-60%" width="140%" height="220%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2e5224" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter={`url(#${id}-ls)`}>
        {/* Main leaf body — more natural asymmetric shape */}
        <path
          d="M 4 19 C 10 10 20 6 34 5.5 C 48 5 60 9 70 15 C 74 17 76 19 76 19 C 76 19 74 21.5 70 23 C 60 29 48 32.5 34 32.5 C 20 32.5 10 28 4 19 Z"
          fill={`url(#${id}-lg)`}
          opacity="0.95"
        />
        {/* Leaf highlight (top shimmer) */}
        <path
          d="M 8 18 C 16 11 28 7.5 42 7 C 54 6.5 64 10 70 15 C 60 13 48 11 36 11.5 C 24 12 14 16 8 18 Z"
          fill={`url(#${id}-hl)`}
          opacity="0.75"
        />
        {/* Central vein */}
        <path
          d="M 6 19 C 22 18.5 42 18.5 74 19"
          stroke={`url(#${id}-vein)`}
          strokeWidth="0.9"
          fill="none"
          opacity="0.65"
        />
        {/* Secondary veins */}
        <g stroke="#4a7a3c" strokeWidth="0.5" fill="none" opacity="0.45">
          <path d="M 18 18 L 16 13 M 18 19.5 L 16 24" />
          <path d="M 28 17.5 L 26 11 M 28 20 L 26 27" />
          <path d="M 40 17 L 38 10 M 40 21 L 38 29" />
          <path d="M 52 17.5 L 50 12 M 52 21 L 50 27" />
          <path d="M 62 18 L 60 13.5 M 62 20 L 60 24" />
        </g>
        {/* Leaf edge shimmer */}
        <path
          d="M 4 19 C 10 10 20 6 34 5.5 C 48 5 60 9 70 15"
          stroke="rgba(180,230,140,0.3)"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  )
}
