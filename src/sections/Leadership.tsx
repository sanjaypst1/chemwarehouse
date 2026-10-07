import { leadershipTraits } from '../data/experience'
import { leadershipQuote } from '../data/site'

export function Leadership() {
  return (
    <section className="section section-muted" aria-labelledby="lead-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Leadership style</p>
        <h2 id="lead-title" className="js-reveal">
          How I work with teams
        </h2>
        <blockquote className="quote js-reveal">{leadershipQuote}</blockquote>
        <ul className="grid-2" style={{ marginTop: '1.5rem' }}>
          {leadershipTraits.map((item) => (
            <li className="chip js-reveal" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
