import { useState } from 'react'
import { caseStudy } from '../data/caseStudy'

export function CaseStudy() {
  const [active, setActive] = useState(caseStudy.chapters[0].id)
  const chapter = caseStudy.chapters.find((item) => item.id === active) ?? caseStudy.chapters[0]
  const tabId = `chapter-${chapter.id}`

  return (
    <section className="section" id="case-study" aria-labelledby="case-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Featured case study</p>
        <h2 id="case-title" className="js-reveal">
          {caseStudy.heading}
        </h2>
        <p className="lede js-reveal">{caseStudy.supporting}</p>
        <p className="js-reveal">{caseStudy.context}</p>
        <p className="js-reveal">
          The digital ecosystem enabled healthcare-professional engagement and B2B commerce-related
          capabilities used by stakeholders such as:
        </p>
        <ul className="pill-row js-reveal">
          {caseStudy.stakeholders.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p className="js-reveal" style={{ marginTop: '1.2rem' }}>
          Markets supported:
        </p>
        <ul className="market-list js-reveal">
          {caseStudy.markets.map((item) => (
            <li className="chip" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="chapter-nav" role="tablist" aria-label="Case study chapters">
          {caseStudy.chapters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={item.id === active}
              aria-controls={`chapter-${item.id}`}
              tabIndex={item.id === active ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                const index = caseStudy.chapters.findIndex((entry) => entry.id === active)
                if (event.key === 'ArrowRight') {
                  const next = caseStudy.chapters[(index + 1) % caseStudy.chapters.length]
                  setActive(next.id)
                }
                if (event.key === 'ArrowLeft') {
                  const prev =
                    caseStudy.chapters[(index - 1 + caseStudy.chapters.length) % caseStudy.chapters.length]
                  setActive(prev.id)
                }
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article
          className="panel js-reveal"
          role="tabpanel"
          id={tabId}
          aria-labelledby={`tab-${chapter.id}`}
        >
          <h3>{chapter.title}</h3>
          <p>{chapter.body}</p>
        </article>
        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Scrum Master responsibilities
        </h3>
        <ul className="grid-2">
          {caseStudy.responsibilities.map((item) => (
            <li className="card js-reveal" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Outcomes from the wider team and delivery environment
        </h3>
        <div className="outcome-grid">
          {caseStudy.outcomes.map((item) => (
            <article className="metric js-reveal" key={item.label}>
              <strong>
                {item.numeric !== null ? (
                  <span data-count={item.numeric} data-suffix={item.suffix}>
                    {item.value}
                  </span>
                ) : (
                  item.value
                )}
              </strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
        <p className="hint js-reveal">{caseStudy.outcomeNote}</p>
        <p className="panel js-reveal" style={{ marginTop: '1.2rem' }}>
          {caseStudy.eShopFloor} eShopFloor was a related plant-facing digital capability, not the
          eCommerce portal.
        </p>
        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Ecosystem capabilities
        </h3>
        <ul className="pill-row js-reveal">
          {caseStudy.ecosystem.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
