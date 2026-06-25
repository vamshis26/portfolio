import { useEffect } from 'react'
import { NAME, ROLE, TAGLINE, SUITE, LINKEDIN } from '../data'

export default function Hero({ ready = true }) {
  // Animate the test-suite lines in one by one on load.
  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = document.querySelectorAll('.t-line')
    if (reduce) {
      lines.forEach((l) => l.classList.add('in'))
      return
    }
    const timers = []
    lines.forEach((l, i) => {
      timers.push(setTimeout(() => l.classList.add('in'), 350 + i * 220))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <h1 className="h-name">
            Vamshi
            <br />
            Sandyala
          </h1>
          <div className={`genie${ready ? ' genie-in' : ''}`}>
            <p className="h-role">{ROLE}</p>
            <p className="h-tag" dangerouslySetInnerHTML={{ __html: TAGLINE }} />
            <div className="cta-row">
              <a className="btn btn-primary" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div
          className="runner"
          role="img"
          aria-label="Test suite summary of career impact metrics, all passing"
        >
          <div className="runner-head">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="runner-title">impact.spec.js</span>
          </div>
          <div className="runner-body">
            {SUITE.map((s, i) => (
              <div className="t-line" key={i}>
                <span className="tick">{i+1}</span>
                <span className="t-name">{s.name}</span>
                <span className="t-val">{s.val}</span>
              </div>
            ))}
            <div className="runner-foot">
              <span>{SUITE.length} passing</span>
              <span className="bar" />
              <span>0 failing</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
