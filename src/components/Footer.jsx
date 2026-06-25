import { LINKEDIN, EMAIL } from '../data'

export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="wrap reveal">
        <h2>Let's talk.</h2>
        <div className="cta-row foot-cta">
          <a
            className="icon-btn"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          {/* Set EMAIL in src/data.js to show this button. */}
          {EMAIL && (
            <a className="icon-btn" href={`mailto:${EMAIL}`} aria-label="Email me">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
            </a>
          )}
        </div>
        <div className="thanks">// thanks for visiting — all tests passing</div>
        <div className="small">Built by Vamshi Sandyala · {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
