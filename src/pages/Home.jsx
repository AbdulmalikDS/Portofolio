import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnimatedGradientText, RainbowButton } from '../components/ui/modern-theme'
import ExperienceTimeline from '../components/sections/ExperienceTimeline'
import { 
  HiDownload, 
  HiMail, 
  HiChip, 
  HiLightningBolt, 
  HiGlobeAlt, 
  HiAcademicCap,
  HiCode,
  HiStar,
  HiTrendingUp,
  HiSparkles
} from 'react-icons/hi'

const Home = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const content = {
    typewriterText: 'AI/ML Engineer & Researcher',
    badge: 'Available for Opportunities',
    title: 'Abdulmalik Alquwayfili',
    subtitle: 'Building Intelligent Systems for Tomorrow',
    description: 'Senior Information Systems student at IMSIU, specializing in NLP and AI technologies. Currently pursuing Stanford CS234: Reinforcement Learning while working as an AI Developer Intern at Tahakom.',
    cta: {
      contact: 'Get in Touch',
      resume: 'Download Resume',
      projects: 'View Projects'
    },
    experience: {
      title: 'Professional Experience',
      description: 'From industry-leading companies to cutting-edge research, here\'s my journey in AI and machine learning.'
    }
  }

  // Typing animation effect
  useEffect(() => {
    const fullText = content.typewriterText
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

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
              className="text-center max-w-5xl mx-auto"
            >
              {/* Animated Badge */}
              <motion.div variants={itemVariants} className="mb-8">
                <AnimatedGradientText className="inline-flex items-center">
                  <HiSparkles className="w-4 h-4 mr-2 animate-pulse" />
                  {content.badge}
                </AnimatedGradientText>
              </motion.div>

              {/* Typing Animation Badge */}
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-300 dark:border-neutral-600">
                  <HiChip className="w-4 h-4 mr-2 text-primary-500" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {displayedText}
                    <span className="animate-pulse ml-1 text-primary-500">|</span>
                  </span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-7xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 leading-tight"
              >
                {content.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-neutral-600 dark:text-neutral-300 mb-8"
              >
                {content.subtitle}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg text-neutral-600 dark:text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                {content.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <a
                  href="mailto:af.alquwayfili@gmail.com"
                  className="group px-6 py-3 bg-neutral-800 dark:bg-neutral-200 text-neutral-50 dark:text-neutral-800 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg"
                >
                  <HiMail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  <span>{content.cta.contact}</span>
                </a>
                
                <a href="/Portofolio/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <RainbowButton>
                    <HiDownload className="w-5 h-5 mr-2" />
                    {content.cta.resume}
                  </RainbowButton>
                </a>

                <a
                  href="/Portofolio/projects"
                  className="group px-6 py-3 bg-transparent border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <HiCode className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  <span>{content.cta.projects}</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              {content.experience.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {content.experience.description}
            </p>
          </motion.div>
          
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  )
}

export default Home 