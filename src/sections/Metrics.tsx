import { dashboardNote, metricUses, sampleBars, sampleMetrics } from '../data/metrics'
import { metricsPrinciple } from '../data/site'

export function Metrics() {
  return (
    <section className="section section-muted" aria-labelledby="metrics-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Delivery evidence</p>
        <h2 id="metrics-title" className="js-reveal">
          Metrics for decisions, not individual performance
        </h2>
        <p className="lede js-reveal">{metricsPrinciple}</p>
        <ul className="pill-row js-reveal" style={{ margin: '1rem 0 1.6rem' }}>
          {metricUses.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p className="example-tag">{dashboardNote}</p>
        <div className="outcome-grid">
          {sampleMetrics.map((item) => (
            <article className="metric js-reveal" key={item.id}>
              <strong>
                <span data-count={item.numeric} data-suffix={item.suffix}>
                  {item.value}
                  {item.suffix}
                </span>
              </strong>
              <h3>{item.label}</h3>
              <p className="hint">{item.hint}</p>
            </article>
          ))}
        </div>
        <div className="panel js-reveal" style={{ marginTop: '1.2rem' }}>
          <h3>Illustrative integration readiness</h3>
          <p className="hint">Sample values only. Not programme data.</p>
          {sampleBars.map((bar) => (
            <div key={bar.label} style={{ marginTop: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <span>{bar.label}</span>
                <span className="hint">
                  {bar.value}% · {bar.note}
                </span>
              </div>
              <div className="bar" aria-hidden="true">
                <span className="js-bar" data-value={bar.value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
