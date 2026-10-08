import { transfers } from '../data/transfers'

export function Transfers() {
  return (
    <section className="section section-mint" aria-labelledby="transfer-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Transferable delivery patterns</p>
        <h2 id="transfer-title" className="js-reveal">
          What transfers directly to the Chemist Warehouse environment
        </h2>
        <p className="lede js-reveal">
          These are comparable ways of working, not a claim that the underlying platforms are the
          same.
        </p>
        <div className="transfer-grid" style={{ marginTop: '1.6rem' }}>
          {transfers.map((item, index) => (
            <article className="card transfer-card js-reveal" key={item.id}>
              <span className="label">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
