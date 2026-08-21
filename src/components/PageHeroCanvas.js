import { useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────
// PageHeroCanvas
// Renders a multi-layer flowing sine wave animation as an ambient
// background behind the page hero title block.
//
// Design intent:
//   • Very subtle — text must remain fully legible at all times
//   • Three wave layers with different freq / phase / speed
//   • Layer 1-2: near-black (zinc-900) at very low opacity → "graph trace"
//   • Layer 3: accent blue at an even lower opacity → barely perceptible tint
//   • Slow, dreamlike motion — not distracting, just alive
// ─────────────────────────────────────────────────────────────────

const WAVES = [
  // { freq (cycles across width), amp (fraction of height), speed (rad/frame), phase, lineWidth, rgba }
  { freq: 2.2, amp: 0.18, speed: 0.007, phase: 0, lineWidth: 1.1, rgba: '9,9,11', opacity: 0.10 },
  { freq: 3.5, amp: 0.11, speed: -0.011, phase: Math.PI * 0.7, lineWidth: 0.8, rgba: '9,9,11', opacity: 0.065 },
  { freq: 1.4, amp: 0.22, speed: 0.005, phase: Math.PI * 1.4, lineWidth: 1.4, rgba: '59,130,246', opacity: 0.055 },
]

export default function PageHeroCanvas({ children, className = '' }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animRef = useRef(null)
  const tRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const W = rect.width
      const H = rect.height
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      tRef.current += 1
      const t = tRef.current

      const W = canvas.width / dpr
      const H = canvas.height / dpr

      ctx.clearRect(0, 0, W, H)

      // Each wave sits in the lower 55% of the hero so it never
      // collides with the eyebrow or title text.
      const baselineY = H * 0.72

      WAVES.forEach((wave) => {
        ctx.beginPath()
        ctx.lineWidth = wave.lineWidth
        ctx.strokeStyle = `rgba(${wave.rgba}, ${wave.opacity})`

        for (let px = 0; px <= W; px += 2) {
          const x = px
          const theta = (px / W) * Math.PI * 2 * wave.freq + t * wave.speed + wave.phase
          const y = baselineY + Math.sin(theta) * (H * wave.amp)

          if (px === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.stroke()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Wave canvas layer — behind content */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Content layer */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
