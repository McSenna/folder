import { useCallback, useEffect, useRef, useState } from 'react'
import LetterModal from './LetterModal'
import EnvelopeSVG from './EnvelopeSVG'

export default function LetterSection({ visible }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const openButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const scrollYRef = useRef(0)
  const bodyStyleRef = useRef({})
  const openTimeoutRef = useRef(null)
  const closeTimeoutRef = useRef(null)

  const handleOpen = useCallback(() => {
    if (isOpen) return
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    setIsClosing(false)
    setIsOpen(true)

    openTimeoutRef.current = window.setTimeout(() => {
      setShowLetter(true)
      openTimeoutRef.current = null
    }, 520)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (!isOpen) return
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }

    setIsClosing(true)
    closeTimeoutRef.current = window.setTimeout(() => {
      setShowLetter(false)
      setIsOpen(false)
      setIsClosing(false)
      closeTimeoutRef.current = null
      openButtonRef.current?.focus({ preventScroll: true })
    }, 680)
  }, [isOpen])

  useEffect(() => {
    const isModalOpen = isOpen || showLetter
    const body = typeof document !== 'undefined' ? document.body : null

    if (!body) return undefined

    if (!isModalOpen) {
      if (bodyStyleRef.current) {
        Object.entries(bodyStyleRef.current).forEach(([key, value]) => {
          body.style[key] = value
        })
        window.scrollTo(0, scrollYRef.current)
      }
      return undefined
    }

    scrollYRef.current = window.scrollY
    bodyStyleRef.current = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
    }

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollYRef.current}px`
    body.style.left = '0'
    body.style.width = '100%'

    const trapFocus = (event) => {
      if (event.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = Array.from(
        dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true')

      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        handleClose()
      }
      trapFocus(event)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      Object.entries(bodyStyleRef.current).forEach(([key, value]) => {
        body.style[key] = value
      })
      window.scrollTo(0, scrollYRef.current)
    }
  }, [handleClose, isOpen, showLetter])

  useEffect(() => {
    if (showLetter) {
      closeButtonRef.current?.focus({ preventScroll: true })
    }
  }, [showLetter])

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current)
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="letter" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="letter-heading">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[80vw] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(244,175,198,0.4) 0%, rgba(247,202,219,0.2) 50%, transparent 75%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-14 text-center sm:mb-16">
          <p
            className={`mb-3 font-body text-[0.68rem] uppercase tracking-[0.28em] text-rose-gold/65 opacity-0 ${visible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
          >
            ✦ For You, Always ✦
          </p>
          <h2
            id="letter-heading"
            className={`font-heading text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[0.04em] text-text-primary opacity-0 ${visible ? 'animate-section-reveal' : ''}`}
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            A Letter From My Heart
          </h2>
          <div
            className={`mt-5 mx-auto opacity-0 ${visible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <svg viewBox="0 0 260 14" className="mx-auto h-3 w-44 sm:w-52" aria-hidden="true">
              <defs>
                <linearGradient id="sec-orn" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="25%" stopColor="#C88B99" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#F4AFC6" />
                  <stop offset="75%" stopColor="#C88B99" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path d="M 0 7 Q 65 2 130 7 Q 195 12 260 7" stroke="url(#sec-orn)" strokeWidth="0.9" fill="none" />
              <circle cx="130" cy="7" r="2.5" fill="#C88B99" opacity="0.7" />
            </svg>
          </div>
        </div>

        <div className={`relative z-50 flex flex-col items-center gap-6 transition-all duration-500 ${showLetter ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}`} style={{ transition: 'opacity 0.4s ease, transform 0.5s ease' }}>
          <button
            type="button"
            ref={openButtonRef}
            onClick={handleOpen}
            disabled={isOpen}
            className={`group relative w-full max-w-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold/60 rounded-xl transition-all duration-500 ${!isOpen ? 'hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(200,139,153,0.35)]' : ''}`}
            style={{ aspectRatio: '3/2', animation: !isOpen ? 'envelope-idle 4s ease-in-out infinite' : 'none' }}
            aria-label="Click to open your letter"
          >
            <div className="absolute -inset-4 rounded-2xl blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(ellipse, rgba(247,202,219,0.5) 0%, rgba(244,175,198,0.25) 60%, transparent 85%)' }} aria-hidden="true" />
            <EnvelopeSVG isOpen={isOpen} />
          </button>

          {!isOpen && (
            <p className="font-heading text-[clamp(0.85rem,2.5vw,1.05rem)] italic tracking-wide text-text-secondary/70 opacity-0 animate-fade-in" style={{ animationDelay: visible ? '0.6s' : '0s', animationFillMode: 'forwards' }}>
              Click the envelope to open your letter ❤️
            </p>
          )}
        </div>
      </div>

      {showLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4 sm:p-8">
          <div className="fixed inset-0 bg-[rgba(20,10,15,0.45)] backdrop-blur-[6px] transition-opacity duration-500" onClick={handleClose} aria-hidden="true" />
          <div ref={dialogRef} className="relative z-10 w-full max-w-[92vw] sm:max-w-180 max-h-[75vh] rounded-4xl outline-none"
            role="dialog"
            aria-modal="true"
            aria-label="Love letter"
          >
            <LetterModal isClosing={isClosing} onClose={handleClose} closeButtonRef={closeButtonRef} />
          </div>
        </div>
      )}
    </section>
  )
}
