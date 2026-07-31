import PinkRose from './PinkRose'
import BlushRose from './BlushRose'
import Peony from './Peony'
import FillerFlower from './FillerFlower'
import EucalyptusLeaf from './EucalyptusLeaf'

/** Base pixel sizes — increased ~2× for the premium large bouquet */
const BASE_SIZE = {
  'rose-pink': 148,
  'rose-blush': 138,
  peony:        168,
  filler:        88,
  leaf:         130,
}

export default function BouquetFlower({ flower, dissolving }) {
  const { type, id, scale, bloomStage } = flower
  const baseSize = BASE_SIZE[type] * scale

  const components = {
    'rose-pink': (
      <PinkRose size={baseSize} id={`br-${id}`} stage={bloomStage} />
    ),
    'rose-blush': (
      <BlushRose size={baseSize} id={`br-${id}`} stage={bloomStage} />
    ),
    peony: <Peony size={baseSize} id={`bp-${id}`} stage={bloomStage} />,
    filler: <FillerFlower size={baseSize} id={`bf-${id}`} />,
    leaf: <EucalyptusLeaf size={baseSize} id={`bl-${id}`} />,
  }

  return (
    <div
      className={`pointer-events-none ${dissolving ? 'animate-bouquet-fade' : ''}`}
      style={{
        opacity: dissolving ? undefined : 1,
        animationDelay: dissolving ? `${flower.bloomDelay * 0.05}s` : undefined,
      }}
    >
      {components[type]}
    </div>
  )
}
