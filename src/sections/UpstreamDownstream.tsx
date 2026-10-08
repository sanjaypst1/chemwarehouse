import { ConfidenceLabel } from '../components/ConfidenceLabel'
import {
  b2bPatterns,
  b2bQualification,
  commerceJourney,
  flowColumns,
  flowQualification,
} from '../data/upstreamDownstream'

export function UpstreamDownstream() {
  return (
    <section className="section" aria-labelledby="flow-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Integration view</p>
        <h2 id="flow-title" className="js-reveal">
          Upstream and downstream flow across pharmaceutical commerce
        </h2>
        <ConfidenceLabel kind="illustrative" />
        <p className="lede js-reveal" style={{ marginTop: '0.9rem' }}>
          {flowQualification}
        </p>
        <div className="triple-grid" style={{ marginTop: '1.5rem' }}>
          {flowColumns.map((column) => (
            <article className="card js-reveal" key={column.id}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Animated commerce journey
        </h3>
        <ol className="journey-flow" aria-label="Illustrative pharmaceutical commerce journey">
          {commerceJourney.map((step, index) => (
            <li className="journey-step js-journey" key={step}>
              <span className="flow-index">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <article className="panel js-reveal" style={{ marginTop: '2.2rem' }}>
          <p className="eyebrow">Supplier patterns</p>
          <h3>Relevant B2B and supplier integration patterns</h3>
          <p className="hint">{b2bQualification}</p>
          <div className="grid-2" style={{ marginTop: '1rem' }}>
            {b2bPatterns.map((pattern) => (
              <div className="chip" key={pattern.name}>
                <strong>{pattern.name}</strong>
                <p className="hint" style={{ margin: '0.35rem 0 0' }}>
                  {pattern.direction}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
