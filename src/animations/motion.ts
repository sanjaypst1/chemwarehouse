import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

function ensurePlugin() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }
}

export function initMotion(reducedMotion: boolean) {
  ensurePlugin()
  const cleanups: Array<() => void> = []

  const progress = document.querySelector<HTMLElement>('.scroll-progress')
  if (progress) {
    const tween = gsap.to(progress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { scrub: 0.2 },
    })
    cleanups.push(() => tween.kill())
  }

  if (reducedMotion) {
    document.documentElement.classList.remove('has-motion')
    gsap.set('.js-reveal, .js-hero, .bar span, .flow-step', { clearProps: 'all' })
    return () => {
      cleanups.forEach((fn) => fn())
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }

  document.documentElement.classList.add('has-motion')

  const hero = gsap.timeline({ defaults: { ease: 'power2.out' } })
  hero.from('.js-hero', { y: 18, opacity: 0, duration: 0.9, stagger: 0.08 })
  cleanups.push(() => hero.kill())

  const reveals = gsap.utils.toArray<HTMLElement>('.js-reveal')
  reveals.forEach((el) => {
    const tween = gsap.fromTo(
      el,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      },
    )
    cleanups.push(() => tween.kill())
  })

  const flow = document.querySelector('.flow')
  if (flow) {
    const tween = gsap.from('.flow-step', {
      opacity: 0,
      y: 14,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: flow, start: 'top 80%' },
    })
    cleanups.push(() => tween.kill())
  }

  const bars = gsap.utils.toArray<HTMLElement>('.js-bar')
  bars.forEach((bar) => {
    const value = Number(bar.dataset.value || 0)
    const tween = gsap.to(bar, {
      width: `${value}%`,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: bar, start: 'top 90%' },
    })
    cleanups.push(() => tween.kill())
  })

  const metrics = gsap.utils.toArray<HTMLElement>('[data-count]')
  metrics.forEach((el) => {
    const target = Number(el.dataset.count || 0)
    const obj = { value: 0 }
    const tween = gsap.to(obj, {
      value: target,
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.value)}${el.dataset.suffix ?? ''}`
      },
    })
    cleanups.push(() => tween.kill())
  })

  return () => {
    cleanups.forEach((fn) => fn())
    ScrollTrigger.getAll().forEach((st) => st.kill())
    document.documentElement.classList.remove('has-motion')
  }
}
