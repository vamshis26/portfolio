import { useState, useEffect } from 'react'

const LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const NAV_OFFSET = 74 // sticky nav height + breathing room

function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY
  const dist = targetY - startY
  const start = performance.now()
  // easeInOutCubic — gentle accelerate/decelerate
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

  function step(now) {
    const t = Math.min(1, (now - start) / duration)
    window.scrollTo(0, startY + dist * ease(t))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Nav() {
  const [active, setActive] = useState('')

  const handleClick = (e, id) => {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targetY = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    if (reduce) window.scrollTo(0, targetY)
    else smoothScrollTo(targetY)
    history.replaceState(null, '', `#${id}`)
    setActive(id)
  }

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        // When near the bottom, the short footer never reaches the center band —
        // force the last link active instead of leaving the prior section lit.
        const atBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
        if (atBottom) {
          setActive(LINKS[LINKS.length - 1].id)
          return
        }
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) setActive(LINKS[LINKS.length - 1].id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className="nav">
      <div className="wrap">
        {/* <a className="brand" href="#top">
          vamshi<b>.</b>test()
        </a> */}
        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={(e) => handleClick(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
