import CloseButton from './CloseButton'
import LetterHeader from './LetterHeader'
import LetterBody from './LetterBody'
import PaperBackground from './PaperBackground'

export default function LetterModal({ isClosing, onClose, closeButtonRef }) {
  return (
    <div className="relative w-full max-w-[92vw] sm:max-w-180 max-h-[75vh] rounded-4xl mx-auto"
      style={{ animation: isClosing ? 'letter-retract 0.65s cubic-bezier(0.55, 0, 1, 0.45) forwards' : 'letter-emerge 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
    >
        <PaperBackground>
          <div className="relative h-full overflow-hidden">
            <div className="sticky top-0 z-10 border-b border-white/70 bg-[rgba(255,250,244,0.95)]/95 backdrop-blur-md px-6 py-6 sm:px-8 sm:py-7">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <LetterHeader />
                </div>
                <CloseButton onClick={onClose} buttonRef={closeButtonRef} />
              </div>
            </div>

            <div className="overflow-y-auto px-6 pb-8 pt-6 sm:px-10 sm:pb-10 scrollbar-hidden scroll-smooth touch-pan-y" style={{ WebkitOverflowScrolling: 'touch', maxHeight: 'calc(75vh - 8.2rem)' }}>
              <LetterBody />
            </div>
          </div>
        </PaperBackground>
      </div>
  )
}
