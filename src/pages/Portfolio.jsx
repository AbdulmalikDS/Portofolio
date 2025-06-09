import React, { useEffect, useState, useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground, AnimatedTimeline } from '../components/ui/animated-background'
import { InteractiveSkills } from '../components/sections/InteractiveSkills'

import { 
  HiExternalLink,
  HiMail,
  HiDownload,
  HiPhone,
} from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about')

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track active section on scroll with throttling - TEMPORARILY DISABLED
  // useEffect(() => {
  //   let ticking = false

  //   const handleScroll = () => {
  //     if (!ticking) {
  //       requestAnimationFrame(() => {
  //         const sections = ['about', 'experience', 'projects', 'contact']
  //         const scrollPosition = window.scrollY + 100

  //         for (const section of sections) {
  //           const element = document.getElementById(section)
  //           if (element) {
  //             const { offsetTop, offsetHeight } = element
  //             if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
  //               // Only update if the section actually changed
  //               setActiveSection(prev => prev !== section ? section : prev)
  //               break
  //             }
  //           }
  //         }
  //         ticking = false
  //       })
  //       ticking = true
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll, { passive: true })
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

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
        title: '.contact()',
        description: "I am always on the lookout for new challenges and opportunities to learn and grow. If you have a project or idea that you think I could help with, I would love to hear from you. Please feel free to get in touch via the contact button below or through any of the social media links.",
        cta: 'Say Hello!'
      }
    }
  }), [])

  const currentContent = content['en']

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Status and social */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-xs text-neutral-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
              <span className="text-neutral-600">•</span>
              <span>Riyadh, SA</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/abdulmalikDs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulmalik-alquwayfili-0405792a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-400 transition-colors duration-200"
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
                  className="text-sm font-medium transition-colors duration-200 hover:text-orange-400 text-neutral-300"
                >
                  {label}
                </button>
              ))}
            </div>
            
            {/* CTA Button */}
            <a
              href="mailto:af.alquwayfili@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              <HiMail className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Let's Talk</span>
              <span className="sm:hidden">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )

  const AboutSection = () => (
    <section id="about" className="min-h-screen text-neutral-100 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-orange-400 text-lg font-medium">
                {currentContent.about.greeting}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              {currentContent.about.name}
            </h1>
            
            <p className="text-xl text-neutral-400 mb-12 font-light">
              {currentContent.about.title}
            </p>
            
            <div className="text-2xl md:text-3xl font-light text-orange-400 mb-8 tracking-wide">
              Builder. Voyager. Problem-solver.
            </div>
            
            <div className="max-w-3xl">
              
              <div className="space-y-2 mb-8">
                <p className="text-neutral-400">
                  {currentContent.about.currentRole}
                </p>
                <p className="text-neutral-400">
                  {currentContent.about.education}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="mailto:af.alquwayfili@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200"
                >
                  <HiMail className="w-5 h-5 mr-2" />
                  {currentContent.about.cta.contact}
                </a>
                
                <a
                  href="/Portofolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-colors duration-200"
                >
                  <HiDownload className="w-5 h-5 mr-2" />
                  {currentContent.about.cta.resume}
                </a>
              </div>

              {/* Interactive Skills Section */}
              <div className="pt-8 border-t border-neutral-800/50">
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-12">
            .{currentContent.experience.title.toLowerCase()}()
          </h2>
          
          {/* Experience Timeline Container - Minimal design */}
          <div className="space-y-8">
            <AnimatedTimeline 
              experiences={currentContent.experience.experiences} 
            />
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
            .{currentContent.projects.title.toLowerCase()}()
          </h2>
          <p className="text-neutral-400 mb-12">
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
                className="bg-neutral-800/30 rounded-lg p-8 hover:bg-neutral-800/50 transition-all duration-300 relative group"
              >
                {project.featured && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                )}
                
                {project.status === 'in-progress' && (
                  <div className="absolute -top-2 -right-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      <span className="font-semibold">Active Research</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-light text-neutral-100 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-orange-400 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <HiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-neutral-500 rounded-full border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
            <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-8 border border-neutral-700/50">
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">
                More Projects
              </h3>
              <p className="text-neutral-400 mb-6">
                Explore more of my work and open-source contributions on GitHub
              </p>
              <a
                href="https://github.com/abdulmalikDs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-neutral-700/50 hover:bg-orange-500 text-neutral-300 hover:text-white rounded-lg transition-all duration-200 border border-neutral-600/50 hover:border-orange-500"
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8">
            {currentContent.contact.title}
          </h2>
          
          <p className="text-lg text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            {currentContent.contact.description}
          </p>
          
          <a
            href="mailto:af.alquwayfili@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 text-lg"
          >
            {currentContent.contact.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )



  const Footer = () => (
    <footer className="border-t border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Contact Info */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-neutral-300">
              <HiMail className="w-5 h-5 text-orange-400" />
              <a 
                href="mailto:af.alquwayfili@gmail.com"
                className="text-neutral-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                af.alquwayfili@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-neutral-300">
              <HiPhone className="w-5 h-5 text-orange-400" />
              <a 
                href="tel:+966554767376"
                className="text-neutral-300 hover:text-orange-400 transition-colors duration-200 font-medium"
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
                className="p-2 text-neutral-400 hover:text-orange-400 transition-colors duration-200 hover:bg-neutral-800 rounded-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/abdulmalik-alquwayfili-0405792a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-orange-400 transition-colors duration-200 hover:bg-neutral-800 rounded-lg"
                aria-label="LinkedIn"
              >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom line - Copyright */}
        <div className="border-t border-neutral-800 py-4">
          <p className="text-center text-neutral-500 text-sm">
            © 2025 Abdulmalik Alquwayfili. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="relative bg-neutral-900 text-neutral-100 transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* All content with relative positioning to appear above background */}
      <div className="relative z-10">
        <Navigation />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default Portfolio 