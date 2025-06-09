import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid pattern
      const gridSize = 50
      const fadeDistance = 250
      
      // Calculate grid opacity based on distance from mouse
      ctx.strokeStyle = `rgba(251, 146, 60, 0.15)`
      ctx.lineWidth = 0.5
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mousePos.x)
        let opacity = 0.15
        let lineWidth = 0.5
        
        if (distanceFromMouse < fadeDistance) {
          const factor = 1 - (distanceFromMouse / fadeDistance)
          opacity = 0.15 + factor * 0.5 // Stronger interaction
          lineWidth = 0.5 + factor * 1.5 // Dynamic line width
        }
        
        ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        const distanceFromMouse = Math.abs(y - mousePos.y)
        let opacity = 0.15
        let lineWidth = 0.5
        
        if (distanceFromMouse < fadeDistance) {
          const factor = 1 - (distanceFromMouse / fadeDistance)
          opacity = 0.15 + factor * 0.5 // Stronger interaction
          lineWidth = 0.5 + factor * 1.5 // Dynamic line width
        }
        
        ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Add some floating particles for extra effect
      const time = Date.now() * 0.001
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time + i) * 200) + canvas.width / 2
        const y = (Math.cos(time + i * 0.5) * 100) + canvas.height / 2
        
        const distanceFromMouse = Math.sqrt(
          (x - mousePos.x) ** 2 + (y - mousePos.y) ** 2
        )
        
        let size = 2
        let opacity = 0.3
        
        if (distanceFromMouse < 100) {
          const factor = 1 - (distanceFromMouse / 100)
          size += factor * 3
          opacity += factor * 0.4
        }
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(251, 146, 60, ${opacity})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
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
      'accent': '#f97316', // orange-500
      'primary': '#3b82f6', // blue-500  
      'secondary': '#10b981', // emerald-500
      'purple': '#8b5cf6', // violet-500
      'dark': '#1f2937' // gray-800 (dark/black)
    }
    return colors[exp.color] || colors.purple
  }

  return (
    <div className="mb-8">
      <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-6 font-mono">
        <div className="text-orange-400 font-bold text-lg mb-6">
          .timeline()
        </div>
        
        {/* Year markers */}
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="text-neutral-400 text-sm font-bold">2024</div>
          <div className="text-neutral-400 text-sm font-bold">2025</div>
        </div>
        
        {/* Main timeline bar */}
        <div className="relative h-20 bg-gradient-to-r from-neutral-800 via-neutral-750 to-neutral-800 rounded-lg border border-neutral-700 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat"
            }}></div>
          </div>
          
          {/* Year divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-60"></div>
          
          {/* Month markers */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i} className="flex-1 border-r border-neutral-700/30 last:border-r-0">
                {i % 6 === 0 && (
                  <div className="w-full h-full bg-neutral-700/20"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Experience bars with enhanced styling */}
          {experiences.map((exp, index) => {
            const barData = getExperienceBarData(exp)
            return (
              <motion.div
                key={exp.id}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute rounded-lg shadow-lg border border-white/30 overflow-hidden backdrop-blur-sm"
                style={{
                  left: `${barData.left}%`,
                  width: `${barData.width}%`,
                  top: `${6 + index * 14}px`,
                  height: '10px',
                  backgroundColor: getColorForExperience(exp),
                  boxShadow: `0 0 8px ${getColorForExperience(exp)}40`
                }}
                title={`${exp.title} at ${exp.company}`}
              >
                {/* Inner glow effect */}
                <div 
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${getColorForExperience(exp)}40, transparent)`
                  }}
                ></div>
                
                {/* Animated pulse for current jobs */}
                {exp.status === 'current' && (
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1 animate-pulse"
                    style={{ backgroundColor: getColorForExperience(exp) }}
                  ></div>
                )}
              </motion.div>
            )
          })}
        </div>
        
        {/* Legend with improved styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-4 border-t border-neutral-700/50">
          {experiences.map(exp => (
            <div key={exp.id} className="flex items-center space-x-2 p-2 rounded bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors duration-200">
              <div 
                className="w-3 h-3 rounded border border-white/20 shadow-sm"
                style={{ 
                  backgroundColor: getColorForExperience(exp),
                  boxShadow: `0 0 4px ${getColorForExperience(exp)}60`
                }}
              ></div>
              <span className="text-neutral-300 text-xs font-medium">{exp.company}</span>
            </div>
          ))}
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
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>
      
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
          <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-2 border-neutral-900 z-10">
            {exp.status === 'current' && (
              <div className="absolute inset-1 bg-orange-400 rounded-full animate-pulse"></div>
            )}
          </div>
          
          {/* Timeline content */}
          <div className="ml-16 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-6 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main content - takes up 2 columns on large screens */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-neutral-100 leading-tight">{exp.title}</h3>
                  {exp.status === 'current' && (
                    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-medium shadow-lg">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></div>
                      Current
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap items-center gap-2 text-neutral-300">
                    <span className="font-medium text-orange-300">{exp.fullCompanyName || exp.company}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400 text-sm">{exp.type}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400 text-sm">{exp.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 text-neutral-400 text-sm">
                    <span>{exp.period}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-300">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-neutral-300 leading-relaxed mb-4">{exp.description}</p>
                
                {/* Achievements section with consistent spacing and minimum height */}
                <div className="mb-4 min-h-[2rem]">
                  {exp.achievements.length > 0 ? (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-orange-400 mt-1.5 text-sm flex-shrink-0">▪</span>
                          <span className="text-neutral-300 text-sm leading-relaxed">{achievement}</span>
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
                <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs bg-neutral-700/60 text-neutral-300 rounded-md border border-neutral-600/50 backdrop-blur-sm hover:bg-orange-500/20 hover:border-orange-500/30 hover:text-orange-300 transition-all duration-200"
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