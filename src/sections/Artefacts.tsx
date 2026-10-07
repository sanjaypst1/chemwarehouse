import { artefacts } from '../data/artefacts'

export function Artefacts() {
  const register = artefacts[0]
  const rest = artefacts.slice(1)

  return (
    <section className="section" aria-labelledby="artefacts-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Working tools</p>
        <h2 id="artefacts-title" className="js-reveal">
          Practical artefacts I would use
        </h2>
        <p className="lede js-reveal">
          Example formats only. The wording is generic and does not represent Chemist Warehouse
          records.
        </p>
        <article className="panel js-reveal" style={{ marginTop: '1.4rem' }}>
          <span className="example-tag">Example format only.</span>
          <h3>{register.title}</h3>
          <div className="table-wrap" tabIndex={0} aria-label="Example dependency register, scroll horizontally on small screens">
            <table>
              <thead>
                <tr>
                  {register.columns?.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {register.rows?.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          {rest.map((item) => (
            <article className="card js-reveal" key={item.id}>
              <span className="example-tag">Example format only.</span>
              <h3>{item.title}</h3>
              <ul>
                {item.items?.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
