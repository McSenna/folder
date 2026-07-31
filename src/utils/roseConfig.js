function seededRandom(seed) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453
  return x - Math.floor(x)
}

export function generateRoses(count = 16) {
  return Array.from({ length: count }, (_, i) => {
    const r1 = seededRandom(i + 1)
    const r2 = seededRandom(i + 17)
    const r3 = seededRandom(i + 43)
    const r4 = seededRandom(i + 89)
    const r5 = seededRandom(i + 131)

    return {
      id: i,
      x: 4 + (i / Math.max(count - 1, 1)) * 92 + (r1 - 0.5) * 10,
      heightVmin: 28 + r2 * 38,
      stemDelay: r3 * 2.8,
      bloomDelay: 1.8 + r4 * 4.5,
      swayAngle: -4 + r5 * 8,
      scale: 0.7 + r1 * 0.55,
      stemDuration: 2.2 + r2 * 1.6,
      bloomDuration: 1.8 + r3 * 1.4,
      zIndex: Math.floor(r4 * 12),
      leafSide: r5 > 0.5 ? 1 : -1,
      hueShift: Math.floor(r1 * 12),
    }
  })
}

export function generateDissolvePetals(roses) {
  return roses.flatMap((rose) => {
    const petalCount = 7 + Math.floor(seededRandom(rose.id * 7) * 5)
    return Array.from({ length: petalCount }, (_, p) => {
      const r = seededRandom(rose.id * 100 + p)
      const r2 = seededRandom(rose.id * 200 + p)

      return {
        id: `${rose.id}-petal-${p}`,
        x: rose.x + (r - 0.5) * 4,
        bottomVmin: rose.heightVmin * 0.55 * rose.scale + r2 * 3,
        size: 12 + r2 * 16,
        delay: p * 0.07 + r * 0.35,
        driftX: (r - 0.5) * 100,
        driftRot: (r2 - 0.5) * 420,
        rxDrift: 40 + r * 80,
        ryDrift: (r2 - 0.5) * 120,
        upward: r > 0.32,
        lightness: 0.82 + r2 * 0.14,
      }
    })
  })
}

export function generateAmbientPetals(count = 12) {
  return Array.from({ length: count }, (_, i) => {
    const r = seededRandom(i + 500)
    const r2 = seededRandom(i + 600)

    return {
      id: `ambient-${i}`,
      x: r * 100,
      y: r2 * 100,
      size: 8 + r * 10,
      delay: r2 * 6,
      duration: 8 + r * 6,
      driftX: (r - 0.5) * 40,
    }
  })
}
