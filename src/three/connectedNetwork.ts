import {
  AdditiveBlending,
  BufferGeometry,
  CanvasTexture,
  Color,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three'

type NetworkHandle = {
  dispose: () => void
}

type Options = {
  reducedMotion: boolean
  isMobile: boolean
}

const LAYER_COLORS = ['#2684FF', '#52D3D8', '#A8E6CF', '#FF8A7A', '#16324F', '#7dcfb6']

function makeGlowTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const gradient = ctx.createRadialGradient(32, 32, 2, 32, 32, 30)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  const texture = new CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function makePoints(count: number, spread: number, y: number, z: number) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * spread
    positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.55
    positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.8
  }
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
  return geometry
}

export function createConnectedNetwork(
  canvas: HTMLCanvasElement,
  options: Options,
): NetworkHandle {
  const scene = new Scene()
  const camera = new PerspectiveCamera(42, 1, 0.1, 40)
  camera.position.set(0, 0.2, 7.2)

  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !options.isMobile,
    powerPreference: 'low-power',
  })
  renderer.outputColorSpace = SRGBColorSpace
  renderer.setClearColor(0x000000, 0)

  const root = new Group()
  scene.add(root)
  const glow = makeGlowTexture()

  const layers = options.isMobile ? 5 : 6
  const perLayer = options.isMobile ? 8 : 12
  const layerGeoms: BufferGeometry[] = []
  const lineGeoms: BufferGeometry[] = []
  const pointsMats: PointsMaterial[] = []
  const lineMats: LineBasicMaterial[] = []

  for (let i = 0; i < layers; i += 1) {
    const y = 1.6 - i * 0.62
    const z = -0.4 + i * 0.18
    const geom = makePoints(perLayer, 4.8 - i * 0.18, y, z)
    layerGeoms.push(geom)
    const color = new Color(LAYER_COLORS[i % LAYER_COLORS.length])
    const mat = new PointsMaterial({
      color,
      size: options.isMobile ? 0.16 : 0.22,
      map: glow ?? undefined,
      transparent: true,
      opacity: 0.85,
      blending: AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
    pointsMats.push(mat)
    root.add(new Points(geom, mat))
  }

  for (let i = 0; i < layers - 1; i += 1) {
    const from = layerGeoms[i].getAttribute('position')
    const to = layerGeoms[i + 1].getAttribute('position')
    const count = Math.min(from.count, to.count, options.isMobile ? 6 : 9)
    const positions = new Float32Array(count * 6)
    for (let n = 0; n < count; n += 1) {
      positions.set([from.getX(n), from.getY(n), from.getZ(n)], n * 6)
      positions.set([to.getX(n), to.getY(n), to.getZ(n)], n * 6 + 3)
    }
    const lineGeom = new BufferGeometry()
    lineGeom.setAttribute('position', new Float32BufferAttribute(positions, 3))
    lineGeoms.push(lineGeom)
    const lineMat = new LineBasicMaterial({
      color: '#52D3D8',
      transparent: true,
      opacity: 0,
      blending: AdditiveBlending,
      depthWrite: false,
    })
    lineMats.push(lineMat)
    root.add(new LineSegments(lineGeom, lineMat))
  }

  let pointerX = 0
  let pointerY = 0
  let targetX = 0
  let targetY = 0
  let raf = 0
  let visible = true
  let pageVisible = document.visibilityState === 'visible'
  let lineReveal = options.reducedMotion ? 1 : 0
  const clockStart = performance.now()

  const onPointer = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.35
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * -0.22
  }

  const resize = () => {
    const parent = canvas.parentElement
    const width = parent?.clientWidth || window.innerWidth
    const height = parent?.clientHeight || window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, options.isMobile ? 1.25 : 1.5)
    renderer.setPixelRatio(dpr)
    renderer.setSize(width, height, false)
    camera.aspect = width / Math.max(height, 1)
    camera.updateProjectionMatrix()
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      visible = Boolean(entry?.isIntersecting)
    },
    { threshold: 0.05 },
  )
  observer.observe(canvas)

  const onVisibility = () => {
    pageVisible = document.visibilityState === 'visible'
  }

  const tick = () => {
    raf = requestAnimationFrame(tick)
    if (!visible || !pageVisible) return

    const t = (performance.now() - clockStart) / 1000
    pointerX += (targetX - pointerX) * 0.04
    pointerY += (targetY - pointerY) * 0.04

    if (!options.reducedMotion) {
      root.rotation.y = pointerX + Math.sin(t * 0.12) * 0.08
      root.rotation.x = pointerY + Math.cos(t * 0.1) * 0.03
      root.position.y = Math.sin(t * 0.18) * 0.05
      lineReveal = Math.min(1, lineReveal + 0.006)
      lineMats.forEach((mat, i) => {
        mat.opacity = 0.18 + lineReveal * (0.28 - i * 0.02)
      })
      pointsMats.forEach((mat, i) => {
        mat.opacity = 0.7 + Math.sin(t * 0.4 + i) * 0.1
        mat.size = (options.isMobile ? 0.16 : 0.22) + Math.sin(t * 0.3 + i) * 0.02
      })
    } else {
      root.rotation.set(0, 0, 0)
      lineMats.forEach((mat) => {
        mat.opacity = 0.28
      })
      pointsMats.forEach((mat) => {
        mat.opacity = 0.45
      })
    }

    renderer.render(scene, camera)
  }

  resize()
  window.addEventListener('resize', resize, { passive: true })
  if (!options.reducedMotion) {
    window.addEventListener('pointermove', onPointer, { passive: true })
  }
  document.addEventListener('visibilitychange', onVisibility)
  tick()

  return {
    dispose: () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
      layerGeoms.forEach((geom) => geom.dispose())
      lineGeoms.forEach((geom) => geom.dispose())
      pointsMats.forEach((mat) => mat.dispose())
      lineMats.forEach((mat) => mat.dispose())
      glow?.dispose()
      renderer.dispose()
    },
  }
}
