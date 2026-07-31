export default function RoseLeaf({
  side = 1,
  bottom = '40%',
  delay = 0,
  size = 1,
  flip = false,
}) {
  const w = 36 * size
  const h = 20 * size

  return (
    <div
      className="absolute origin-left animate-leaf-unfold"
      style={{
        bottom,
        left: '50%',
        animationDelay: `${delay}s`,
        animationDuration: '1.4s',
        transform: `scaleX(${side * (flip ? -1 : 1)})`,
      }}
    >
      <svg
        width={w}
        height={h}
        viewBox="0 0 36 20"
        className="drop-shadow-[0_2px_4px_rgba(40,70,30,0.2)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`leaf-${bottom}-${delay}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7cb068" />
            <stop offset="50%" stopColor="#5a9448" />
            <stop offset="100%" stopColor="#3d7035" />
          </linearGradient>
          <linearGradient id={`leaf-vein-${bottom}-${delay}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2f5528" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2f5528" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Serrated rose leaf shape */}
        <path
          d="M 2 10 C 6 4 14 2 22 4 C 30 6 34 10 32 12 C 30 14 28 13 26 11 C 24 9 20 8 16 9 C 12 10 8 12 4 11 C 2 10 2 10 2 10 Z"
          fill={`url(#leaf-${bottom}-${delay})`}
        />
        <path
          d="M 4 10 C 10 8 18 7 28 10"
          stroke={`url(#leaf-vein-${bottom}-${delay})`}
          strokeWidth="0.7"
          fill="none"
        />
        <path
          d="M 10 9 L 8 6 M 16 8.5 L 15 5.5 M 22 9 L 23 6"
          stroke="#3d6535"
          strokeWidth="0.4"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
