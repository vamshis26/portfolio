import useReveal from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EduCerts from './components/EduCerts'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  return (
    <>
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
