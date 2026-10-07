import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useWebGL } from '../hooks/useWebGL'

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()
  const webgl = useWebGL()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !webgl) return undefined
    let disposed = false
    let handle: { dispose: () => void } | undefined

    import('../three/connectedNetwork')
      .then(({ createConnectedNetwork }) => {
        if (disposed || !canvas.isConnected) return
        try {
          handle = createConnectedNetwork(canvas, {
            reducedMotion: reduced,
            isMobile: window.matchMedia('(max-width: 768px)').matches,
          })
          if (disposed) {
            handle.dispose()
            handle = undefined
          }
        } catch {
          handle = undefined
        }
      })
      .catch(() => undefined)

    return () => {
      disposed = true
      handle?.dispose()
    }
  }, [reduced, webgl])

  if (!webgl) {
    return (
      <div className="hero-fallback" aria-hidden="true">
        <svg viewBox="0 0 1200 700" role="presentation">
          <g fill="none" stroke="#52D3D8" strokeWidth="1.4" opacity="0.7">
            <path d="M180 160 C 340 80, 520 240, 690 180 S 980 90, 1080 210" />
            <path d="M150 300 C 360 240, 520 390, 740 320 S 980 250, 1120 360" />
            <path d="M200 470 C 420 390, 610 540, 820 470 S 1020 420, 1100 520" />
          </g>
          <g fill="#2684FF">
            <circle cx="180" cy="160" r="7" />
            <circle cx="690" cy="180" r="8" fill="#52D3D8" />
            <circle cx="1080" cy="210" r="7" fill="#A8E6CF" />
            <circle cx="740" cy="320" r="8" fill="#FF8A7A" />
            <circle cx="820" cy="470" r="7" fill="#16324F" />
          </g>
        </svg>
      </div>
    )
  }

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
