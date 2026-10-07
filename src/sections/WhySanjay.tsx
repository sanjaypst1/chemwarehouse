import { whyPoints } from '../data/site'

export function WhySanjay() {
  return (
    <section className="section section-mint" aria-labelledby="why-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Fit</p>
        <h2 id="why-title" className="js-reveal">
          Why I can add value quickly
        </h2>
        <ol className="why-grid" style={{ marginTop: '1.4rem' }}>
          {whyPoints.map((item, index) => (
            <li className="card js-reveal" key={item}>
              <span className="label">0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
