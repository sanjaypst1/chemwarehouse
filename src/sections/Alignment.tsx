import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { alignmentItems } from '../data/alignment'

export function Alignment() {
  const [openId, setOpenId] = useState(alignmentItems[0].id)

  return (
    <section className="section section-muted" aria-labelledby="align-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Programme need and experience</p>
        <h2 id="align-title" className="js-reveal">
          What the programme needs and what I bring
        </h2>
        <p className="lede js-reveal">
          Each area pairs a likely programme need with comparable experience from digital B2B
          eCommerce and multi-system delivery. The full content is available without hover.
        </p>
        <div className="align-grid" style={{ marginTop: '1.6rem' }}>
          {alignmentItems.map((item) => {
            const open = openId === item.id
            return (
              <article className="align-item js-reveal" key={item.id}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${item.id}-panel`}
                    id={`${item.id}-button`}
                    onClick={() => setOpenId(open ? '' : item.id)}
                  >
                    {item.title}
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={`${item.id}-button`}
                  hidden={!open}
                  className="align-body"
                >
                  <p className="need">
                    <span className="label">Programme need</span>
                    {item.need}
                  </p>
                  <p className="bring">
                    <span className="label">My experience</span>
                    {item.experience}
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
