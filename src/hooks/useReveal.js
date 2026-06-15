import { useEffect } from 'react'

// Adds the `in` class to `.reveal` elements when they scroll into view.
// Falls back to showing everything if IntersectionObserver is unavailable
// or the user prefers reduced motion.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}
