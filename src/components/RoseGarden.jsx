import { useMemo } from 'react'
import Rose from './Rose'
import { generateRoses } from '../utils/roseConfig'

export default function RoseGarden({ visible, dissolving }) {
  const roses = useMemo(() => generateRoses(16), [])

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[15] overflow-hidden"
      aria-hidden="true"
    >
      {roses.map((rose) => (
        <Rose
          key={rose.id}
          config={rose}
          visible={visible}
          dissolving={dissolving}
        />
      ))}
    </div>
  )
}
