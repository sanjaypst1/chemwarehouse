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
import { ChemistEcosystem } from './sections/ChemistEcosystem'
import { Contact } from './sections/Contact'
import { DiscoveryQuestions } from './sections/DiscoveryQuestions'
import { Experience } from './sections/Experience'
import { GxpControls } from './sections/GxpControls'
import { Hero } from './sections/Hero'
import { Leadership } from './sections/Leadership'
import { Metrics } from './sections/Metrics'
import { OperatingRhythm } from './sections/OperatingRhythm'
import { Plan306090 } from './sections/Plan306090'
import { PlatformComparison } from './sections/PlatformComparison'
import { RoleUnderstanding } from './sections/RoleUnderstanding'
import { Sources } from './sections/Sources'
import { Transfers } from './sections/Transfers'
import { UpstreamDownstream } from './sections/UpstreamDownstream'
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
        <ChemistEcosystem />
        <UpstreamDownstream />
        <CaseStudy />
        <GxpControls />
        <PlatformComparison />
        <Transfers />
        <OperatingRhythm />
        <Metrics />
        <Challenges />
        <DiscoveryQuestions />
        <Plan306090 />
        <Artefacts />
        <Leadership />
        <Experience />
        <WhySanjay />
        <Contact />
        <Sources />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
