import { useEffect, useRef, useState } from 'react'

// Scroll-driven word reveal: each word brightens from dim → bright as the
// paragraph travels up through the viewport. Progress maps the element's
// top edge from ~82% of the viewport height (just entered) to ~38% (settled
// near the middle) into 0 → 1, then spreads that across the word count so
// words light up left-to-right. Respects prefers-reduced-motion by showing
// the fully-lit text with no scroll work.
export default function ScrollText({ text, className = '', as: Tag = 'p' }) {
  const ref = useRef(null)
  const words = text.split(' ')
  const [progress, setProgress] = useState(0)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setReduce(true)
      return
    }

    const el = ref.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const start = vh * 0.82
      const end = vh * 0.38
      const p = (start - rect.top) / (start - end)
      setProgress(Math.max(0, Math.min(1, p)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (reduce) {
    return <Tag className={`scroll-text ${className}`.trim()}>{text}</Tag>
  }

  const n = words.length
  return (
    <Tag ref={ref} className={`scroll-text ${className}`.trim()} aria-label={text}>
      {words.map((w, i) => {
        // Each word owns a slice of the progress range; +1 overlap softens the
        // hand-off so adjacent words crossfade rather than snap.
        const wordStart = i / n
        const wordEnd = (i + 1.5) / n
        const o = (progress - wordStart) / (wordEnd - wordStart)
        const opacity = 0.18 + 0.82 * Math.max(0, Math.min(1, o))
        return (
          <span key={i} aria-hidden="true" style={{ opacity }}>
            {w}
            {i < n - 1 ? ' ' : ''}
          </span>
        )
      })}
    </Tag>
  )
}
