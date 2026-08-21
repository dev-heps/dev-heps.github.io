import { useEffect, useRef, useState } from 'react'

// ── Particle Node ──────────────────────────────────────────────
class Node {
  constructor(canvas) {
    this.reset(canvas)
  }

  reset(canvas) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.35
    this.vy = (Math.random() - 0.5) * 0.35
    this.r = Math.random() * 1.5 + 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update(canvas, mouse) {
    // Mouse repulsion
    if (mouse.x !== null) {
      const dx = this.x - mouse.x
      const dy = this.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 90) {
        const force = (90 - dist) / 90
        this.vx += (dx / dist) * force * 0.6
        this.vy += (dy / dist) * force * 0.6
      }
    }

    // Dampen velocity
    this.vx *= 0.97
    this.vy *= 0.97

    this.x += this.vx
    this.y += this.vy

    // Wrap edges
    if (this.x < 0) this.x = canvas.width
    if (this.x > canvas.width) this.x = 0
    if (this.y < 0) this.y = canvas.height
    if (this.y > canvas.height) this.y = 0
  }
}

// ── ProfileHeroCanvas ──────────────────────────────────────────
export default function ProfileHeroCanvas({ children, className = '' }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null })
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const NODE_COUNT = 52
    const LINK_DIST = 110

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

    // Mouse tracking relative to canvas
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: null, y: null }
    }
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)

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
            const alpha = (1 - dist / LINK_DIST) * 0.14
            ctx.beginPath()
            ctx.strokeStyle = `rgba(9, 9, 11, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)

        // Highlight node near mouse
        if (mouse.x !== null) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            const t = 1 - dist / 90
            ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + t * 0.5})`
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
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Ambient Canvas Layer */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Content Layer */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
