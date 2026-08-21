import { useEffect, useRef } from 'react'

/**
 * ResearchVisualCanvas
 * High-performance, lightweight interactive Canvas 2D visualizer
 * Modes: 'proof' (Math/Logic), 'quantum' (Quantum Tensor/Circuit), 'biology' (Lotka-Volterra)
 */
export default function ResearchVisualCanvas({ mode = 'proof', className = '' }) {
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
    let frame = 0

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

    // Data structures for modes
    // 1. Proof Tree (mode: 'proof')
    const proofNodes = [
      { id: 0, x: 0.5, y: 0.15, deps: [] },
      { id: 1, x: 0.3, y: 0.4, deps: [0] },
      { id: 2, x: 0.7, y: 0.4, deps: [0] },
      { id: 3, x: 0.2, y: 0.7, deps: [1] },
      { id: 4, x: 0.5, y: 0.7, deps: [1, 2] },
      { id: 5, x: 0.8, y: 0.7, deps: [2] },
    ]

    // 2. Quantum Tensor Network (mode: 'quantum')
    const tensorNodes = []
    const cols = 4, rows = 2
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        tensorNodes.push({ x: (i + 1) / (cols + 1), y: (j + 1) / (rows + 1) })
      }
    }

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, width, height)
      
      const speed = isHoveredRef.current ? 1.5 : 0.5
      const t = frame * speed

      // ── MODE 1: FORMAL PROOF TREE (Mathematics) ────────────────────────
      if (mode === 'proof') {
        ctx.lineWidth = 1.5
        
        // Draw edges
        proofNodes.forEach(node => {
          node.deps.forEach(depId => {
            const dep = proofNodes[depId]
            
            // Edge pulse animation
            const dist = Math.abs(node.y - dep.y)
            const pulse = (t * 0.02 - dep.y) % 1.5
            const isActive = pulse > 0 && pulse < dist + 0.2
            
            ctx.beginPath()
            ctx.strokeStyle = isActive ? 'rgba(37, 99, 235, 0.6)' : 'rgba(9, 9, 11, 0.1)'
            ctx.moveTo(dep.x * width, dep.y * height)
            ctx.lineTo(node.x * width, node.y * height)
            ctx.stroke()
          })
        })

        // Draw nodes
        proofNodes.forEach(node => {
          const verifyT = (t * 0.02 - node.y) % 1.5
          const isVerified = verifyT > 0 && verifyT < 0.3
          
          ctx.beginPath()
          ctx.fillStyle = isVerified ? '#2563eb' : '#fff'
          ctx.strokeStyle = isVerified ? '#2563eb' : '#a1a1aa'
          ctx.arc(node.x * width, node.y * height, isHoveredRef.current ? 5 : 4, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
        })
      }

      // ── MODE 2: LOTKA-VOLTERRA VECTOR FIELD (Mathematical Biology) ─────
      else if (mode === 'biology') {
        const spacing = 20
        const cols = Math.floor(width / spacing)
        const rows = Math.floor(height / spacing)
        
        ctx.lineWidth = 1
        
        // Center of the limit cycle
        const cx = width / 2
        const cy = height / 2

        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            const x = i * spacing
            const y = j * spacing
            
            // Vector field pointing in a swirling pattern (phase portrait)
            const dx = (y - cy) * 0.5
            const dy = -(x - cx) * 0.5
            
            // Normalize
            const len = Math.sqrt(dx*dx + dy*dy) || 1
            const nx = (dx / len) * (spacing * 0.4)
            const ny = (dy / len) * (spacing * 0.4)
            
            // Flow animation
            const flow = Math.sin(len * 0.05 - t * 0.05)
            const alpha = 0.1 + (flow + 1) * 0.15
            
            ctx.strokeStyle = `rgba(9, 9, 11, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + nx, y + ny)
            ctx.stroke()
            
            // Arrow head
            ctx.fillStyle = ctx.strokeStyle
            ctx.beginPath()
            ctx.arc(x + nx, y + ny, 1, 0, Math.PI*2)
            ctx.fill()
          }
        }

        // Draw a particle orbiting the limit cycle
        if (isHoveredRef.current) {
          const orbitR = Math.min(width, height) * 0.3
          const px = cx + Math.cos(t * 0.02) * orbitR
          const py = cy + Math.sin(t * 0.02) * orbitR * 0.6 // Elliptical
          
          ctx.fillStyle = '#2563eb'
          ctx.beginPath()
          ctx.arc(px, py, 4, 0, Math.PI*2)
          ctx.fill()
        }
      }

      // ── MODE 3: QUANTUM TENSOR NETWORK (Quantum Computing) ──────────────
      else if (mode === 'quantum') {
        ctx.lineWidth = 1.5
        
        // Draw horizontal bonds
        ctx.strokeStyle = 'rgba(9, 9, 11, 0.15)'
        for (let j = 0; j < rows; j++) {
          ctx.beginPath()
          ctx.moveTo(tensorNodes[j].x * width - 20, tensorNodes[j].y * height)
          ctx.lineTo(tensorNodes[cols * rows - rows + j].x * width + 20, tensorNodes[j].y * height)
          ctx.stroke()
        }
        
        // Draw vertical bonds
        for (let i = 0; i < cols; i++) {
          ctx.beginPath()
          ctx.moveTo(tensorNodes[i * rows].x * width, tensorNodes[i * rows].y * height - 20)
          ctx.lineTo(tensorNodes[i * rows + rows - 1].x * width, tensorNodes[i * rows + rows - 1].y * height + 20)
          ctx.stroke()
        }

        // Highlight random bonds (Contraction)
        if (isHoveredRef.current) {
          const activeCol = Math.floor((t * 0.05) % (cols - 1))
          const n1 = tensorNodes[activeCol * rows]
          const n2 = tensorNodes[(activeCol + 1) * rows]
          
          ctx.strokeStyle = 'rgba(37, 99, 235, 0.5)'
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.moveTo(n1.x * width, n1.y * height)
          ctx.lineTo(n2.x * width, n2.y * height)
          ctx.stroke()
        }

        // Draw tensors (nodes)
        tensorNodes.forEach((node, idx) => {
          // Node pulsing
          const pulse = Math.sin(t * 0.05 + idx)
          const size = 6 + pulse * 2
          
          ctx.fillStyle = '#fff'
          ctx.strokeStyle = '#2563eb'
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(node.x * width, node.y * height, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
        })
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
