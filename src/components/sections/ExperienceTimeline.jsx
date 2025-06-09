import React from 'react'
import { HiCalendar, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi'
import { cn } from '../../lib/utils'

const ExperienceTimeline = () => {

  const experiences = [
    {
      id: 'tahakom-ai',
      title: 'AI Developer Intern',
      company: 'Tahakom',
      type: 'Internship',
      location: 'Riyadh, Saudi Arabia',
      period: 'Jul 2025 - Present',
      duration: 'Ongoing',
      achievements: [],
      skills: ['AI Development','Natural Language Processing'],
      status: 'current',
      color: 'accent'
    },
    {
      id: 'stealth-ml',
      title: 'Machine Learning Engineer',
      company: 'Stealth',
      type: 'Part-time',
      location: 'Riyadh, Saudi Arabia',
      period: 'Mar 2025 - May 2025',
      duration: '3 months',
      achievements: [
        'Trained, fine-tuned, and evaluated 10+ open-source BERT-based models (e.g., CAMeL BERT, AraBERT), achieving over 90% accuracy with <60ms latency, optimized for real-time applications',
        'Developed and deployed advanced machine learning models for a wide range of NLP tasks, including sentiment analysis, sarcasm detection, dialect classification in Arabic',
        'Leveraged state-of-the-art AI techniques to ensure high-performance and real-time data processing',
        'Built scalable, AI-powered analytics systems that deliver actionable insights from unstructured text, empowering business stakeholders to make fast, data-driven decisions'
      ],
      skills: ['BERT Models', 'Natural Language Processing', 'Arabic Processing', 'Real-time Systems', 'Model Optimization'],
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
      achievements: [
        'Designed, developed, and deployed AI-based solutions for hands-on workshops and internal tools',
        'Directly impacted over 150 employees and 50+ students through educational initiatives',
        'Contributed to educational and technical content bridging AI theory and practice',
        'Researched latest AI tools and technologies to drive innovation'
      ],
      skills: ['AI Research', 'Educational Content', 'Workshop Design', 'Innovation'],
      status: 'done',
      color: 'primary'
    },
    {
      id: 'microsoft-ai',
      title: 'Software Developer - Artificial Intelligence',
      company: 'Microsoft',
      type: 'Internship',
      location: 'Remote',
      period: 'Jul 2024',
      duration: '1 month',
      achievements: [
        'Developed and deployed an AI model using Azure Machine Learning for intelligent platform services',
        'Built AI-powered computer vision model using Custom Vision for image recognition and classification',
        'Conducted data preprocessing and feature engineering for predictive analytics solutions'
      ],
      skills: ['Azure ML', 'Computer Vision', 'Custom Vision', 'Data Engineering'],
      status: 'done',
      color: 'primary'
    }
  ]

  const content = {
    title: 'Professional Experience',
    subtitle: 'My journey in AI and Machine Learning',
  }

  const TimelineDot = ({ status, color }) => {
    const dotClasses = cn(
      'flex size-4 items-center justify-center rounded-full border-2 border-current z-10 bg-neutral-100 dark:bg-neutral-800',
      {
        'border-accent-600 text-accent-600': color === 'accent',
        'border-primary-600 text-primary-600': color === 'primary',
        'border-neutral-400 text-neutral-400': status === 'default',
        'animate-pulse': status === 'current'
      }
    )

    return (
      <div className={dotClasses}>
        <div className={cn(
          'size-2 rounded-full',
          {
            'bg-accent-600': color === 'accent',
            'bg-primary-600': color === 'primary',
            'bg-neutral-400': status === 'default'
          }
        )} />
      </div>
    )
  }

  const TimelineLine = ({ isLast }) => {
    if (isLast) return null
    
    return (
      <div className="absolute left-[7px] top-8 w-0.5 h-full bg-neutral-400 dark:bg-neutral-500" />
    )
  }

  return (
    <div className="py-8">
      <div className="container-max">


        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <div className="flex items-start space-x-6 pb-12 group">
                {/* Timeline Dot and Line */}
                <div className="relative flex-shrink-0">
                  <TimelineDot status={exp.status} color={exp.color} />
                  <TimelineLine isLast={index === experiences.length - 1} />
                </div>

                {/* Content */}
                <div className="flex-grow transform group-hover:scale-105 transition-transform duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mt-1 md:mt-0">
                        <HiCalendar className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-200" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                      <div className="flex items-center text-neutral-500 dark:text-neutral-300">
                        <HiOfficeBuilding className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{exp.type}</span>
                      </div>
                      
                      <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
                        <HiLocationMarker className="w-4 h-4 mr-1 group-hover:bounce transition-all duration-200" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 group-hover:translate-x-1 transition-transform duration-200" style={{transitionDelay: `${achIndex * 50}ms`}}>
                          <span className="text-neutral-400 dark:text-neutral-500 mt-1.5 flex-shrink-0">•</span>
                          <span className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-neutral-300/70 dark:bg-neutral-700/70 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-400/50 dark:border-neutral-600/50 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-neutral-500 dark:text-neutral-300 mb-6 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors duration-200">
            Interested in collaborating? Let's discuss how I can contribute to your next project.
          </p>
          <a
            href="mailto:af.alquwayfili@gmail.com"
            className="group inline-flex items-center space-x-2 px-6 py-3 bg-neutral-600 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-800 rounded-lg hover:bg-neutral-500 dark:hover:bg-neutral-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span>Get in Touch</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTimeline 