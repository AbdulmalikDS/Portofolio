import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedGradientText, RainbowButton } from '../components/ui/modern-theme'
import { InteractiveSkills } from '../components/sections/InteractiveSkills'
import { HiDownload, HiMail, HiLocationMarker, HiGlobeAlt, HiChip, HiCode, HiAcademicCap, HiLightningBolt } from 'react-icons/hi'

const About = () => {
  const content = {
    title: 'About Me',
    subtitle: 'Passionate AI/ML Engineer & Researcher',
    intro: {
      title: 'Hello, I\'m Abdulmalik',
      description: 'Senior Information Systems student at IMSIU with a deep passion for artificial intelligence and machine learning. Currently working as an AI Developer Intern at Tahakom. I specialize in NLP technologies and have hands-on experience building intelligent systems that solve real-world problems.'
    },
    background: {
      title: 'Background',
      content: 'Currently pursuing my Bachelor\'s degree in Information Systems at Imam Muhammad ibn Saud Islamic University (IMSIU) while simultaneously advancing my knowledge through Stanford\'s CS234: Reinforcement Learning course. My journey in AI began with a fascination for how machines can understand and process human language, leading me to specialize in Natural Language Processing.'
    },
    expertise: {
      title: 'Technical Expertise',
      skills: [
        { icon: HiChip, name: 'Machine Learning', description: 'BERT, Transformers, NLP Pipelines' },
        { icon: HiCode, name: 'Programming', description: 'Python, JavaScript, SQL, Git' },
        { icon: HiLightningBolt, name: 'AI Frameworks', description: 'TensorFlow, PyTorch, Hugging Face' },
        { icon: HiGlobeAlt, name: 'Cloud Platforms', description: 'Azure ML, Docker, FastAPI' }
      ]
    },
    interests: {
      title: 'Interests & Passions',
      items: [
        'Arabic Natural Language Processing',
        'Reinforcement Learning & Deep RL',
        'MLOps and Model Deployment',
        'AI Ethics and Responsible AI',
        'Tech Education and Knowledge Sharing',
        'Open Source Contributions'
      ]
    },
    cta: {
      title: 'Let\'s Connect',
      description: 'I\'m always excited to discuss AI, collaborate on projects, or share knowledge about machine learning.',
      contact: 'Get in Touch',
      resume: 'Download Resume'
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
                  <HiAcademicCap className="w-4 h-4 mr-2" />
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

      {/* Background Section */}
      <section className="section-padding bg-neutral-100 dark:bg-neutral-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 text-center">
              {content.background.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {content.background.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <InteractiveSkills />
          </motion.div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-12 text-center">
              {content.interests.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.interests.items.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{interest}</span>
                </motion.div>
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
                <HiMail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                <span>{content.cta.contact}</span>
              </a>
              
              <a href="/Portofolio/resume.pdf" target="_blank" rel="noopener noreferrer">
                <RainbowButton>
                  <HiDownload className="w-5 h-5 mr-2" />
                  {content.cta.resume}
                </RainbowButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 