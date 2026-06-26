import { useState, useEffect, useRef, useCallback } from 'react'

// Sections in document order — the rail dots map to these anchors.
const NODES = [
  { id: 'top', label: 'Top' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const NAV_OFFSET = 74

function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY
  const dist = targetY - startY
  const start = performance.now()
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
  function step(now) {
    const t = Math.min(1, (now - start) / duration)
    window.scrollTo(0, startY + dist * ease(t))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function ScrollTimeline() {
  const [progress, setProgress] = useState(0)
  // Each node's position along the rail (0..1), based on its scroll offset.
  const [positions, setPositions] = useState(() => NODES.map(() => 0))
  const frame = useRef(0)

  const measure = useCallback(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    setPositions(
      NODES.map((n) => {
        const el = document.getElementById(n.id)
        if (!el || scrollable <= 0) return 0
        const offset = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
        return Math.min(1, Math.max(0, offset / scrollable))
      }),
    )
  }, [])

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
      })
    }
    onScroll()
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    // Re-measure once the page has settled (fonts/images shift layout).
    const t = setTimeout(measure, 600)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      clearTimeout(t)
      cancelAnimationFrame(frame.current)
    }
  }, [measure])

  const jumpTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targetY = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    if (reduce) window.scrollTo(0, targetY)
    else smoothScrollTo(targetY)
  }

  // The active section is the last node the cursor has reached.
  let activeIndex = 0
  positions.forEach((p, i) => {
    if (progress >= p - 0.005) activeIndex = i
  })

  return (
    <div className="scroll-rail" aria-hidden="true">
      <div className="scroll-rail-track" />
      <div className="scroll-rail-fill" style={{ height: `${progress * 100}%` }} />
      {NODES.map((n, i) => (
        <button
          type="button"
          key={n.id}
          className={`scroll-rail-dot${progress >= positions[i] - 0.005 ? ' reached' : ''}${
            i === activeIndex ? ' active' : ''
          }`}
          style={{ top: `${positions[i] * 100}%` }}
          onClick={() => jumpTo(n.id)}
          tabIndex={-1}
        >
          <span className="scroll-rail-label">{n.label}</span>
        </button>
      ))}
      <div className="scroll-rail-cursor" style={{ top: `${progress * 100}%` }} />
    </div>
  )
}
