import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          life: Math.random() * 100 + 50
        })
      }
    }

    initParticles()

    // Draw atmospheric grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1
      ctx.setLineDash([5, 15])

      const gridSize = 80
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      ctx.setLineDash([])
    }

    // Draw floating particles
    const drawParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Mouse influence
        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.x -= dx * force * 0.02
          particle.y -= dy * force * 0.02
          particle.opacity = Math.min(particle.opacity + force * 0.3, 1)
        } else {
          particle.opacity = Math.max(particle.opacity - 0.01, 0.1)
        }

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby particles
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx2 = particle.x - otherParticle.x
          const dy2 = particle.y - otherParticle.y
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (distance2 < 100) {
            const opacity = (100 - distance2) / 100 * 0.2
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })
    }

    // Draw cursor glow effect
    const drawCursorGlow = () => {
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 200
      )
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw elements
      drawGrid()
      drawParticles()
      drawCursorGlow()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)'
      }}
    />
  )
}

// Terminal-style Timeline Component
export const HorizontalTimeline = ({ experiences }) => {
  
  const getMonthsFromStart = (dateString) => {
    // Parse different date formats
    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }
    
    // Handle both English and Arabic months if needed
    const match = dateString.match(/(\w+)\s+(\d{4})/)
    if (match) {
      const month = monthMap[match[1]] || 0
      const year = parseInt(match[2])
      
      // Calculate months from January 2024
      const yearOffset = year - 2024
      return yearOffset * 12 + month
    }
    return 0
  }

  const totalMonths = 24 // 2024-2025 (24 months)
  
  const getExperienceBarData = (exp) => {
    let startMonths, endMonths
    
    // Parse period with various separators: " – ", " - ", " to "
    let periodParts = exp.period.split(' – ')
    if (periodParts.length === 1) {
      periodParts = exp.period.split(' - ')
    }
    if (periodParts.length === 1) {
      periodParts = exp.period.split(' to ')
    }
    
    if (periodParts.length === 2) {
      startMonths = getMonthsFromStart(periodParts[0].trim())
      // Handle "Present" in end date
      if (periodParts[1].includes('Present')) {
        endMonths = totalMonths
      } else {
        endMonths = getMonthsFromStart(periodParts[1].trim())
      }
    } else {
      startMonths = getMonthsFromStart(exp.period)
      endMonths = startMonths + 1 // Default to 1 month if only one date
    }
    
    // Handle "Present" or current status
    if (exp.status === 'current' || exp.period.includes('Present')) {
      endMonths = totalMonths
    }
    
    const left = Math.max(0, (startMonths / totalMonths) * 100)
    const width = Math.max(((endMonths - startMonths) / totalMonths) * 100, 4) // Minimum 4% width
    
    return { left, width: Math.min(width, 100 - left) }
  }

  const getColorForExperience = (exp) => {
    const colors = {
      'Machine Learning Engineer': '#0080ff', // Electric blue
      'Research and Development Engineer': '#0066cc', // Rich blue
      'AI Intern': '#60a5fa', // Medium light blue
      'Student': '#93c5fd', // Soft blue
      'default': '#737373' // Gray for other experiences
    }
    return colors[exp.color] || colors.default
  }

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
          Experience Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Content card */}
                <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-accent-500/50 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-accent-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    
                    {exp.status === 'current' && (
                      <div className="inline-flex items-center px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs font-medium border border-accent-500/30">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-accent-pulse"></div>
                        Current
                      </div>
                    )}
                    
                    {exp.achievements && (
                      <div className="mt-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-accent-400 mr-2">•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {exp.skills && (
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-accent-500/10 text-accent-400 rounded text-xs border border-accent-500/20 hover:bg-accent-500/20 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced Timeline Component with better styling
export const AnimatedTimeline = ({ experiences }) => {
  return (
    <div className="space-y-8">
      <HorizontalTimeline experiences={experiences} />
      
      <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600"></div>
      
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative flex items-start mb-8 last:mb-0"
        >
          {/* Timeline dot */}
          <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-2 border-black z-10">
            {exp.status === 'current' && (
              <div className="absolute inset-1 bg-purple-400 rounded-full animate-purple-pulse"></div>
            )}
          </div>
          
          {/* Timeline content */}
          <div className="ml-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main content - takes up 2 columns on large screens */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight">{exp.title}</h3>
                  {exp.status === 'current' && (
                    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-purple text-white rounded-full text-xs font-medium shadow-lg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-purple-pulse"></div>
                      Current
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap items-center gap-2 text-gray-300">
                    <span className="font-medium text-purple-300">{exp.fullCompanyName || exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{exp.type}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{exp.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
                    <span>{exp.period}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                
                {/* Achievements section with consistent spacing and minimum height */}
                <div className="mb-4 min-h-[2rem]">
                  {exp.achievements.length > 0 ? (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-purple-400 mt-1.5 text-sm flex-shrink-0">▪</span>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="h-4"></div>
                  )}
                </div>
              </div>
              
              {/* Skills section - takes up 1 column on large screens */}
              <div className="lg:col-span-1">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs bg-gray-700/60 text-gray-300 rounded-md border border-gray-600/50 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
              ))}
      </div>
    </div>
  )
} 