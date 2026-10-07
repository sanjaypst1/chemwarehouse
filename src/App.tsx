import { useEffect } from 'react'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { SkipLink } from './components/SkipLink'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { Alignment } from './sections/Alignment'
import { Artefacts } from './sections/Artefacts'
import { CaseStudy } from './sections/CaseStudy'
import { Challenges } from './sections/Challenges'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Leadership } from './sections/Leadership'
import { Metrics } from './sections/Metrics'
import { OperatingRhythm } from './sections/OperatingRhythm'
import { Plan306090 } from './sections/Plan306090'
import { RoleUnderstanding } from './sections/RoleUnderstanding'
import { Transfers } from './sections/Transfers'
import { WhySanjay } from './sections/WhySanjay'

export default function App() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    let cleanup: (() => void) | undefined
    let cancelled = false

    import('./animations/motion')
      .then(({ initMotion }) => {
        if (cancelled) return
        cleanup = initMotion(reducedMotion)
      })
      .catch(() => {
        document.documentElement.classList.remove('has-motion')
      })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [reducedMotion])

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <RoleUnderstanding />
        <Alignment />
        <CaseStudy />
        <Transfers />
        <OperatingRhythm />
        <Metrics />
        <Challenges />
        <Plan306090 />
        <Artefacts />
        <Leadership />
        <Experience />
        <WhySanjay />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
