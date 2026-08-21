import { useEffect, useRef } from 'react'

// ── Particle Node ──────────────────────────────────────────────
class Node {
  constructor(canvas) {
    this.reset(canvas)
  }

  reset(canvas) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.r = Math.random() * 1.6 + 0.6
    this.opacity = Math.random() * 0.4 + 0.25
  }

  update(canvas, mouse) {
    // Smooth magnetic attraction & soft repulsion
    if (mouse.x !== null) {
      const dx = this.x - mouse.x
      const dy = this.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 110 && dist > 1) {
        // Soft force
        const force = (110 - dist) / 110
        this.vx += (dx / dist) * force * 0.45
        this.vy += (dy / dist) * force * 0.45
      }
    }

    // Velocity dampening
    this.vx *= 0.98
    this.vy *= 0.98

    this.x += this.vx
    this.y += this.vy

    // Wrap edges with slight margin
    if (this.x < -10) this.x = canvas.width + 10
    if (this.x > canvas.width + 10) this.x = -10
    if (this.y < -10) this.y = canvas.height + 10
    if (this.y > canvas.height + 10) this.y = -10
  }
}

// ── ProfileHeroCanvas ──────────────────────────────────────────
export default function ProfileHeroCanvas({ children, className = '' }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null, pulse: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const NODE_COUNT = 56
    const LINK_DIST = 115

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(dpr, dpr)
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => new Node({ width: rect.width, height: rect.height }))
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, pulse: 1 }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: null, y: null, pulse: 0 }
    }
    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      // Impulse wave on click
      nodesRef.current.forEach((n) => {
        const dx = n.x - mx
        const dy = n.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 1) {
          const impulse = (200 - dist) / 200 * 3
          n.vx += (dx / dist) * impulse
          n.vy += (dy / dist) * impulse
        }
      })
    }

    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)
    container.addEventListener('click', onClick)

    const draw = () => {
      const W = canvas.width / dpr
      const H = canvas.height / dpr

      ctx.clearRect(0, 0, W, H)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update nodes
      nodes.forEach((n) => n.update({ width: W, height: H }, mouse))

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16
            ctx.beginPath()
            ctx.strokeStyle = `rgba(9, 9, 11, ${alpha})`
            ctx.lineWidth = 0.85
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw mouse ambient aura
      if (mouse.x !== null) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120)
        grad.addColorStop(0, 'rgba(59, 130, 246, 0.08)')
        grad.addColorStop(1, 'rgba(59, 130, 246, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)

        if (mouse.x !== null) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            const t = 1 - dist / 100
            ctx.fillStyle = `rgba(37, 99, 235, ${0.4 + t * 0.5})`
          } else {
            ctx.fillStyle = `rgba(9, 9, 11, ${n.opacity})`
          }
        } else {
          ctx.fillStyle = `rgba(9, 9, 11, ${n.opacity})`
        }

        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseLeave)
      container.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden cursor-crosshair ${className}`}>
      {/* Ambient Canvas Layer */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Content Layer */}
      <div className="relative pointer-events-auto" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
