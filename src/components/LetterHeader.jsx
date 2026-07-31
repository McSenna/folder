import DecorativeDivider from './DecorativeDivider'

export default function LetterHeader() {
  return (
    <div className="sticky top-0 z-20 border-b border-white/60 bg-[rgba(255,250,244,0.88)]/95 backdrop-blur-md px-6 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto flex max-w-180 flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="font-heading text-[clamp(1.8rem,4.2vw,2.6rem)] font-semibold leading-[1.05] text-text-primary">
            My Dearest Love
          </p>
          <DecorativeDivider />
        </div>
        <p className="max-w-[45ch] text-sm uppercase tracking-[0.32em] text-rose-gold/60">
          A note penned with all my heart, on the finest paper.
        </p>
      </div>
    </div>
  )
}
