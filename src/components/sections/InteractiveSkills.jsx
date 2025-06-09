import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const InteractiveSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState('programming')
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  const skillsData = {
    en: {
      title: '.skills()',
      categories: {
        programming: {
          name: 'Programming Languages',
          color: '#3b82f6',
          skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'Git', 'CUDA', 'R', 'Rust', 'PHP']
        },
        libraries: {
          name: 'Libraries & Frameworks',
          color: '#10b981',
          skills: ['Transformers', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'NLTK', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'FastAPI', 'OpenAI','Ollama', 'Pydantic', 'LangChain', 'BERT', 'APIs', 'JSON', 'wandb']
        },
        databases: {
          name: 'Databases',
          color: '#8b5cf6',
          skills: ['PostgreSQL', 'MongoDB', 'Qdrant', 'ChromaDB', 'Supabase', 'DBeaver', 'sqlalchemy', 'alembic']
        },
        devops: {
          name: 'DevOps & Environments',
          color: '#f97316',
          skills: ['Linux', 'Ubuntu', 'Docker', 'Conda', 'Notebooks', 'Colab', 'Postman', 'cURL']
        },
        concepts: {
          name: 'AI/ML Concepts',
          color: '#ec4899',
          skills: ['AGI', 'Agentic AI', 'MCPs', 'CNNs', 'RNNs', 'Attention', 'LLMOps', 'MLOps', 'GenAI', 'Quantum Computing']
        }
      }
    }
  }

  const currentData = skillsData['en']
  
  // Get all skills or filtered by category
  const getDisplaySkills = () => {
    if (selectedCategory === 'all') {
      return Object.entries(currentData.categories).flatMap(([key, cat]) => 
        cat.skills.map(skill => ({ skill, category: key, categoryName: cat.name, color: cat.color }))
      )
    }
    const category = currentData.categories[selectedCategory]
    return category.skills.map(skill => ({ skill, category: selectedCategory, categoryName: category.name, color: category.color }))
  }

  const displaySkills = getDisplaySkills()

  // Canvas animation for connecting lines
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)
      
      // Draw subtle connecting lines between skill nodes
      const nodes = document.querySelectorAll('[data-skill-node]')
      if (nodes.length > 1) {
        ctx.strokeStyle = 'rgba(251, 146, 60, 0.1)'
        ctx.lineWidth = 1
        
        nodes.forEach((node, i) => {
          if (i < nodes.length - 1) {
            const nodeRect = node.getBoundingClientRect()
            const nextNodeRect = nodes[i + 1].getBoundingClientRect()
            
            const x1 = nodeRect.left + nodeRect.width / 2 - rect.left
            const y1 = nodeRect.top + nodeRect.height / 2 - rect.top
            const x2 = nextNodeRect.left + nextNodeRect.width / 2 - rect.left
            const y2 = nextNodeRect.top + nextNodeRect.height / 2 - rect.top
            
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        })
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [displaySkills, selectedCategory])

  return (
    <div className="bg-neutral-800/70 backdrop-blur-sm rounded-lg p-6 font-mono transition-colors duration-300 border border-neutral-700/50">
      <div className="text-orange-500 font-bold text-lg mb-6">
        {currentData.title}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(currentData.categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
              selectedCategory === key
                ? 'text-white'
                : 'bg-neutral-700/50 text-neutral-300 hover:bg-neutral-600/50'
            }`}
            style={{
              backgroundColor: selectedCategory === key ? category.color : undefined
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Graph */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />
        
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-8">
          <AnimatePresence mode="wait">
            {displaySkills.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${item.skill}`}
                data-skill-node
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(item.skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`relative p-4 rounded-lg text-center transition-all duration-300 border ${
                    hoveredSkill === item.skill
                      ? 'shadow-lg scale-105 border-white/40' 
                      : 'border-transparent shadow-sm'
                  }`}
                  style={{
                    backgroundColor: hoveredSkill === item.skill ? item.color : `${item.color}20`,
                    borderColor: hoveredSkill === item.skill ? `${item.color}80` : 'transparent'
                  }}
                >
                  {/* Skill Node */}
                  <div
                    className="w-4 h-4 rounded-full mx-auto mb-3 transition-all duration-300"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: hoveredSkill === item.skill ? `0 0 20px ${item.color}60` : 'none'
                    }}
                  />
                  
                  {/* Skill Name */}
                  <div
                    className={`text-sm font-medium transition-colors duration-300 ${
                      hoveredSkill === item.skill ? 'text-white' : 'text-neutral-300'
                    }`}
                  >
                    {item.skill}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {Object.values(currentData.categories).map(category => (
          <div key={category.name} className="flex items-center gap-2 px-3 py-2 bg-neutral-700/30 rounded-lg text-xs">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            <span className="text-neutral-300">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 