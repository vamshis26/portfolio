import { useState, useCallback, useEffect } from 'react'
import useReveal from './hooks/useReveal'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ScrollTimeline from './components/ScrollTimeline'
import Project from './components/Project'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EduCerts from './components/EduCerts'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  const [introDone, setIntroDone] = useState(() => sessionStorage.getItem('introSeen') === '1')
  const onDone = useCallback(() => {
    sessionStorage.setItem('introSeen', '1')
    setIntroDone(true)
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {!introDone && <Intro onDone={onDone} />}
      <div className="glow-bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <div className="grain-bg" aria-hidden="true" />
      <Nav />
      <ScrollTimeline />
      <main>
        <Hero ready={introDone} />
        <Experience />
        <Project />
        <Skills />
        <EduCerts />
        <Footer />
      </main>
    </>
  )
}
