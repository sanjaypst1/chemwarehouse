import { ArrowRight } from 'lucide-react'
import { HeroCanvas } from '../components/HeroCanvas'
import { credibility, hero, profile } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="overview" aria-labelledby="hero-title">
      <HeroCanvas />
      <div className="hero-copy">
        <p className="hero-kicker js-hero">{profile.positioning}</p>
        <p className="eyebrow js-hero">{profile.name}</p>
        <h1 id="hero-title" className="js-hero">
          {hero.headline}
        </h1>
        <p className="lede js-hero">{profile.title}</p>
        <p className="lede js-hero">{hero.supporting}</p>
        <div className="cta-row js-hero">
          <a className="btn btn-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="btn btn-ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
        <ul className="credibility">
          {credibility.map((item) => (
            <li className="chip js-hero" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
