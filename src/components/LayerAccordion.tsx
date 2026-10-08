import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type Layer = {
  id: string
  title: string
  summary?: string
  note?: string
  items: string[]
}

export function LayerAccordion({
  layers,
  labelledBy,
  defaultOpenId,
}: {
  layers: Layer[]
  labelledBy: string
  defaultOpenId?: string
}) {
  const [openId, setOpenId] = useState(defaultOpenId ?? layers[0]?.id ?? '')

  return (
    <div className="layer-grid" role="list" aria-labelledby={labelledBy}>
      {layers.map((layer) => {
        const open = openId === layer.id
        return (
          <article className="layer-card js-layer js-reveal" key={layer.id} role="listitem">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`${layer.id}-panel`}
                id={`${layer.id}-button`}
                onClick={() => setOpenId(open ? '' : layer.id)}
              >
                <span>
                  {layer.title}
                  {layer.summary ? <small>{layer.summary}</small> : null}
                </span>
                <ChevronDown size={18} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`${layer.id}-panel`}
              role="region"
              aria-labelledby={`${layer.id}-button`}
              hidden={!open}
              className="layer-body"
            >
              {layer.note ? <p className="hint">{layer.note}</p> : null}
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        )
      })}
    </div>
  )
}
