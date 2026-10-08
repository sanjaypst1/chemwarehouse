import { useState } from 'react'
import { discoveryQuestions } from '../data/discoveryQuestions'

export function DiscoveryQuestions() {
  const [openId, setOpenId] = useState(discoveryQuestions[0].id)

  return (
    <section className="section section-mint" aria-labelledby="questions-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">First two weeks</p>
        <h2 id="questions-title" className="js-reveal">
          The questions I would ask before changing the delivery system
        </h2>
        <div className="align-grid" style={{ marginTop: '1.4rem' }}>
          {discoveryQuestions.map((group) => {
            const open = openId === group.id
            return (
              <article className="align-item js-reveal" key={group.id}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${group.id}-panel`}
                    id={`${group.id}-button`}
                    onClick={() => setOpenId(open ? '' : group.id)}
                  >
                    {group.title}
                  </button>
                </h3>
                <div
                  id={`${group.id}-panel`}
                  role="region"
                  aria-labelledby={`${group.id}-button`}
                  hidden={!open}
                  className="align-body"
                >
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
