export default function RoseStem({ delay = 0, duration = 2.8, curve = 0 }) {
  return (
    <svg
      className="absolute bottom-0 left-1/2 h-full w-10 -translate-x-1/2 overflow-visible animate-stem-grow origin-bottom"
      viewBox="0 0 40 200"
      preserveAspectRatio="none"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`stem-grad-${curve}`} x1="0" y1="1" x2="0.3" y2="0">
          <stop offset="0%" stopColor="#2f4a28" />
          <stop offset="35%" stopColor="#4a7340" />
          <stop offset="70%" stopColor="#5f8f52" />
          <stop offset="100%" stopColor="#7aad6a" />
        </linearGradient>
        <linearGradient id={`stem-highlight-${curve}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Main curved stem */}
      <path
        d={`M 20 200 C ${20 + curve * 3} 150 ${18 - curve * 2} 90 ${20 + curve} 20 C ${20 + curve * 0.5} 8 20 2 20 0`}
        fill="none"
        stroke={`url(#stem-grad-${curve})`}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Highlight edge */}
      <path
        d={`M 19 198 C ${19 + curve * 3} 148 ${17 - curve * 2} 88 ${19 + curve} 18`}
        fill="none"
        stroke={`url(#stem-highlight-${curve})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Thorns */}
      {[
        { y: 130, rot: 35 },
        { y: 95, rot: -30 },
        { y: 60, rot: 40 },
      ].map((thorn) => (
        <g key={thorn.y} transform={`translate(20, ${thorn.y}) rotate(${thorn.rot})`}>
          <path
            d="M 0 0 L 3 -5 L 0 -7 L -1 -4 Z"
            fill="#4a3828"
            opacity="0.55"
          />
        </g>
      ))}
    </svg>
  )
}
