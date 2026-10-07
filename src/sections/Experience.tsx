import { career, certifications } from '../data/experience'

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Selected experience</p>
        <h2 id="exp-title" className="js-reveal">
          Experience snapshot
        </h2>
        <div className="timeline">
          {career.map((item) => (
            <article className="js-reveal" key={item.org}>
              <h3>{item.org}</h3>
              <p>{item.role}</p>
            </article>
          ))}
        </div>
        <h3 className="js-reveal" style={{ marginTop: '2rem' }}>
          Selected certifications
        </h3>
        <ul className="cert-row js-reveal">
          {certifications.map((item) => (
            <li className="pill" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
