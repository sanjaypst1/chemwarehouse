import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { navItems } from '../data/nav'
import { profile } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

export function Header() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const drawerId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    if (open) firstLinkRef.current?.focus()
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const closeAndFocus = () => {
    setOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview">
          <strong>{profile.name}</strong>
          <span>Senior Scrum Master</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <div className="drawer" role="presentation" onClick={closeAndFocus}>
          <nav
            id={drawerId}
            className="drawer-panel"
            aria-label="Mobile"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="drawer-close" onClick={closeAndFocus}>
              <span className="visually-hidden">Close menu</span>
              <X size={20} aria-hidden="true" />
            </button>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
