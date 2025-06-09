import React, { useEffect, useState, useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground, AnimatedTimeline } from '../components/ui/animated-background'
import { InteractiveSkills } from '../components/sections/InteractiveSkills'
import { trackDownload, trackContactForm, trackExternalLink, trackEvent } from '../lib/analytics'

import { 
  HiExternalLink,
  HiMail,
  HiDownload,
  HiPhone,
} from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Portfolio = () => {
  // Custom Cursor Logic
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor'
    document.body.appendChild(cursor)

    const handleMouseMove = (e) => {
      // Only DOM manipulation, no React state updates
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    }

    const handleMouseEnter = () => {
      cursor.classList.add('hover')
    }

    const handleMouseLeave = () => {
      cursor.classList.remove('hover')
    }

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track active section with pure DOM manipulation (no React re-renders)
  useEffect(() => {
    let ticking = false
    let currentSection = 'about'

    const updateNavigation = (activeSection) => {
      // Direct DOM manipulation for navigation highlighting
      const navButtons = document.querySelectorAll('[data-nav-section]')
      navButtons.forEach(button => {
        const section = button.getAttribute('data-nav-section')
        if (section === activeSection) {
          button.className = button.className.replace('text-gray-300 hover:text-white', 'text-white')
        } else {
          button.className = button.className.replace('text-white', 'text-gray-300 hover:text-white')
        }
      })
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['about', 'experience', 'projects', 'contact']
          const scrollPosition = window.scrollY + 100

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                // Only update if section actually changed
                if (currentSection !== section) {
                  currentSection = section
                  updateNavigation(section)
                }
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    // Throttle scroll events
    let scrollTimeout
    const throttledScroll = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        handleScroll()
        scrollTimeout = null
      }, 100)
    }

    // Initial navigation setup
    updateNavigation('about')

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [])

  const content = useMemo(() => ({
    en: {
      nav: {
        about: 'About',
        experience: 'Experience', 
        projects: 'Projects',
        contact: 'Contact'
      },
      about: {
        greeting: 'Hi',
        name: "I'm Abdulmalik Alquwayfili",
        title: 'AI/ML Engineer & Researcher',
        description: `Builder. Explorer. Problem-solver`,
        currentRole: 'AI Developer Intern @Tahakom',
        education: 'Undergrad @IMSIU',
        cta: {
          contact: 'Get in Touch',
          resume: 'Download Resume'
        }
      },
      experience: {
        title: 'Experience',
        experiences: [
          {
            id: 'tahakom-ai',
            title: 'AI Developer Intern',
            company: 'Tahakom',
            fullCompanyName: 'Tahakom · NLP Department',
            type: 'Internship',
            location: 'Riyadh, Saudi Arabia',
            period: 'Jul 2025 - Present',
            duration: 'Ongoing',
            description: 'COOP trainee joining a newly established NLP department, contributing to projects in text and speech processing, generation, and understanding based on team assignments and evolving project priorities.',
            achievements: [],
            skills: ['Natural Language Processing', 'Text Generation', 'Retrieval-Augmented Generation (RAG)', 'Large Language Models (LLMs)', 'Applied Research'],
            status: 'current',
            color: 'accent'
          },
          {
            id: 'stealth-ml',
            title: 'Machine Learning Engineer',
            company: 'Stealth Startup',
            type: 'Part-time',
            location: 'Riyadh, Saudi Arabia',
            period: 'Mar 2025 - May 2025',
            duration: '3 months',
            description: 'Redesigned existing NLP processes by replacing manual tasks with automated pipelines powered by BERT architectures.',
            achievements: [
              'Trained, fine-tuned, and evaluated 10+ open-source BERT-based models (e.g., CAMeL BERT, AraBERT), achieving over 90% accuracy with <60ms latency',
              'Developed and deployed advanced machine learning models for sentiment analysis, sarcasm detection, and dialect classification in Arabic',
              'Built scalable, AI-powered analytics systems that deliver actionable insights from unstructured text'
            ],
            skills: ['Strategy', 'BERT ', 'Natural Language Processing', 'Fine-tuning', 'Data Analytics', 'Model Optimization', 'FastAPI'],
            status: 'done',
            color: 'dark'
          },
          {
            id: 'wae-rd',
            title: 'Research And Development Engineer',
            company: 'Wae',
            type: 'Part-time',
            location: 'Hybrid',
            period: 'Nov 2024 - Mar 2025',
            duration: '5 months',
            description: 'Focused on AI research and educational initiatives, bridging theory and practice.',
            achievements: [
              'Designed, developed, and deployed AI-based solutions for hands-on workshops and internal tools',
              'Directly impacted over 150 employees and 50+ students through educational initiatives',
              'Contributed to educational and technical content bridging AI theory and practice'
            ],
            skills: ['AI Research', 'Project Management', 'Workshop Design', 'Documentation'],
            status: 'done',
            color: 'primary'
          },
          {
            id: 'microsoft-ai',
            title: 'Software Developer - Artificial Intelligence',
            company: 'Microsoft',
            type: 'Internship',
            location: 'Remote',
            period: 'Jul 2024 - Jul 2024',
            duration: '1 mo',
            description: 'Developed and deployed AI solutions using Azure Machine Learning and Custom Vision.',
            achievements: [
              'Developed and deployed an AI model using Azure Machine Learning for intelligent platform services',
              'Built an AI-powered computer vision model using Custom Vision to recognize and classify images',
              'Conducted data preprocessing and feature engineering for predictive analytics solutions'
            ],
            skills: ['Azure Machine Learning', 'Computer Vision', 'Data Preprocessing', 'Feature Engineering'],
            status: 'done',
            color: 'secondary'
          }
        ]
      },
      projects: {
        title: 'Projects',
        subtitle: 'Featured Work & Open Source Contributions',
        projects: [
          {
            id: 'farqad',
            title: 'Farqad',
            description: 'A bilingual financial RAG chatbot built using ALLaM, LangChain, Qdrant, and FastAPI for intelligent financial conversations.',
            tags: ['LangChain', 'ALLaM', 'RAG', 'FastAPI', 'Ollama', 'Qdrant', 'Docker'],
            github: 'https://github.com/AbdulmalikDS/Farqad',
            featured: true
          },
          {
            id: 'neuro-trading-rl',
            title: 'NeuroTrader - Deep RL Trading Agent',
            description: 'Advanced reinforcement learning trading agent using Deep Q-Networks and Policy Gradient methods for autonomous cryptocurrency trading with real-time risk management.',
            tags: ['Python', 'Reinforcement Learning', 'DQN', 'PyTorch', 'Trading'],
            github: 'https://github.com/AbdulmalikDS/NeuroTrader-RL',
            featured: true,
            status: 'in-progress'
          },
          {
            id: 'perceive-ai',
            title: 'PerceiveAI',
            description: 'Real-time AI system that translates live sports commentary to sign language via animated avatars, making sports accessible for the deaf community.',
            tags: ['JavaScript', 'Computer Vision', 'SigML', 'CWASA', 'Speech Recognition', 'NLP'],
            github: 'https://github.com/AbdulmalikDS/PerceiveAI',
            featured: true
          },
          {
            id: 'quantum-research',
            title: 'Quantum Computing Security Research Agent',
            description: 'Advanced research agent leveraging Model Context Protocol (MCP) for quantum computing security research and cryptographic analysis.',
            tags: ['Python', 'Quantum Computing', 'MCP', 'Security Research', 'Cryptography'],
            github: null,
            featured: true,
            status: 'in-progress'
          },
          {
            id: 'stc-recommendations',
            title: 'STC TV Recommendation System',
            description: 'Recommendation system for STC TV to suggest movies to users who might be interested using machine learning.',
            tags: ['Machine Learning', 'Recommendation System', 'Google Colab', 'Data Science', 'KNN'],
            github: 'https://github.com/AbdulmalikDS/STC-Recommendations-system'
          },
          {
            id: 'aqar-sphere',
            title: 'AqarSphere - Housing Price Prediction',
            description: 'Machine learning project that predicts housing prices based on various property features using advanced algorithms.',
            tags: ['Machine Learning', 'Data Analysis', 'Google Colab', 'GPU optimization', 'Real Estate', 'XGBoost'],
            github: 'https://github.com/AbdulmalikDS/AqarSphere'
          }
        ]
      },
      contact: {
        title: 'Contact',
        description: "I am always on the lookout for new challenges and opportunities to learn and grow. If you have a project or idea that you think I could help with, I would love to hear from you. Please feel free to get in touch via the contact button below or through any of the social media links.",
        cta: 'Say Hello!'
      }
    }
  }), [])

  const currentContent = content['en']

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: '#0a0a0a95', borderColor: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Status and social */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 rounded-full animate-pulse bg-green-400"></div>
              <span className="text-gray-300 font-medium">Available for opportunities</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">Riyadh, SA</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/abdulmalikDs"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulmalik-alquwayfili-0405792a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {Object.entries(currentContent.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  data-nav-section={key}
                  className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

  const AboutSection = () => (
    <section id="about" className="min-h-screen text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-gray-300 text-lg font-medium">
                {currentContent.about.greeting}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight text-white">
              {currentContent.about.name}
            </h1>
            
            <p className="text-xl text-gray-100 mb-12 font-light">
              {currentContent.about.title}
            </p>
            
            <div className="text-2xl md:text-3xl font-bold text-gray-200 mb-8 tracking-wide">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-extrabold">
                Builder. Voyager. Problem-solver.
              </span>
            </div>

            <div className="max-w-3xl">
              
              <div className="space-y-2 mb-8">
                <p className="text-gray-100">
                  {currentContent.about.currentRole}
                </p>
                <p className="text-gray-100">
                  {currentContent.about.education}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                  <a
                    href="mailto:af.alquwayfili@gmail.com"
                    onClick={() => trackContactForm('email')}
                    className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-white hover:text-black text-white rounded-lg transition-all duration-200 shadow-lg"
                  >
                    <HiMail className="w-5 h-5 mr-2" />
                    {currentContent.about.cta.contact}
                  </a>
                  
                  <a
                    href="/Portofolio/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackDownload('resume.pdf')}
                    className="inline-flex items-center px-6 py-3 border border-gray-500 text-gray-200 hover:bg-white hover:text-black rounded-lg transition-all duration-200"
                  >
                    <HiDownload className="w-5 h-5 mr-2" />
                    {currentContent.about.cta.resume}
                  </a>
              </div>

              {/* Interactive Skills Section */}
              <div className="pt-8">
                <InteractiveSkills />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )

  const ExperienceSection = () => (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Experience
          </h2>
          
          <div className="text-white text-lg mb-8 font-mono">
            .timeline()
          </div>
          
          {/* Compact Timeline */}
          <div className="relative mb-12">
            {/* Years */}
            <div className="flex justify-between items-center mb-3 text-gray-400 font-mono text-xs">
              <span>2024</span>
              <span>2025</span>
            </div>
            
            {/* Single Timeline Bar */}
            <div className="relative bg-gray-800 rounded-full h-3 mb-4">
              {/* Microsoft - Green */}
              <motion.div
                className="absolute h-full bg-green-500 rounded-full"
                style={{ left: '15%', width: '8%' }}
                initial={{ width: 0 }}
                whileInView={{ width: '8%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              {/* Wae - Blue */}
              <motion.div
                className="absolute h-full bg-blue-500 rounded-full"
                style={{ left: '35%', width: '25%' }}
                initial={{ width: 0 }}
                whileInView={{ width: '25%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              {/* Stealth - Gray */}
              <motion.div
                className="absolute h-full bg-gray-400 rounded-full"
                style={{ left: '65%', width: '15%' }}
                initial={{ width: 0 }}
                whileInView={{ width: '15%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              
              {/* Tahakom - Purple/Current */}
              <motion.div
                className="absolute h-full bg-purple-500 rounded-full"
                style={{ left: '85%', width: '15%' }}
                initial={{ width: 0 }}
                whileInView={{ width: '15%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap gap-6 text-xs justify-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Tahakom</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                <span className="text-gray-300">Stealth Startup</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Wae</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Microsoft</span>
              </div>
            </div>
          </div>
          
          {/* Vertical Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {currentContent.experience.experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-4 shadow-lg ${
                      exp.status === 'current' 
                        ? 'bg-white border-gray-600' 
                        : 'bg-gray-400 border-gray-600'
                    }`}
                    whileHover={{
                      scale: 1.5,
                      boxShadow: `0 0 20px ${exp.status === 'current' ? '#ffffff' : '#9ca3af'}60`
                    }}
                    animate={exp.status === 'current' ? {
                      boxShadow: [
                        '0 0 0 0 rgba(255, 255, 255, 0.7)',
                        '0 0 0 10px rgba(255, 255, 255, 0)',
                        '0 0 0 0 rgba(255, 255, 255, 0.7)'
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Experience Card */}
                  <motion.div
                    className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:border-gray-500 hover:bg-gray-900/80"
                    whileHover={{
                      boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="mb-2 md:mb-0">
                        <div className="flex items-center mb-2">
                          {exp.status === 'current' && (
                            <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                          )}
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          {exp.status === 'current' && (
                            <span className="ml-3 px-2 py-1 bg-white text-black text-xs font-medium rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 font-medium">
                          {exp.fullCompanyName || exp.company}
                        </p>
                        <div className="flex items-center text-sm mt-1 text-gray-400">
                          <span>{exp.type}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-gray-300 font-medium">{exp.period}</p>
                        <p className="text-gray-500 text-sm">{exp.duration}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-gray-300">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                              className="flex items-start text-sm text-gray-300"
                            >
                              <span className="mr-2 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Skills */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm">
                        SKILLS & TECHNOLOGIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs rounded-full border transition-all duration-200 bg-gray-800 text-gray-200 border-gray-600 hover:bg-white hover:text-black hover:border-white"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )

  const ProjectsSection = () => (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {currentContent.projects.title}
          </h2>
          <p className="text-gray-300 mb-12">
            {currentContent.projects.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.projects.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 50px rgba(135, 206, 235, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="border rounded-lg p-8 transition-all duration-300 relative group cursor-pointer"
                style={{
                  backgroundColor: '#1a1a1a80',
                  borderColor: '#2a2a2a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#87ceeb';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2a2a2a';
                  e.currentTarget.style.backgroundColor = '#1a1a1a80';
                }}
              >
                {project.featured && (
                  <motion.div 
                    className="absolute -top-2 -right-2"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <div className="text-xs px-3 py-1.5 bg-white text-black rounded-full shadow-lg font-medium">
                      Featured
                    </div>
                  </motion.div>
                )}
                
                {project.status === 'in-progress' && (
                  <motion.div 
                    className="absolute -top-2 -right-2"
                    animate={{ 
                      boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0.7)", "0 0 0 10px rgba(255, 255, 255, 0)"] 
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-800 text-white rounded-full text-xs font-medium shadow-lg">
                      <motion.div 
                        className="w-2 h-2 bg-white rounded-full mr-2"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="font-semibold">Active Research</span>
                    </div>
                  </motion.div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <motion.h3 
                    className="text-xl font-light mb-2 transition-colors duration-300 text-white"
                    whileHover={{ color: '#ffffff' }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 opacity-0 group-hover:opacity-100 text-gray-400"
                        whileHover={{ 
                          color: '#ffffff',
                          scale: 1.2,
                          rotate: 12 
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-sm mb-6 leading-relaxed text-gray-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#ffffff',
                        color: '#000000'
                      }}
                      className="px-3 py-1 text-xs rounded-full border transition-all duration-200 cursor-pointer bg-gray-800 text-gray-200 border-gray-600 hover:border-white"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Hover effect - soul essence particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* More Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                More Projects
              </h3>
              <p className="text-gray-300 mb-6">
                Explore more of my work and open-source contributions on GitHub
              </p>
              <a
                href="https://github.com/abdulmalikDs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 border border-gray-700/50 hover:border-gray-600"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View All Projects
                <HiExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )

  const ContactSection = () => (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {currentContent.contact.title}
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            {currentContent.contact.description}
          </p>
          
          <a
            href="mailto:af.alquwayfili@gmail.com"
            onClick={() => trackContactForm('email_contact_section')}
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-lg font-medium transition-all duration-200 text-lg shadow-lg"
          >
            {currentContent.contact.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer className="border-t border-gray-700 bg-gray-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Contact Info */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-gray-300">
              <HiMail className="w-5 h-5 text-gray-400" />
              <a 
                href="mailto:af.alquwayfili@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                af.alquwayfili@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <HiPhone className="w-5 h-5 text-gray-400" />
              <a 
                href="tel:+966554767376"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                +966 554 767 376
              </a>
            </div>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/abdulmalikDs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('https://github.com/abdulmalikDs')}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/abdulmalik-alquwayfili-0405792a0/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('https://www.linkedin.com/in/abdulmalik-alquwayfili-0405792a0/')}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom line - Copyright */}
        <div className="border-t border-gray-700 py-4">
          <div className="text-center space-y-1">
            <p className="text-gray-300 text-sm">
              © 2025 Abdulmalik Alquwayfili. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Inspired by Hollow Knight 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen text-white relative" style={{ backgroundColor: '#0a0a0a' }}>
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default Portfolio 