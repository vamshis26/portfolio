import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap reveal">
        <span className="eyebrow">▸ stack.config</span>
        <h2 className="sec-title">Tools in the kit</h2>
        <div className="skills">
          {SKILLS.map((s, i) => (
            <div className="skill-card" key={i}>
              <h3>{s.h}</h3>
              <div className="tags">
                {s.t.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
