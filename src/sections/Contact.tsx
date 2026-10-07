import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react'
import { closing, profile } from '../data/site'

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow js-reveal">Contact</p>
        <h2 id="contact-title" className="js-reveal">
          {profile.name}
        </h2>
        <p className="lede js-reveal">
          {profile.location} · {profile.residency}
        </p>
        <p className="lede js-reveal">{closing}</p>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phoneHref}`}>
              <Phone size={18} aria-hidden="true" />
              {profile.phone}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight size={18} aria-hidden="true" />
              linkedin.com/in/sanjaysingh13
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        <div className="final-nodes js-reveal" aria-hidden="true">
          <span className="node">
            <i /> Product
          </span>
          <span className="node">
            <i style={{ background: '#2684FF' }} /> Backend
          </span>
          <span className="node">
            <i style={{ background: '#A8E6CF' }} /> APIs
          </span>
          <span className="node">
            <i style={{ background: '#FF8A7A' }} /> Frontend
          </span>
          <span className="node">
            <i style={{ background: '#16324F' }} /> Release
          </span>
          <span className="node">
            <i /> Outcome
          </span>
        </div>
      </div>
    </section>
  )
}
