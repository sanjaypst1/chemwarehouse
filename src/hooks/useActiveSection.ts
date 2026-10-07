import { useEffect, useState } from 'react'
import { navItems } from '../data/nav'

export function useActiveSection() {
  const [active, setActive] = useState<string>(navItems[0].id)

  useEffect(() => {
    const ids = navItems.map((item) => item.id)

    const update = () => {
      const offset = window.scrollY + 120
      let current = ids[0]
      for (const id of ids) {
        const node = document.getElementById(id)
        if (node && node.offsetTop <= offset) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])

  return active
}
