import { deliveryFlow, transferablePatterns } from '../data/flow'
import {
  headlessUnderstanding,
  microservicesUnderstanding,
  openingNarrative,
} from '../data/interviewNarrative'

export function RoleUnderstanding() {
  return (
    <section className="section" id="role" aria-labelledby="role-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">{openingNarrative.eyebrow}</p>
        <h2 id="role-title" className="js-reveal">
          This is more than running Scrum ceremonies.
        </h2>
        <p className="lede js-reveal">{openingNarrative.lead}</p>
        {openingNarrative.body.map((paragraph) => (
          <p className="js-reveal" key={paragraph.slice(0, 48)}>
            {paragraph}
          </p>
        ))}

        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          {headlessUnderstanding.heading}
        </h3>
        {headlessUnderstanding.paragraphs.map((paragraph) => (
          <p className="js-reveal" key={paragraph.slice(0, 48)}>
            {paragraph}
          </p>
        ))}
        <ol className="flow" aria-label="Simple headless commerce architecture">
          {headlessUnderstanding.simpleArchitecture.map((step, index) => (
            <li className="flow-step" key={step}>
              <span className="flow-index">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="prominent-callout js-reveal" role="note" style={{ marginTop: '1.2rem' }}>
          {headlessUnderstanding.scrumMasterPoint}
        </p>

        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          {microservicesUnderstanding.heading}
        </h3>
        {microservicesUnderstanding.paragraphs.map((paragraph) => (
          <p className="js-reveal" key={paragraph.slice(0, 48)}>
            {paragraph}
          </p>
        ))}
        <ul className="pill-row js-reveal">
          {microservicesUnderstanding.services.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <p className="panel js-reveal" style={{ marginTop: '1rem' }}>
          {microservicesUnderstanding.distinction}
        </p>

        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Delivery flow I would protect
        </h3>
        <ol className="flow" aria-label="Delivery flow from priorities to outcome">
          {deliveryFlow.map((step, index) => (
            <li className="flow-step" key={step}>
              <span className="flow-index">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="js-reveal" style={{ marginTop: '1.8rem' }}>
          I would apply comparable, directly relevant and transferable delivery patterns rather than
          assuming an identical technology stack:
        </p>
        <ul className="pill-row js-reveal" style={{ marginTop: '0.8rem' }}>
          {transferablePatterns.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
