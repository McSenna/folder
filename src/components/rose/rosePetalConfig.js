/** Realistic rose petal layers — inner spiral → middle → outer cup */
export function getRosePetals(variant = 0) {
  const offset = variant * 13
  const petals = []

  for (let i = 0; i < 5; i++) {
    petals.push({
      id: `in-${i}`,
      rotateY: i * 72 + offset,
      rotateX: 58 + (i % 2) * 6,
      translateZ: 1 + i * 1.5,
      width: 13,
      height: 20,
      delay: i * 0.1,
      lightness: 0.78 - i * 0.04,
      curl: 48,
    })
  }

  for (let i = 0; i < 8; i++) {
    petals.push({
      id: `mid-${i}`,
      rotateY: i * 45 + 18 + offset * 0.5,
      rotateX: 44 + (i % 3) * 4,
      translateZ: 9 + (i % 2) * 3,
      width: 17,
      height: 27,
      delay: 0.45 + i * 0.07,
      lightness: 0.86 + (i % 2) * 0.04,
      curl: 38,
    })
  }

  for (let i = 0; i < 11; i++) {
    petals.push({
      id: `out-${i}`,
      rotateY: i * 33 + 8 + offset * 0.3,
      rotateX: 28 + (i % 4) * 3,
      translateZ: 18 + (i % 3) * 4,
      width: 21,
      height: 33,
      delay: 0.85 + i * 0.05,
      lightness: 0.94 + (i % 2) * 0.03,
      curl: 28,
    })
  }

  return petals
}

/** Realistic teardrop petal path */
export const PETAL_PATH =
  'M 0 0 C -7 4 -11 14 -9 24 C -7 31 -3 36 0 38 C 3 36 7 31 9 24 C 11 14 7 4 0 0 Z'

export const SEPAL_PATH =
  'M 0 8 L -6 0 L 0 -4 L 6 0 Z'
