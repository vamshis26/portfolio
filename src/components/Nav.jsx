import { useState, useEffect } from 'react'

const LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
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
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
