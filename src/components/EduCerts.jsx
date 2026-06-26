import { EDUCATION, CERTS } from '../data'
import MacWindow from './MacWindow'

export default function EduCerts() {
  return (
    <section className="section" id="education">
      <div className="wrap reveal">
        <MacWindow title="education">
          <div className="two">
            <div>
              <span className="eyebrow">▸ Education</span>
              {/* <h2 className="sec-title sec-title-sm">Education</h2> */}
              {EDUCATION.map((e, i) => (
                <div className="edu-item" key={i}>
                  <div className="deg">{e.deg}</div>
                  <div className="sch">{e.sch}</div>
                  <div className="yr">{e.yr}</div>
                </div>
              ))}
            </div>
            <div>
              <span className="eyebrow">▸ Certifications</span>
              {/* <h2 className="sec-title sec-title-sm">Certifications</h2> */}
              <div className="cert-list">
                {CERTS.map((c, i) => (
                  <div className="cert" key={i}>
                    <span className="b">{i + 1}</span>
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  )
}
