import { ConfidenceLabel } from '../components/ConfidenceLabel'
import { publicSources } from '../data/sources'

export function Sources() {
  return (
    <section className="section section-muted" id="sources" aria-labelledby="sources-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Transparency</p>
        <h2 id="sources-title" className="js-reveal">
          Public architecture sources
        </h2>
        <ConfidenceLabel kind="verified" />
        <ol className="source-list js-reveal">
          {publicSources.map((source, index) => (
            <li key={source.id}>
              <span className="source-marker" aria-hidden="true">
                {index + 1}
              </span>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.title}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
