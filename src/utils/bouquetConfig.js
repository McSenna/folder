function seededRandom(seed) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453
  return x - Math.floor(x)
}

/**
 * Premium luxury bouquet — dome composition, center-weighted,
 * wider placement to fill the expanded 860px container.
 */
export function generateBouquetFlowers() {
  const placements = [
    // ── CENTREPIECE ──────────────────────────────────────────
    { type: 'peony',      x:   0, y: -75, rot:  -3, scale: 1.25, z: 25, delay: 0.5  },
    { type: 'rose-pink',  x: -58, y: -62, rot:  16, scale: 1.1,  z: 22, delay: 0.9  },
    { type: 'rose-blush', x:  55, y: -64, rot: -13, scale: 1.05, z: 21, delay: 1.05 },
    { type: 'peony',      x: -25, y: -92, rot:   9, scale: 0.98, z: 24, delay: 0.75 },
    { type: 'rose-pink',  x:  28, y: -90, rot:  -7, scale: 0.95, z: 20, delay: 1.2  },

    // ── UPPER MID ─────────────────────────────────────────────
    { type: 'rose-blush', x: -82, y: -38, rot:  24, scale: 0.9,  z: 16, delay: 1.6  },
    { type: 'peony',      x:  80, y: -40, rot: -20, scale: 0.92, z: 17, delay: 1.45 },
    { type: 'rose-pink',  x:   0, y: -45, rot:   4, scale: 0.88, z: 19, delay: 1.35 },
    { type: 'rose-blush', x: -42, y: -34, rot: -17, scale: 0.85, z: 18, delay: 1.8  },
    { type: 'rose-pink',  x:  44, y: -32, rot:  12, scale: 0.83, z: 15, delay: 2.0  },

    // ── OUTER RING ────────────────────────────────────────────
    { type: 'peony',      x: -95, y: -65, rot:  28, scale: 0.80, z: 12, delay: 2.25 },
    { type: 'peony',      x:  92, y: -68, rot: -25, scale: 0.78, z: 11, delay: 2.4  },
    { type: 'rose-blush', x: -15, y:-110, rot:   6, scale: 0.75, z: 14, delay: 2.55 },
    { type: 'rose-pink',  x:  18, y:-115, rot:  -9, scale: 0.72, z: 13, delay: 2.7  },
    { type: 'rose-blush', x: -68, y: -80, rot:  20, scale: 0.76, z: 10, delay: 2.85 },
    { type: 'rose-pink',  x:  66, y: -82, rot: -16, scale: 0.74, z:  9, delay: 3.0  },
    { type: 'peony',      x:-112, y: -15, rot:  33, scale: 0.70, z:  7, delay: 3.3  },
    { type: 'peony',      x: 110, y: -18, rot: -30, scale: 0.68, z:  6, delay: 3.45 },
    { type: 'rose-blush', x: -48, y:   4, rot: -22, scale: 0.67, z:  8, delay: 3.6  },
    { type: 'rose-pink',  x:  46, y:   6, rot:  18, scale: 0.66, z:  5, delay: 3.75 },
    { type: 'rose-blush', x:   0, y:  10, rot:  -3, scale: 0.64, z:  4, delay: 3.9  },
    { type: 'rose-pink',  x: -85, y:-100, rot:  14, scale: 0.62, z:  3, delay: 4.1  },
    { type: 'rose-blush', x:  82, y:-102, rot: -11, scale: 0.60, z:  2, delay: 4.25 },

    // ── FILLER FLOWERS ────────────────────────────────────────
    { type: 'filler', x:-100, y: -50, rot:  42, scale: 0.95, z:  8, delay: 4.4  },
    { type: 'filler', x:  98, y: -54, rot: -38, scale: 0.90, z:  7, delay: 4.55 },
    { type: 'filler', x: -30, y:-128, rot:  18, scale: 0.85, z:  6, delay: 4.7  },
    { type: 'filler', x:  32, y:-132, rot: -14, scale: 0.82, z:  5, delay: 4.85 },
    { type: 'filler', x:   0, y:-140, rot:   0, scale: 0.78, z:  4, delay: 5.0  },
    { type: 'filler', x: -72, y:  18, rot:  58, scale: 0.74, z:  3, delay: 5.15 },
    { type: 'filler', x:  70, y:  20, rot: -54, scale: 0.72, z:  2, delay: 5.3  },
    { type: 'filler', x:-125, y: -85, rot:  35, scale: 0.68, z:  1, delay: 5.45 },
    { type: 'filler', x: 122, y: -88, rot: -32, scale: 0.66, z:  0, delay: 5.6  },

    // ── LEAVES ────────────────────────────────────────────────
    { type: 'leaf', x:-125, y:  22, rot: -58, scale: 1.15, z: 10, delay: 5.8  },
    { type: 'leaf', x: 122, y:  20, rot:  54, scale: 1.10, z:  9, delay: 5.95 },
    { type: 'leaf', x: -55, y:  36, rot: -74, scale: 1.0,  z:  8, delay: 6.1  },
    { type: 'leaf', x:  52, y:  38, rot:  70, scale: 0.97, z:  7, delay: 6.25 },
    { type: 'leaf', x: -12, y:  44, rot: -88, scale: 0.92, z:  6, delay: 6.4  },
    { type: 'leaf', x:  14, y:  43, rot:  84, scale: 0.90, z:  5, delay: 6.55 },
    { type: 'leaf', x:-148, y: -28, rot: -45, scale: 0.88, z:  4, delay: 6.7  },
    { type: 'leaf', x: 145, y: -30, rot:  42, scale: 0.86, z:  3, delay: 6.85 },
  ]

  return placements.map((p, i) => ({
    id: i,
    type: p.type,
    x: p.x,
    y: p.y,
    rotate: p.rot,
    scale: p.scale,
    zIndex: p.z,
    bloomDelay: p.delay,
    bloomDuration: 1.5 + seededRandom(i) * 0.9,
    sway: -2.5 + seededRandom(i + 50) * 5,
    bloomStage: seededRandom(i + 100) > 0.72 ? 'partial' : 'full',
  }))
}

export function generateBouquetDissolvePetals(flowers) {
  const bloomFlowers = flowers.filter((f) => f.type !== 'leaf' && f.type !== 'filler')
  return bloomFlowers.flatMap((flower) => {
    const count = flower.type === 'peony' ? 8 : 5
    return Array.from({ length: count }, (_, p) => {
      const r = seededRandom(flower.id * 50 + p)
      const r2 = seededRandom(flower.id * 80 + p)
      return {
        id: `${flower.id}-d-${p}`,
        x: flower.x + (r - 0.5) * 40,
        y: flower.y + (r2 - 0.5) * 35,
        size: 10 + r2 * 16,
        delay: p * 0.10 + r * 0.45,
        driftX: (r - 0.5) * 160,
        driftY: -90 - r2 * 130,
        rot: (r - 0.5) * 450,
        variant: flower.type === 'rose-blush' ? 'blush' : 'pink',
      }
    })
  })
}

export const MEMORY_CARDS = [
  {
    id: '1',
    emoji: '🌸',
    title: 'First Meeting',
    subtitle: 'Where our story quietly began',
    date: 'The day everything changed',
    description: 'A moment that felt like fate — soft smiles, nervous laughter, and the beginning of the most beautiful chapter of our lives.',
    image: '/photo1.jpg',
  },
  {
    id: '2',
    emoji: '🍷',
    title: 'First Date',
    subtitle: 'Our first date',
    date: 'Our first date',
    description: 'Our first date was filled with love, laughter, and memories that we will cherish forever.',
    image: '1std.jpg',
  },
  {
    id: '3',
    emoji: '❤️',
    title: 'The day you Said Yes',
    subtitle: 'The day you said yes to become a couple',
    date: 'The day you said yes',
    description: 'The day you said yes to becoming a couple — filled with love, laughter, and memories we will cherish forever.',
    image: '/yes.jpg',
  },
  {
    id: '4',
    emoji: '❤️',
    title: 'Our Favorite Moment',
    subtitle: 'A memory we hold close',
    date: 'Written in our hearts',
    description: 'The kind of moment that makes time stand still — just you, me, and pure happiness.',
    image: '/photo2.jpeg',
  },
  {
    id: '5',
    emoji: '❤️',
    title: 'First Anniversary',
    subtitle: 'Our first anniversary',
    date: 'Our first anniversary',
    description: 'Our first anniversary was filled with love, laughter, and memories that we will cherish forever.',
    image: '/photo3.jpeg',
  },
  {
    id: '6',
    emoji: '✨',
    title: 'The Present',
    subtitle: 'Every tomorrow with you',
    date: 'Our present moment',
    description: 'Our present moment is filled with love, laughter, and memories that we will cherish forever.',
    image: '/photo5.jpeg',
  },
]
