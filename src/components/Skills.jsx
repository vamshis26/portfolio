import { SKILLS } from '../data'

// Brand logos. `si` = Simple Icons CDN (served in brand color by default);
// `dv` = Devicon (full multicolor) for brands Simple Icons no longer hosts.
// `color` overrides near-black brand colors that would vanish on the dark theme.
// `wide` is for wordmark logos that aren't square.
// Concept skills (Regression, Bug triage, etc.) have no logo and are omitted.
const LIGHT = 'e8eef6'
const LOGO = {
  Cypress: { si: 'cypress' },
  Playwright: { dv: 'playwright/playwright-original.svg' },
  Selenium: { si: 'selenium' },
  Pytest: { si: 'pytest' },
  Mocha: { si: 'mocha' },
  Jasmine: { si: 'jasmine' },
  Postman: { si: 'postman' },
  JavaScript: { si: 'javascript' },
  TypeScript: { si: 'typescript' },
  Java: { dv: 'java/java-original.svg' },
  'Python (OOP)': { si: 'python' },
  HTML: { si: 'html5' },
  CSS: { si: 'css' },
  JSON: { si: 'json', color: LIGHT },
  React: { si: 'react' },
  Angular: { si: 'angular', color: 'dd0031' },
  'Vue.js': { si: 'vuedotjs' },
  Jenkins: { si: 'jenkins' },
  Docker: { si: 'docker' },
  Kubernetes: { si: 'kubernetes' },
  AWS: { dv: 'amazonwebservices/amazonwebservices-plain-wordmark.svg', wide: true },
  Azure: { dv: 'azure/azure-original.svg' },
  GitLab: { si: 'gitlab' },
  'Git/GitHub': { si: 'github', color: LIGHT },
  Maven: { si: 'apachemaven' },
  Linux: { si: 'linux' },
  Bash: { si: 'gnubash' },
  Jira: { si: 'jira' },
  MySQL: { si: 'mysql' },
  Oracle: { dv: 'oracle/oracle-original.svg' },
  PostgreSQL: { si: 'postgresql' },
  Splunk: { si: 'splunk', color: LIGHT },
  MCP: { si: 'modelcontextprotocol', color: LIGHT },
}

function logoSrc(meta) {
  if (meta.dv) return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${meta.dv}`
  return `https://cdn.simpleicons.org/${meta.si}${meta.color ? `/${meta.color}` : ''}`
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
                  return (
                    <span className="tag" key={t}>
                      {meta && (
                        <img
                          className={`tag-logo${meta.wide ? ' tag-logo--wide' : ''}`}
                          src={logoSrc(meta)}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
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
