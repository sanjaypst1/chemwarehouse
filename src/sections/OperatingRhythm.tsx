import { cadenceNote } from '../data/site'
import { rhythm } from '../data/rhythm'

export function OperatingRhythm() {
  return (
    <section className="section" aria-labelledby="rhythm-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">How I would operate</p>
        <h2 id="rhythm-title" className="js-reveal">
          My operating rhythm as the Scrum Master
        </h2>
        <div className="rhythm" style={{ marginTop: '1.5rem' }}>
          {rhythm.map((item) => (
            <article className="card js-reveal" key={item.id}>
              <h3>{item.cadence}</h3>
              <ul>
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="panel js-reveal" style={{ marginTop: '1.2rem' }}>
          {cadenceNote}
        </p>
      </div>
    </section>
  )
}
