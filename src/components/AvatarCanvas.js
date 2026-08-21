import { useEffect, useRef, useState } from 'react'

// ── Canvas DW Avatar ───────────────────────────────────────────
// Renders "DW" as an orbital / spinning particle ring with a subtle
// pulsing glow that matches the site's design tokens.

export default function AvatarCanvas({ size = 144 }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const hoverRef = useRef(false)
  const tRef = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const S = size
    canvas.width = S * dpr
    canvas.height = S * dpr
    canvas.style.width = `${S}px`
    canvas.style.height = `${S}px`

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    const cx = S / 2
    const cy = S / 2

    // Orbital ring configuration
    const RINGS = [
      { r: S * 0.34, count: 10, speed: 0.008, phase: 0, dotR: 1.8, opacity: 0.18 },
      { r: S * 0.42, count: 16, speed: -0.005, phase: Math.PI / 3, dotR: 1.4, opacity: 0.12 },
    ]

    const draw = () => {
      tRef.current += 1
      const t = tRef.current
      const isHover = hoverRef.current

      ctx.clearRect(0, 0, S, S)

      // ── Outer glow / pulse ──
      const pulseScale = 1 + Math.sin(t * 0.04) * 0.03
      const glowR = (S * 0.46) * pulseScale
      const grad = ctx.createRadialGradient(cx, cy, glowR * 0.3, cx, cy, glowR)
      grad.addColorStop(0, isHover ? 'rgba(59, 130, 246, 0.10)' : 'rgba(9, 9, 11, 0.06)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      // ── Orbital rings ──
      RINGS.forEach((ring) => {
        const angle = t * ring.speed + ring.phase
        for (let i = 0; i < ring.count; i++) {
          const theta = angle + (Math.PI * 2 * i) / ring.count
          const x = cx + Math.cos(theta) * ring.r
          const y = cy + Math.sin(theta) * ring.r
          ctx.beginPath()
          ctx.arc(x, y, ring.dotR, 0, Math.PI * 2)
          ctx.fillStyle = isHover
            ? `rgba(59, 130, 246, ${ring.opacity * 3})`
            : `rgba(9, 9, 11, ${ring.opacity})`
          ctx.fill()
        }
      })

      // ── Center circle (avatar background) ──
      const circleR = S * 0.3
      ctx.beginPath()
      ctx.arc(cx, cy, circleR, 0, Math.PI * 2)
      ctx.fillStyle = isHover ? 'rgba(239, 246, 255, 0.9)' : 'rgba(244, 244, 245, 0.9)'
      ctx.fill()

      // Thin border ring
      ctx.beginPath()
      ctx.arc(cx, cy, circleR, 0, Math.PI * 2)
      ctx.strokeStyle = isHover ? 'rgba(59, 130, 246, 0.25)' : 'rgba(0, 0, 0, 0.09)'
      ctx.lineWidth = 1
      ctx.stroke()

      // ── "DW" Text ──
      ctx.font = `700 ${S * 0.24}px system-ui, -apple-system, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = isHover ? 'rgba(59, 130, 246, 0.75)' : 'rgba(113, 113, 122, 0.55)'
      ctx.fillText('DW', cx, cy + 1)

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animRef.current)
  }, [mounted, size])

  if (!mounted) {
    // SSR placeholder — same dimensions, matches .profile-mark
    return (
      <div
        aria-hidden="true"
        style={{ width: size, height: size, flexShrink: 0 }}
        className="profile-mark"
      >
        DW
      </div>
    )
  }

  return (
    <canvas
      ref={canvasRef}
      aria-label="Profile avatar"
      style={{ cursor: 'default', flexShrink: 0, borderRadius: '999px' }}
      onMouseEnter={() => { hoverRef.current = true }}
      onMouseLeave={() => { hoverRef.current = false }}
    />
  )
}
