import { PROJECT } from '../data'
import ScrollText from './ScrollText'
import MacWindow from './MacWindow'

export default function Project() {
  return (
    <section className="section" id="project">
      <div className="wrap reveal">
        <span className="eyebrow">▸ Signature work</span>
        <h2 className="sec-title">The project I'm known for</h2>
        <ScrollText
          className="sec-lead"
          text="Most testers wait on logs. I made the logs answer questions."
        />
        <MacWindow title="signature-work">
          <div className="project">
            <span className="proj-tag">{PROJECT.tag}</span>
            <h3 className="proj-name">{PROJECT.name}</h3>
            <p
              className="proj-desc"
              dangerouslySetInnerHTML={{ __html: PROJECT.desc }}
            />
            <div className="proj-stack">
              {PROJECT.stack.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <p className="proj-impact">{PROJECT.impact}</p>
          </div>
        </MacWindow>
      </div>
    </section>
  )
}
