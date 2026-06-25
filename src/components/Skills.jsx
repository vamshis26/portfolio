import { SKILLS } from '../data'

// Logos are vendored locally in src/assets/logos and bundled by Vite (inlined
// as data URIs), so there are no per-logo network requests at runtime.
const logos = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const logoUrl = (key) => logos[`../assets/logos/${key}.svg`]

// Maps each branded skill to its local logo file. Concept skills
// (Regression, Bug triage, etc.) have no logo and are omitted.
// `wide` marks wordmark logos that aren't square (e.g. AWS).
const LOGO = {
  Cypress: { key: 'cypress' },
  Playwright: { key: 'playwright' },
  Selenium: { key: 'selenium' },
  Pytest: { key: 'pytest' },
  Mocha: { key: 'mocha' },
  Jasmine: { key: 'jasmine' },
  Postman: { key: 'postman' },
  JavaScript: { key: 'javascript' },
  TypeScript: { key: 'typescript' },
  Java: { key: 'java' },
  'Python (OOP)': { key: 'python' },
  HTML: { key: 'html' },
  CSS: { key: 'css' },
  JSON: { key: 'json' },
  React: { key: 'react' },
  Angular: { key: 'angular' },
  'Vue.js': { key: 'vue' },
  Jenkins: { key: 'jenkins' },
  Docker: { key: 'docker' },
  Kubernetes: { key: 'kubernetes' },
  AWS: { key: 'aws', wide: true },
  Azure: { key: 'azure' },
  GitLab: { key: 'gitlab' },
  'Git/GitHub': { key: 'github' },
  Maven: { key: 'maven' },
  Linux: { key: 'linux' },
  Bash: { key: 'bash' },
  Jira: { key: 'jira' },
  MySQL: { key: 'mysql' },
  Oracle: { key: 'oracle' },
  PostgreSQL: { key: 'postgresql' },
  Splunk: { key: 'splunk' },
  MCP: { key: 'mcp' },
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap reveal">
        <span className="eyebrow">▸ Tech Stack</span>
        {/* <h2 className="sec-title">Tools in the kit</h2> */}
        <div className="skills">
          {SKILLS.map((s, i) => (
            <div className="skill-card" key={i}>
              <h3>{s.h}</h3>
              <div className="tags">
                {s.t.map((t) => {
                  const meta = LOGO[t]
                  const src = meta && logoUrl(meta.key)
                  return (
                    <span className="tag" key={t}>
                      {src && (
                        <img
                          className={`tag-logo${meta.wide ? ' tag-logo--wide' : ''}`}
                          src={src}
                          alt=""
                          aria-hidden="true"
                        />
                      )}
                      {t}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
