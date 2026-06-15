import { useState, useCallback } from 'react'
import useReveal from './hooks/useReveal'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EduCerts from './components/EduCerts'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  const [introDone, setIntroDone] = useState(false)
  const onDone = useCallback(() => setIntroDone(true), [])

  return (
    <>
      {!introDone && <Intro onDone={onDone} />}
      <div className="grid-bg" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Project />
        <Experience />
        <Skills />
        <EduCerts />
        <Footer />
      </main>
    </>
  )
}
