import { useState, useEffect, useCallback } from 'react'

export const PHASES = {
  GROWING: 'growing',
  PAUSE: 'pause',
  DISSOLVING: 'dissolving',
  REVEALED: 'revealed',
}

const TIMELINE = {
  growDuration: 9000,
  pauseDuration: 1200,
  dissolveDuration: 3500,
}

export function useAnimationTimeline(reducedMotion) {
  const [phase, setPhase] = useState(
    reducedMotion ? PHASES.REVEALED : PHASES.GROWING,
  )

  useEffect(() => {
    if (reducedMotion) {
      setPhase(PHASES.REVEALED)
      return
    }

    const timers = [
      setTimeout(() => setPhase(PHASES.PAUSE), TIMELINE.growDuration),
      setTimeout(
        () => setPhase(PHASES.DISSOLVING),
        TIMELINE.growDuration + TIMELINE.pauseDuration,
      ),
      setTimeout(
        () => setPhase(PHASES.REVEALED),
        TIMELINE.growDuration +
          TIMELINE.pauseDuration +
          TIMELINE.dissolveDuration,
      ),
    ]

    return () => timers.forEach(clearTimeout)
  }, [reducedMotion])

  const skipToReveal = useCallback(() => setPhase(PHASES.REVEALED), [])

  const showMessage = phase === PHASES.DISSOLVING || phase === PHASES.REVEALED
  const showBouquet =
    phase === PHASES.GROWING ||
    phase === PHASES.PAUSE ||
    phase === PHASES.DISSOLVING
  const isDissolving = phase === PHASES.DISSOLVING
  const isRevealed = phase === PHASES.REVEALED

  return {
    phase,
    showMessage,
    showBouquet,
    isDissolving,
    isRevealed,
    skipToReveal,
  }
}
