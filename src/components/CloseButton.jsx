export default function CloseButton({ onClick, buttonRef }) {
  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/55 text-text-primary shadow-[0_18px_36px_rgba(120,75,75,0.16)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/60"
      aria-label="Close letter"
    >
      <span className="text-[1.2rem] leading-none">×</span>
    </button>
  )
}
