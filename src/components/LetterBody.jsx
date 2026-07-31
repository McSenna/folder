const LETTER_PARAGRAPHS = [
  'Happy Girlfriend’s Day, my dearest lalab. ❤️🌹 Thank you for choosing to love me every single day, for believing in me even when I struggle to believe in myself, and for always being my greatest supporter.',
  'Thank you for caring for me with a love so genuine and selfless that it makes me feel like the luckiest man in the world. You are my safe place, my comfort, and one of the greatest blessings in my life. I know I may not be able to give you everything you deserve right now, but I promise that this is not where our story ends. One day, I’ll make it all up to you. I’ll repay every sacrifice, every understanding, every tear, and every moment you’ve stayed by my side with a love that never stops choosing you.',
  'Until that day comes, please hold my hand a little longer, because every step I take is for us and for the beautiful future we’ll build together.',
  'I love you more than words could ever express, today, tomorrow, and for the rest of my life. Happy Girlfriend’s Day, my forever love. 🤍',
]

export default function LetterBody() {
  return (
    <div className="space-y-8 px-2 pb-8 sm:px-0">
      {LETTER_PARAGRAPHS.map((paragraph, index) => (
        <p
          key={index}
          className="max-w-[65ch] text-left text-[clamp(0.95rem,2vw,1.1rem)] leading-[1.95] text-text-secondary"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}
