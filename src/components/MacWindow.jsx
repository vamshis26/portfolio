// A macOS-style window frame: a titlebar with red/amber/green traffic-light
// dots and an optional title, wrapping arbitrary content in the body. Used to
// frame a whole section (e.g. the Tech Stack grid) as one "window".
export default function MacWindow({ title, children, className = '' }) {
  return (
    <div className={`mac-window ${className}`.trim()}>
      <div className="mac-bar">
        <span className="mac-dot mac-dot--r" aria-hidden="true" />
        <span className="mac-dot mac-dot--y" aria-hidden="true" />
        <span className="mac-dot mac-dot--g" aria-hidden="true" />
        {title && <span className="mac-bar-title">{title}</span>}
      </div>
      <div className="mac-body">{children}</div>
    </div>
  )
}
