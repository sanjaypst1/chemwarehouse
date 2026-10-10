import { useState } from 'react'
import { ConfidenceLabel } from '../components/ConfidenceLabel'
import { LayerAccordion } from '../components/LayerAccordion'
import { caseStudy } from '../data/caseStudy'
import {
  integrationApproach,
  merckSituation,
  seriousDelayExample,
  testingLevels,
  transformationChallenges,
  uiReadyDone,
} from '../data/interviewNarrative'
import {
  merckApiDomains,
  merckCapabilityLayers,
  merckJourneys,
  merckLeadership,
  merckNarrative,
  valueStreams,
} from '../data/merckArchitecture'

export function CaseStudy() {
  const [active, setActive] = useState(caseStudy.chapters[0].id)
  const [journeyId, setJourneyId] = useState(merckJourneys[0].id)
  const chapter = caseStudy.chapters.find((item) => item.id === active) ?? caseStudy.chapters[0]
  const journey = merckJourneys.find((item) => item.id === journeyId) ?? merckJourneys[0]

  return (
    <section className="section section-mint" id="case-study" aria-labelledby="case-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Featured case study</p>
        <h2 id="case-title" className="js-reveal">
          {merckNarrative.heading}
        </h2>
        <p className="lede js-reveal">{merckNarrative.subtitle}</p>
        <ConfidenceLabel kind="experience" />
        <p className="js-reveal" style={{ marginTop: '1rem' }}>
          {merckNarrative.intro}
        </p>
        <p className="js-reveal">
          The ecosystem served or supported user groups including:
        </p>
        <ul className="pill-row js-reveal">
          {merckNarrative.userGroups.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p className="panel js-reveal" style={{ marginTop: '1rem' }}>
          {merckNarrative.insuranceNote}
        </p>
        <p className="panel js-reveal" style={{ marginTop: '0.8rem' }}>
          {merckNarrative.orderingNote}
        </p>

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
                    caseStudy.chapters[
                      (index - 1 + caseStudy.chapters.length) % caseStudy.chapters.length
                    ]
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
          id={`chapter-${chapter.id}`}
          aria-labelledby={`tab-${chapter.id}`}
        >
          <h3>{chapter.title}</h3>
          <p>{chapter.body}</p>
        </article>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          Situation and my role
        </h3>
        <p className="js-reveal">{merckSituation.situation}</p>
        <p className="js-reveal">{merckSituation.stakeholders}</p>
        {merckSituation.myRole.map((paragraph) => (
          <p className="js-reveal" key={paragraph.slice(0, 40)}>
            {paragraph}
          </p>
        ))}
        <p className="panel js-reveal">{merckSituation.ecosystemNote}</p>
        <ul className="pill-row js-reveal">
          {merckSituation.operatingModel.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          Major challenges during the transformation
        </h3>
        <div className="challenge-grid" style={{ marginTop: '1rem' }}>
          {transformationChallenges.map((item) => (
            <article className="card js-reveal" key={item.id}>
              <h4>{item.challenge}</h4>
              <p>{item.response}</p>
            </article>
          ))}
        </div>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          How I ensured integration happened successfully
        </h3>
        <p className="js-reveal">
          I managed integration as a continuous delivery activity rather than a final project phase.
        </p>
        <ol className="journey-flow" aria-label="Integration management approach">
          {integrationApproach.map((item, index) => (
            <li className="journey-step js-journey" key={item.step}>
              <span className="flow-index">{index + 1}</span>
              <span>
                <strong>{item.step}</strong>
                <br />
                {item.detail}
              </span>
            </li>
          ))}
        </ol>
        <p className="panel js-reveal" style={{ marginTop: '1rem' }}>
          {seriousDelayExample}
        </p>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          How we tested the solution
        </h3>
        <p className="js-reveal">
          Testing was risk-based and conducted at multiple levels. We did not wait until the end of
          the programme to discover whether the systems could work together.
        </p>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          {testingLevels.map((item) => (
            <article className="card js-reveal" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          Frontend portal readiness and done
        </h3>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <article className="card js-reveal">
            <h4>Definition of Ready for UI stories</h4>
            <ul>
              {uiReadyDone.ready.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card js-reveal">
            <h4>Definition of Done for portal features</h4>
            <ul>
              {uiReadyDone.done.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          Two connected but different value streams
        </h3>
        <p className="panel js-reveal">{valueStreams.clarification}</p>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          {valueStreams.streams.map((stream) => (
            <article className="card js-reveal" key={stream.id}>
              <h4>{stream.title}</h4>
              <ul>
                {stream.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          Illustrative capability architecture
        </h3>
        <ConfidenceLabel kind="illustrative" />
        <p className="hint js-reveal" style={{ marginTop: '0.7rem' }}>
          {merckNarrative.architectureLabel}
        </p>
        <LayerAccordion layers={merckCapabilityLayers} labelledBy="case-title" />

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          API domain map
        </h3>
        <ConfidenceLabel kind="illustrative" />
        <p className="hint js-reveal" style={{ marginTop: '0.7rem' }}>
          {merckNarrative.apiMapLabel}
        </p>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          {merckApiDomains.map((domain) => (
            <article className="card js-reveal" key={domain.id}>
              <h4>{domain.title}</h4>
              <ul>
                {domain.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="prominent-callout js-reveal" role="note">
          {merckNarrative.apiOwnershipMessage}
        </p>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
          Example end-to-end Merck journeys
        </h3>
        <div className="tabs" role="tablist" aria-label="Merck journeys">
          {merckJourneys.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`journey-tab-${item.id}`}
              aria-selected={item.id === journeyId}
              aria-controls={`journey-panel-${item.id}`}
              tabIndex={item.id === journeyId ? 0 : -1}
              onClick={() => setJourneyId(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article
          className="panel"
          role="tabpanel"
          id={`journey-panel-${journey.id}`}
          aria-labelledby={`journey-tab-${journey.id}`}
          style={{ marginTop: '1rem' }}
        >
          <p className="example-tag">{merckNarrative.journeyLabel}</p>
          {journey.note ? <p className="hint">{journey.note}</p> : null}
          <ol className="journey-flow" aria-label={journey.title}>
            {journey.steps.map((step, index) => (
              <li className="journey-step js-journey" key={step}>
                <span className="flow-index">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>

        <h3 className="js-reveal" style={{ marginTop: '2.2rem' }}>
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
          {merckLeadership.heading}
        </h3>
        <ConfidenceLabel kind="experience" />
        <ul className="grid-2" style={{ marginTop: '1rem' }}>
          {merckLeadership.points.map((item) => (
            <li className="chip js-reveal" key={item}>
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
        <ul className="pill-row js-reveal" style={{ marginTop: '1rem' }}>
          {merckLeadership.outcomes.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p className="hint js-reveal">{caseStudy.outcomeNote}</p>
        <p className="panel js-reveal" style={{ marginTop: '1.2rem' }}>
          {caseStudy.eShopFloor} eShopFloor was a related plant-facing digital capability, not the
          eCommerce portal.
        </p>
      </div>
    </section>
  )
}
