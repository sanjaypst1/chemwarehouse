import { ConfidenceLabel } from '../components/ConfidenceLabel'
import { LayerAccordion } from '../components/LayerAccordion'
import {
  apiConceptCallout,
  apiConcepts,
  chemistFacts,
  chemistLayers,
  chemistQualification,
} from '../data/chemistArchitecture'
import { platformCapabilityNote } from '../data/interviewNarrative'

export function ChemistEcosystem() {
  return (
    <section className="section section-muted" id="architecture" aria-labelledby="cw-arch-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Public platform view</p>
        <h2 id="cw-arch-title" className="js-reveal">
          Understanding the Chemist Warehouse Digital Commerce Ecosystem
        </h2>
        <ConfidenceLabel kind="verified" />
        <p className="lede js-reveal" style={{ marginTop: '0.9rem' }}>
          {chemistQualification}
        </p>
        <ul className="fact-grid">
          {chemistFacts.map((fact) => (
            <li className="chip js-reveal" key={fact}>
              {fact}
            </li>
          ))}
        </ul>
        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Layered architecture
        </h3>
        <LayerAccordion layers={chemistLayers} labelledBy="cw-arch-title" />
        <article className="panel callout-panel js-reveal" style={{ marginTop: '2rem' }}>
          <h3 id="four-numbers-title">Four numbers that must not be confused</h3>
          <div className="concept-grid">
            {apiConcepts.map((item) => (
              <div key={item.term}>
                <h4>{item.term}</h4>
                <p>{item.definition}</p>
              </div>
            ))}
          </div>
          <p className="prominent-callout" role="note">
            {apiConceptCallout}
          </p>
        </article>
        <article className="panel js-reveal" style={{ marginTop: '1.5rem' }}>
          <h3>{platformCapabilityNote.heading}</h3>
          <ConfidenceLabel kind="verified" />
          {platformCapabilityNote.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="hint">{platformCapabilityNote.qualification}</p>
        </article>
      </div>
    </section>
  )
}
