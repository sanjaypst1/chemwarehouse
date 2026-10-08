import { ConfidenceLabel } from '../components/ConfidenceLabel'
import { comparison } from '../data/comparison'

export function PlatformComparison() {
  return (
    <section className="section" id="approach" aria-labelledby="compare-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Relevance</p>
        <h2 id="compare-title" className="js-reveal">
          {comparison.heading}
        </h2>
        <div className="compare-grid" style={{ marginTop: '1.4rem' }}>
          <article className="card js-compare js-reveal">
            <ConfidenceLabel kind="verified" />
            <h3>{comparison.chemist.title}</h3>
            <ul>
              {comparison.chemist.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card js-compare js-reveal">
            <ConfidenceLabel kind="experience" />
            <h3>{comparison.merck.title}</h3>
            <ul>
              {comparison.merck.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card js-compare js-reveal">
            <ConfidenceLabel kind="experience" />
            <h3>{comparison.transferable.title}</h3>
            <ul>
              {comparison.transferable.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="prominent-callout js-reveal" role="note" style={{ marginTop: '1.4rem' }}>
          {comparison.statement}
        </p>
      </div>
    </section>
  )
}
