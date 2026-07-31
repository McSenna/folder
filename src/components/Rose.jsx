import RoseStem from './rose/RoseStem'
import RoseLeaf from './rose/RoseLeaf'
import RoseBloom3D from './rose/RoseBloom3D'

export default function Rose({ config, visible, dissolving }) {
  const {
    x,
    heightVmin,
    stemDelay,
    bloomDelay,
    swayAngle,
    scale,
    stemDuration,
    bloomDuration,
    zIndex,
    leafSide,
    id,
  } = config

  if (!visible) return null

  const opacity = dissolving ? 0 : 1
  const transitionOpacity = dissolving ? 'opacity 0.8s ease' : undefined
  const stemCurve = (id % 5) - 2

  return (
    <div
      className="absolute bottom-0 will-change-transform"
      style={{
        left: `${x}%`,
        height: `${heightVmin}vmin`,
        zIndex,
        transform: `translateX(-50%) scale(${scale})`,
        opacity,
        transition: transitionOpacity,
        filter: dissolving ? 'blur(1px)' : 'none',
      }}
      aria-hidden="true"
    >
      <div
        className="relative h-full origin-bottom animate-sway"
        style={{
          '--sway-angle': `${swayAngle}deg`,
          animationDelay: `${stemDelay + bloomDelay}s`,
        }}
      >
        <RoseStem delay={stemDelay} duration={stemDuration} curve={stemCurve} />

        <RoseLeaf
          side={leafSide}
          bottom="36%"
          delay={stemDelay + stemDuration * 0.45}
          size={1.1}
        />
        <RoseLeaf
          side={-leafSide}
          bottom="52%"
          delay={stemDelay + stemDuration * 0.6}
          size={0.85}
          flip
        />
        <RoseLeaf
          side={leafSide}
          bottom="68%"
          delay={stemDelay + stemDuration * 0.72}
          size={0.7}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: 'calc(100% - 2.75rem)' }}
        >
          <RoseBloom3D
            bloomDelay={bloomDelay}
            bloomDuration={bloomDuration}
            variant={id % 7}
            tilt={swayAngle * 0.4}
          />
        </div>
      </div>
    </div>
  )
}
