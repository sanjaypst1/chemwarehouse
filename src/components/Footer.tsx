import { footerNote, profile } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>{footerNote}</p>
      </div>
    </footer>
  )
}
