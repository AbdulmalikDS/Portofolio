import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedGradientText, RainbowButton } from '../components/ui/modern-theme'
import { HiExternalLink, HiCode, HiChip, HiLightningBolt, HiGlobeAlt, HiDatabase, HiChatAlt, HiTrendingUp, HiAcademicCap } from 'react-icons/hi'

const Projects = () => {
  const content = {
    title: 'Projects',
    subtitle: 'AI/ML Solutions & Innovations',
    intro: {
      title: 'Building Intelligent Systems',
      description: 'A collection of AI and machine learning projects that demonstrate my expertise in NLP, computer vision, and intelligent system design. Each project showcases real-world applications and cutting-edge technologies.'
    },
    featured: {
      title: 'Featured Projects',
      viewAll: 'View All Projects'
    },
    projects: [
      {
        id: 'farqad',
        title: 'Farqad - Financial RAG Chatbot',
        description: 'Farqad is a RAG Based AI-powered financial bilingual chatbot that supports Arabic and English developed to help individuals and organizations in managing their finances.',
        tags: ['RAG', 'Bilingual', 'JavaScript', 'Financial AI', 'NLP'],
        icon: HiChatAlt,
        color: 'primary',
        featured: true,
        metrics: ['Bilingual Support', 'RAG Architecture', 'Financial Domain'],
        tech: 'JavaScript • RAG • Financial AI • Chatbot',
        github: 'https://github.com/AbdulmalikDS/Farqad',
        updated: 'May 25, 2025'
      },
      {
        id: 'quantum-computing-agent',
        title: 'Quantum Computing Research Agent',
        description: 'Advanced AI agent conducting autonomous quantum computing research using Model Context Protocol (MCP). Exploring quantum algorithms, circuit optimization, and quantum machine learning applications.',
        tags: ['Quantum Computing', 'MCP', 'AI Agent', 'Research', 'Quantum ML'],
        icon: HiChip,
        color: 'accent',
        featured: true,
        metrics: ['In Progress', 'MCP Integration', 'Quantum Research'],
        tech: 'MCP • Quantum Computing • AI Agent • Research',
        github: null,
        updated: 'In Progress',
        status: 'in-progress'
      },
      {
        id: 'perceive-ai',
        title: 'PerceiveAI - Sports Accessibility',
        description: 'PerceiveAI is an innovative project aimed at making sports commentary accessible to the deaf and hard-of-hearing community. By leveraging cutting-edge AI technologies, PerceiveAI translates live sports commentary into sign language.',
        tags: ['JavaScript', 'Computer Vision', 'Accessibility', 'Real-time', 'AI'],
        icon: HiLightningBolt,
        color: 'primary',
        featured: true,
        metrics: ['Real-time Translation', 'Accessibility Focus', 'Sports Commentary'],
        tech: 'JavaScript • Computer Vision • AI • Real-time',
        github: 'https://github.com/AbdulmalikDS/PerceiveAI',
        updated: 'Apr 9, 2025'
      },
      {
        id: 'stc-recommendations',
        title: 'STC TV Recommendation System',
        description: 'Recommendation System for STC TV to Recommend movies to users that they might be interested in using machine learning and recommendation algorithms.',
        tags: ['Machine Learning', 'Recommendation System', 'Jupyter Notebook', 'Data Science'],
        icon: HiGlobeAlt,
        color: 'accent',
        featured: false,
        metrics: ['ML-powered', 'Personalized', 'Content Filtering'],
        tech: 'Jupyter Notebook • Machine Learning • Recommendation Systems',
        github: 'https://github.com/AbdulmalikDS/STC-Recommendations-system',
        updated: 'May 10, 2025'
      },
      {
        id: 'aqar-sphere',
        title: 'AqarSphere - House Price Prediction',
        description: 'AqarSphere is a machine learning project that predicts house prices based on various property features using data analysis and visualization techniques. It employs Python libraries like Pandas, NumPy, and more.',
        tags: ['Machine Learning', 'Data Analysis', 'Jupyter Notebook', 'Prediction', 'Real Estate'],
        icon: HiDatabase,
        color: 'primary',
        featured: false,
        metrics: ['ML Prediction', 'Data Visualization', 'Real Estate'],
        tech: 'Jupyter Notebook • Pandas • NumPy • Machine Learning',
        github: 'https://github.com/AbdulmalikDS/AqarSphere',
        updated: 'Apr 16, 2025'
      },
      {
        id: 'dates-classifier',
        title: 'Dates Classifier - CNN Image Classification',
        description: 'This a project for classifying different kind of date images using Convolutional neural network for accurate date variety identification.',
        tags: ['CNN', 'Deep Learning', 'Image Classification', 'Computer Vision', 'Jupyter Notebook'],
        icon: HiChip,
        color: 'accent',
        featured: false,
        metrics: ['CNN Architecture', 'Image Classification', 'Computer Vision'],
        tech: 'Jupyter Notebook • CNN • Deep Learning • Computer Vision',
        github: 'https://github.com/AbdulmalikDS/Dates-Classifier',
        updated: 'Mar 9, 2025'
      },
      {
        id: 'linear-regression-scratch',
        title: 'Linear Regression From Scratch',
        description: 'I implement the linear regression algorithm from scratch. This kind of mathematical implementation helps understand the core concepts of machine learning algorithms.',
        tags: ['Python', 'Machine Learning', 'Mathematical Implementation', 'From Scratch'],
        icon: HiTrendingUp,
        color: 'primary',
        featured: false,
        metrics: ['Mathematical Foundation', 'From Scratch', 'Educational'],
        tech: 'Python • Mathematics • Machine Learning Fundamentals',
        github: 'https://github.com/AbdulmalikDS/Linear-Regression-From-Scratch',
        updated: 'Feb 26, 2025'
      },
      {
        id: 'wae-workshop',
        title: 'WAE x IMSIU Workshop - Mistral AI Chatbot',
        description: 'This project demonstrates the creation of a user-friendly chatbot interface using the Mistral AI large language model for students to implement and learn.',
        tags: ['Jupyter Notebook', 'Mistral AI', 'Educational', 'Chatbot', 'LLM'],
        icon: HiAcademicCap,
        color: 'accent',
        featured: false,
        metrics: ['Educational', 'LLM Integration', 'Workshop'],
        tech: 'Jupyter Notebook • Mistral AI • LLM • Educational',
        github: 'https://github.com/AbdulmalikDS/WAE-X-IMISU-workshop',
        updated: 'Feb 18, 2025'
      },
      {
        id: 'neuro-trading-rl',
        title: 'NeuroTrader - Deep RL Trading Agent',
        description: 'Advanced reinforcement learning trading agent using Deep Q-Networks (DQN) and Policy Gradient methods to autonomously trade cryptocurrency markets with real-time risk management.',
        tags: ['Python', 'Reinforcement Learning', 'DQN', 'PyTorch', 'Trading', 'Finance'],
        icon: HiLightningBolt,
        color: 'accent',
        featured: false,
        metrics: ['Active Research', 'Deep RL Architecture', 'Real-time Trading'],
        tech: 'Python • PyTorch • DQN • PPO • FinRL',
        github: 'https://github.com/AbdulmalikDS/NeuroTrader-RL',
        updated: 'In Progress',
        status: 'in-progress'
      }
    ],
    cta: {
      title: 'Interested in Collaboration?',
      description: 'I\'m always open to discussing new projects, research opportunities, or potential collaborations in AI and machine learning.',
      contact: 'Get in Touch',
      github: 'View on GitHub'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-neutral-900 dark:bg-neutral-800 rounded-lg p-6 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-neutral-700 dark:border-neutral-600 relative"
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
          <div className="inline-flex items-center px-2 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></div>
            Active Research
          </div>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-neutral-100 group-hover:text-orange-300 transition-colors duration-200">
          {project.title}
        </h3>
        
        <div className="flex gap-2">
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-1.5 text-neutral-400 hover:text-orange-400 transition-colors duration-200"
            >
              <HiCode className="w-4 h-4" />
            </motion.a>
          ) : (
            <motion.div
              className="p-1.5 text-neutral-600 cursor-not-allowed"
              title="Repository coming soon"
            >
              <HiCode className="w-4 h-4" />
            </motion.div>
          )}
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-1.5 text-neutral-400 hover:text-orange-400 transition-colors duration-200"
            >
              <HiExternalLink className="w-4 h-4" />
            </motion.a>
          ) : (
            <motion.div
              className="p-1.5 text-neutral-600 cursor-not-allowed"
              title="Repository coming soon"
            >
              <HiExternalLink className="w-4 h-4" />
            </motion.div>
          )}
        </div>
      </div>
      
      <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium bg-neutral-800 dark:bg-neutral-700 text-neutral-300 rounded border border-neutral-600"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2 py-1 text-xs font-medium bg-neutral-800 dark:bg-neutral-700 text-neutral-400 rounded border border-neutral-600">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>

      {project.updated && (
        <div className="text-xs text-neutral-500">
          Updated {project.updated}
        </div>
      )}
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-accent-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative section-padding">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              {/* Animated Badge */}
              <motion.div variants={itemVariants} className="mb-8">
                <AnimatedGradientText className="inline-flex items-center">
                  <HiChip className="w-4 h-4 mr-2" />
                  {content.subtitle}
                </AnimatedGradientText>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-6"
              >
                {content.title}
              </motion.h1>

              {/* Intro Section */}
              <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  {content.intro.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {content.intro.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-12 text-center">
              {content.featured.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {content.projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* All Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.projects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + 3} />
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-100 dark:bg-neutral-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
              {content.cta.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              {content.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:af.alquwayfili@gmail.com"
                className="group px-6 py-3 bg-neutral-800 dark:bg-neutral-200 text-neutral-50 dark:text-neutral-800 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg"
              >
                <HiCode className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                <span>{content.cta.contact}</span>
              </a>
              
              <a href="https://github.com/AbdulmalikDS" target="_blank" rel="noopener noreferrer">
                <RainbowButton>
                  <HiExternalLink className="w-5 h-5 mr-2" />
                  {content.cta.github}
                </RainbowButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects 
