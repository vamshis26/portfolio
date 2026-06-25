import { LINKEDIN, EMAIL } from '../data'

export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="wrap reveal">
        <h2>Let's talk.</h2>
        <div className="cta-row foot-cta">
          <a className="btn btn-primary" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn ↗
          </a>
          {/* Set EMAIL in src/data.js to show this button. */}
          {EMAIL && (
            <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
              Email me
            </a>
          )}
        </div>
        <div className="small">Built by Vamshi Sandyala · {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
