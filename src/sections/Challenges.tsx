import { useState } from 'react'
import { challenges } from '../data/challenges'

export function Challenges() {
  const [openId, setOpenId] = useState(challenges[0].id)

  return (
    <section className="section" aria-labelledby="challenge-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Anticipated challenges</p>
        <h2 id="challenge-title" className="js-reveal">
          Challenges I would expect and how I would respond
        </h2>
        <div className="challenge-grid" style={{ marginTop: '1.5rem' }}>
          {challenges.map((item, index) => {
            const open = openId === item.id
            return (
              <article className="card challenge js-reveal" key={item.id}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${item.id}-response`}
                    onClick={() => setOpenId(open ? '' : item.id)}
                  >
                    Challenge {index + 1}: {item.challenge}
                  </button>
                </h3>
                <div id={`${item.id}-response`} hidden={!open}>
                  <p>
                    <span className="label">Response</span>
                    {item.response}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
