// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update copy without touching
// the components. Each section's component reads from these exports.
// ---------------------------------------------------------------------------

export const LINKEDIN = 'https://www.linkedin.com/in/vamshi-sandyala/'
export const GITHUB = 'https://github.com/vamshis26'

// Optional: set an email to show an "Email me" button (see Footer.jsx).
export const EMAIL = 'Vamshi.Sandyala@outlook.com' // e.g. 'vamshi@example.com'

export const NAME = 'Vamshi Sandyala'
export const ROLE = 'Software Development Engineer in Test · 3+ yrs'
export const TAGLINE =
  'Push to prod with confidence. I build test automation that <b>catches bugs before your users do</b>.'

// Hero "passing test suite" — your headline impact metrics.
export const SUITE = [
  { name: 'Regression cycle', val: 'weeks → ~4h' },
  { name: 'Pipeline pass rate', val: '~90%' },
  { name: 'Failure triage time', val: '>50%' },
  { name: 'Test maintenance effort', val: '−40%' },
]

export const PROJECT = {
  tag: 'LLM · Jenkins & Jira',
  name: 'An MCP server for CI/CD failure triage',
  // <b> tags are rendered as bold.
  desc:
    'I built a <b>Model Context Protocol server</b> that connects an LLM directly to Jenkins and Jira logs, so a flaky build or a failing suite can be queried in <b>plain English</b> instead of grep and guesswork. It surfaces the likely cause, links the related defect, and drafts the first triage note, <b>cutting failure-triage time by over 50%.</b>',
  stack: ['Python', 'MCP', 'Jenkins API', 'Jira / Xray', 'LLM tooling', 'Log analysis'],
  impact:
    '// also shipped: an auto-healing Cypress layer that recovers from locator drift — −40% test maintenance',
}

export const EXPERIENCE = [
  {
    when: 'Mar 2024 — Present',
    co: 'Walmart Global Tech',
    title: 'Software Development Engineer in Test',
    points: [
      'Built the <b>Cypress</b> automation framework for the AdTech billing platform on a Page Object Model with custom commands, <b>2,500+ test cases</b> across 4 apps.',
      'Wired it into <b>Jenkins CI/CD</b> with parallel execution, cutting regression from weeks to <b>~4 hours</b> at a <b>~90% pass rate</b>.',
      'Wrote <b>300+ Pytest</b> API and integration tests with pytest-bdd, pytest-xdist, and fixtures across billing and payment flows.',
      'Validated billing data integrity with <b>PostgreSQL</b> queries, catching UI-vs-backend mismatches before production.',
      'Owned the defect lifecycle in <b>Jira Xray</b> across 3 releases, repro, RCA, fix verification, release risk.',
      'Built an <b>LLM-integrated MCP server</b> over Jenkins & Jira logs, cutting failure-triage time by <b>50%+</b>.',
      'Added an <b>auto-healing layer</b> that recovers from locator drift, reducing maintenance by <b>~40%</b>.',
],
  },
  {
    when: 'Jun 2023 — Feb 2024',
    co: 'PRN IT Corp',
    title: 'Software Development Engineer in Test',
    points: [
      'Built and maintained <b>Playwright</b> automation for critical billing workflows and regression.',
      'Ran manual, API, UI, and integration testing with <b>SQL</b> backend validation for UI-database consistency.',
      'Tested billing APIs in <b>Postman</b>, contracts, error handling, failed-payment and retry edge cases.',
      'Integrated the suite into <b>Jenkins</b> for automated runs on every build.',
      'Wrote Pytest unit/integration tests for Python billing utilities to lift coverage and reliability.',
],
  },
]

export const SKILLS = [
  {
    h: 'TEST AUTOMATION FRAMEWORKS',
    t: ['Cypress', 'Playwright', 'Selenium', 'Pytest', 'pytest-bdd', 'TestNG', 'Mocha', 'Jasmine', 'Postman'],
  },
  { h: 'LANGUAGES', t: ['JavaScript', 'TypeScript', 'Java', 'Python (OOP)'] },
  { h: 'WEB & UI FRAMEWORKS', t: ['React', 'Angular', 'Vue.js', 'HTML', 'CSS', 'REST APIs', 'JSON', 'XML'] },
  { h: 'DEVOPS & CLOUD', t: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GitLab', 'Git/GitHub', 'Maven', 'Linux', 'Bash'] },
  { h: 'DATABASES & DATA', t: ['MySQL', 'Oracle', 'PostgreSQL', 'Great Expectations'] },
  { h: 'TEST & DEFECT MANAGEMENT', t: ['Jira', 'Xray', 'TestRail'] },
  { h: 'AI & OBSERVABILITY', t: ['MCP', 'Splunk', 'OpenObserve', 'Log analysis'] },
  { h: 'QA PRACTICES & METHODOLOGY', t: ['Page Object Model', 'API testing', 'Integration testing', 'Regression', 'Test planning', 'RCA', 'Requirement traceability', 'Bug triage'] },
]

export const EDUCATION = [
  { deg: 'M.S. Computer Science', sch: 'Western Illinois University · Macomb, IL', yr: 'Jan 2022 — May 2023' },
  { deg: 'B.Tech Computer Science', sch: 'Vignan Institute of Technology & Sciences · Hyderabad, India', yr: 'Aug 2016 — Aug 2020' },
]

export const CERTS = [
  { b: '01', name: 'Mobile Testing using Appium' },
  { b: '02', name: 'AI for Everyone' },
]
