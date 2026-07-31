export default function EnvelopeSVG({ isOpen }) {
  return (
    <svg
      viewBox="0 0 300 200"
      className="h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="env-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf6ee" />
          <stop offset="50%" stopColor="#f8ece0" />
          <stop offset="100%" stopColor="#f2e2d0" />
        </linearGradient>
        <linearGradient id="env-interior" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d8c8" />
          <stop offset="100%" stopColor="#d4c0aa" />
        </linearGradient>
        <linearGradient id="env-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5ebe0" />
          <stop offset="70%" stopColor="#ecdcc8" />
          <stop offset="100%" stopColor="#e0ccb8" />
        </linearGradient>
        <linearGradient id="env-side-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ecdccc" />
          <stop offset="100%" stopColor="#f5ede0" />
        </linearGradient>
        <linearGradient id="env-side-r" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5ede0" />
          <stop offset="100%" stopColor="#ecdccc" />
        </linearGradient>
        <linearGradient id="rg-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4a8b4" />
          <stop offset="50%" stopColor="#c08898" />
          <stop offset="100%" stopColor="#b07888" />
        </linearGradient>
        <radialGradient id="wax-seal" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e05060" />
          <stop offset="50%" stopColor="#c03848" />
          <stop offset="100%" stopColor="#901828" />
        </radialGradient>
        <filter id="env-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#8a6040" floodOpacity="0.22" />
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#d4a080" floodOpacity="0.15" />
        </filter>
        <filter id="seal-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#600020" floodOpacity="0.4" />
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      <g filter="url(#env-shadow)">
        <rect x="10" y="60" width="280" height="130" rx="6" ry="6" fill="url(#env-body)" />
        <rect x="10" y="150" width="280" height="40" rx="0" ry="0" fill="url(#env-interior)" opacity="0.4" />
        <polygon points="10,190 150,125 10,60" fill="url(#env-side-l)" opacity="0.75" />
        <polygon points="290,190 150,125 290,60" fill="url(#env-side-r)" opacity="0.75" />
        <polygon points="10,190 150,130 290,190" fill="url(#env-flap)" opacity="0.9" />
        <rect x="10" y="60" width="280" height="130" rx="6" ry="6" fill="none" stroke="url(#rg-accent)" strokeWidth="1.2" opacity="0.55" />
        <rect x="16" y="66" width="268" height="118" rx="4" ry="4" fill="none" stroke="#c08898" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
        <g
          style={{
            transformOrigin: '150px 60px',
            transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
            transition: 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transformStyle: 'preserve-3d',
          }}
        >
          <polygon points="10,60 290,60 150,130" fill="url(#env-flap)" />
          <polygon points="10,60 290,60 150,130" fill="none" stroke="url(#rg-accent)" strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="60" x2="290" y2="60" stroke="#c8a888" strokeWidth="0.8" opacity="0.6" />
        </g>
      </g>

      {!isOpen && (
        <g
          style={{
            transformOrigin: '150px 130px',
            transition: 'opacity 0.3s ease',
          }}
          filter="url(#seal-shadow)"
        >
          <circle cx="150" cy="130" r="18" fill="url(#wax-seal)" />
          <path
            d="M 150 124 C 150 124 144 119 141 121 C 138 123 138 127 141 130 L 150 138 L 159 130 C 162 127 162 123 159 121 C 156 119 150 124 150 124 Z"
            fill="rgba(255,255,255,0.28)"
          />
          <circle cx="150" cy="130" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <circle cx="150" cy="130" r="15" fill="none" stroke="rgba(255,200,180,0.25)" strokeWidth="0.6" />
        </g>
      )}
    </svg>
  )
}
