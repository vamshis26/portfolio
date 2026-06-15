import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap reveal">
        <span className="eyebrow">▸ experience.log</span>
        <h2 className="sec-title">Where I've shipped quality</h2>
        <p className="sec-lead">
          Three years across billing and AdTech platforms — framework design,
          CI/CD, API and data validation.
        </p>
        <div className="tl">
          {EXPERIENCE.map((j, i) => (
            <div className="job" key={i}>
              <div className="job-meta">
                <div className="when">{j.when}</div>
                <div className="co">{j.co}</div>
                <div className="ttl">{j.title}</div>
              </div>
              <div className="job-body">
                <ul>
                  {j.points.map((p, k) => (
                    <li key={k} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
