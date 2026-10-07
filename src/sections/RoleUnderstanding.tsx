import { deliveryFlow, transferablePatterns } from '../data/flow'

export function RoleUnderstanding() {
  return (
    <section className="section" id="role" aria-labelledby="role-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">The role as I understand it</p>
        <h2 id="role-title" className="js-reveal">
          This is more than running Scrum ceremonies.
        </h2>
        <p className="lede js-reveal">
          The central challenge is maintaining end-to-end delivery flow when customer-facing progress
          depends on multiple backend services, APIs, internal teams and an external frontend partner.
          My role would be to make these dependencies visible, create clear ownership, accelerate
          decisions and protect the target release without sacrificing quality or sustainable
          delivery.
        </p>
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
