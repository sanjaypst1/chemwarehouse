import { useState } from 'react'
import { ConfidenceLabel } from '../components/ConfidenceLabel'
import { gxpAreas, gxpIntro } from '../data/gxpControls'

export function GxpControls() {
  const [openId, setOpenId] = useState(gxpAreas[0].id)

  return (
    <section className="section section-muted" aria-labelledby="gxp-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Regulated delivery</p>
        <h2 id="gxp-title" className="js-reveal">
          {gxpIntro.heading}
        </h2>
        <ConfidenceLabel kind="experience" />
        <p className="lede js-reveal" style={{ marginTop: '0.9rem' }}>
          {gxpIntro.caution}
        </p>
        <p className="panel js-reveal">{gxpIntro.principles}</p>
        <p className="hint js-reveal">{gxpIntro.boundary}</p>
        <div className="align-grid" style={{ marginTop: '1.5rem' }}>
          {gxpAreas.map((area) => {
            const open = openId === area.id
            return (
              <article className="align-item js-reveal" key={area.id}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${area.id}-panel`}
                    id={`${area.id}-button`}
                    onClick={() => setOpenId(open ? '' : area.id)}
                  >
                    {area.title}
                  </button>
                </h3>
                <div
                  id={`${area.id}-panel`}
                  role="region"
                  aria-labelledby={`${area.id}-button`}
                  hidden={!open}
                  className="align-body"
                >
                  <ul>
                    {area.items.map((item) => (
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
