export default function PaperBackground({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-180 rounded-4xl border border-white/70 bg-[radial-gradient(circle_at_top,rgba(255,255,250,0.96),rgba(252,246,239,0.98)_60%,rgba(245,236,225,0.98))] shadow-[0_18px_70px_rgba(48,20,20,0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.01)_100%)] opacity-80 pointer-events-none" />
      <div className="relative overflow-hidden rounded-4xl border border-[rgba(255,255,255,0.45)]/60 bg-[rgba(255,250,244,0.95)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        {children}
      </div>
    </div>
  )
}
