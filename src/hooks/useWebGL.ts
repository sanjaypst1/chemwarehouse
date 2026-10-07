import { useState } from 'react'

function detectWebGL() {
  if (typeof document === 'undefined') return true
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false }) ??
        canvas.getContext('webgl', { failIfMajorPerformanceCaveat: false }),
    )
  } catch {
    return false
  }
}

export function useWebGL() {
  const [supported] = useState(detectWebGL)
  return supported
}
