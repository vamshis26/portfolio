import { useState, useEffect } from 'react'
import { NAME } from '../data'

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState('show') // 'show' | 'fade'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fade'), 850)
    const t2 = setTimeout(() => onDone(), 1300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`intro-overlay ${phase === 'fade' ? 'intro-fade' : ''}`}>
      <span className="intro-name">{NAME}</span>
    </div>
  )
}
