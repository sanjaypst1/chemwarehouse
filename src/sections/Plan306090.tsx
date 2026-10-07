import { Printer } from 'lucide-react'
import { useState } from 'react'
import { planPhases } from '../data/plan'
import { planClose, profile } from '../data/site'

export function Plan306090() {
  const [active, setActive] = useState(planPhases[0].id)
  const phase = planPhases.find((item) => item.id === active) ?? planPhases[0]
  const progress = active === '30' ? 33 : active === '60' ? 66 : 100

  return (
    <section className="section section-mint" id="plan" aria-labelledby="plan-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Entry plan</p>
        <h2 id="plan-title" className="js-reveal">
          30-60-90 day plan
        </h2>
        <p className="lede js-reveal">
          A calm, evidence-led start. Observe the system, make dependencies visible, then improve
          flow with the people doing the work.
        </p>
        <div className="cta-row js-reveal">
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            <Printer size={16} aria-hidden="true" />
            Print or save the 30-60-90 plan
          </button>
        </div>
        <div className="print-only">
          <p>
            <strong>{profile.name}</strong>
          </p>
          <p>{profile.title}</p>
        </div>
        <div className="bar js-reveal" aria-hidden="true" style={{ margin: '0.4rem 0 1.2rem' }}>
          <span className="plan-progress" style={{ width: `${progress}%` }} />
        </div>
        <div className="tabs" role="tablist" aria-label="30-60-90 day plan">
          {planPhases.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`plan-tab-${item.id}`}
              aria-selected={item.id === active}
              aria-controls={`plan-panel-${item.id}`}
              tabIndex={item.id === active ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                const index = planPhases.findIndex((entry) => entry.id === active)
                if (event.key === 'ArrowRight') {
                  setActive(planPhases[(index + 1) % planPhases.length].id)
                }
                if (event.key === 'ArrowLeft') {
                  setActive(planPhases[(index - 1 + planPhases.length) % planPhases.length].id)
                }
              }}
            >
              {item.tab}
            </button>
          ))}
        </div>
        {planPhases.map((item) => (
          <article
            key={item.id}
            className="panel plan-panel"
            role="tabpanel"
            id={`plan-panel-${item.id}`}
            aria-labelledby={`plan-tab-${item.id}`}
            hidden={item.id !== phase.id}
            style={{ marginTop: '1rem' }}
          >
            <h3>
              {item.range}: {item.title}
            </h3>
            <div className="grid-3">
              <div>
                <h4>Objectives</h4>
                <ul>
                  {item.objectives.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Actions</h4>
                <ul>
                  {item.actions.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Expected outcomes</h4>
                <ul>
                  {item.outcomes.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
        <p className="panel js-reveal" style={{ marginTop: '1.2rem' }}>
          {planClose}
        </p>
      </div>
    </section>
  )
}
