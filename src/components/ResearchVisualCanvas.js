import { useEffect, useRef } from 'react'

/**
 * ResearchVisualCanvas
 * High-performance, lightweight interactive Canvas 2D visualizer
 * Modes: 'lorenz' (Chaos/Math), 'bloch' (Quantum), 'biology' (Biomedical Wave)
 */
export default function ResearchVisualCanvas({ mode = 'lorenz', className = '' }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animRef = useRef(null)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    let width = 0
    let height = 0
    let rotX = 0.3
    let rotY = 0.4
    let frame = 0

    // Lorenz Attractor points precomputation
    let lorenzPoints = []
    if (mode === 'lorenz') {
      let x = 0.1, y = 0, z = 0
      const sigma = 10, rho = 28, beta = 8 / 3
      const dt = 0.008
      for (let i = 0; i < 1800; i++) {
        const dx = sigma * (y - x) * dt
        const dy = (x * (rho - z) - y) * dt
        const dz = (x * y - beta * z) * dt
        x += dx
        y += dy
        z += dz
        lorenzPoints.push({ x: x * 4.2, y: y * 4.2, z: (z - 25) * 4.2 })
      }
    }

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width || 300
      height = rect.height || 180
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseEnter = () => { isHoveredRef.current = true }
    const onMouseLeave = () => { isHoveredRef.current = false }
    container.addEventListener('mouseenter', onMouseEnter)
    container.addEventListener('mouseleave', onMouseLeave)

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const speed = isHoveredRef.current ? 0.02 : 0.006

      // ── MODE 1: LORENZ ATTRACTOR (Mathematics) ────────────────────────
      if (mode === 'lorenz') {
        rotY += speed
        rotX += speed * 0.4

        const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX)

        ctx.lineWidth = 1.1
        ctx.strokeStyle = isHoveredRef.current ? 'rgba(59, 130, 246, 0.75)' : 'rgba(9, 9, 11, 0.35)'
        ctx.beginPath()

        for (let i = 0; i < lorenzPoints.length; i += 2) {
          const p = lorenzPoints[i]
          let x1 = p.x * cosY - p.z * sinY
          let z1 = p.x * sinY + p.z * cosY
          let y1 = p.y * cosX - z1 * sinX
          let z2 = p.y * sinX + z1 * cosX

          const scale = 220 / (220 + z2)
          const px = cx + x1 * scale
          const py = cy + y1 * scale

          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // ── MODE 2: BLOCH SPHERE (Quantum Computing) ─────────────────────
      else if (mode === 'bloch') {
        rotY += speed
        rotX = 0.35

        const radius = Math.min(width, height) * 0.36
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX)

        const project = (x, y, z) => {
          let x1 = x * cosY - z * sinY
          let z1 = x * sinY + z * cosY
          let y1 = y * cosX - z1 * sinX
          let z2 = y * sinX + z1 * cosX
          return { px: cx + x1, py: cy + y1, z: z2 }
        }

        ctx.strokeStyle = 'rgba(9, 9, 11, 0.15)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = 'rgba(9, 9, 11, 0.25)'
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          const pt = project(Math.cos(a) * radius, 0, Math.sin(a) * radius)
          if (a === 0) ctx.moveTo(pt.px, pt.py)
          else ctx.lineTo(pt.px, pt.py)
        }
        ctx.stroke()

        ;[0, Math.PI / 2].forEach((offset) => {
          ctx.beginPath()
          ctx.strokeStyle = 'rgba(9, 9, 11, 0.12)'
          for (let a = 0; a <= Math.PI * 2; a += 0.1) {
            const pt = project(Math.cos(a + offset) * radius, Math.sin(a) * radius, Math.sin(a + offset) * radius)
            if (a === 0) ctx.moveTo(pt.px, pt.py)
            else ctx.lineTo(pt.px, pt.py)
          }
          ctx.stroke()
        })

        ctx.lineWidth = 1.2
        ctx.strokeStyle = 'rgba(9, 9, 11, 0.3)'
        const topPole = project(0, -radius * 1.2, 0)
        const botPole = project(0, radius * 1.2, 0)
        ctx.beginPath()
        ctx.moveTo(topPole.px, topPole.py)
        ctx.lineTo(botPole.px, botPole.py)
        ctx.stroke()

        const theta = Math.PI * 0.32 + Math.sin(frame * 0.02) * 0.2
        const phi = frame * 0.025
        const vx = Math.sin(theta) * Math.cos(phi) * radius
        const vy = -Math.cos(theta) * radius
        const vz = Math.sin(theta) * Math.sin(phi) * radius
        const stateVec = project(vx, vy, vz)

        ctx.strokeStyle = isHoveredRef.current ? '#2563eb' : '#3b82f6'
        ctx.lineWidth = 2.2
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(stateVec.px, stateVec.py)
        ctx.stroke()

        ctx.fillStyle = '#2563eb'
        ctx.beginPath()
        ctx.arc(stateVec.px, stateVec.py, 3.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // ── MODE 3: BIOMEDICAL HARMONIC WAVE (Mathematical Biology) ──────
      else if (mode === 'biology') {
        const lineCount = 4
        for (let l = 0; l < lineCount; l++) {
          ctx.beginPath()
          const alpha = (1 - l / lineCount) * (isHoveredRef.current ? 0.6 : 0.25)
          ctx.strokeStyle = l === 0 ? 'rgba(59, 130, 246, 0.8)' : `rgba(9, 9, 11, ${alpha})`
          ctx.lineWidth = l === 0 ? 1.8 : 0.9

          for (let px = 0; px <= width; px += 3) {
            const xNorm = px / width
            const wave1 = Math.sin(xNorm * Math.PI * 4 + frame * 0.03 + l * 0.6) * 16
            const wave2 = Math.cos(xNorm * Math.PI * 8 - frame * 0.02) * 6
            const pulseCenter = (frame * 0.008) % 1.2 - 0.1
            const distFromPulse = Math.abs(xNorm - pulseCenter)
            const ecgSpike = distFromPulse < 0.05 ? Math.sin((xNorm - pulseCenter) / 0.05 * Math.PI) * -30 : 0

            const py = cy + (wave1 + wave2 + ecgSpike) * (1 - l * 0.15)

            if (px === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
          }
          ctx.stroke()
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mouseenter', onMouseEnter)
      container.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [mode])

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
