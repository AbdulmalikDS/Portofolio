import React from 'react'
import { HiTrendingUp, HiUsers, HiLightningBolt, HiAcademicCap } from 'react-icons/hi'

const StatsSection = () => {
  const stats = [
    {
      id: 'models',
      icon: HiLightningBolt,
      value: '10+',
      label: 'AI Models Built',
      description: 'BERT-based models with 90%+ accuracy'
    },
    {
      id: 'accuracy',
      icon: HiTrendingUp,
      value: '90%+',
      label: 'Model Accuracy',
      description: 'With <60ms latency performance'
    },
    {
      id: 'impact',
      icon: HiUsers,
      value: '150+',
      label: 'People Impacted',
      description: 'Through AI solutions and workshops'
    },
    {
      id: 'education',
      icon: HiAcademicCap,
      value: '3',
      label: 'Major Roles',
      description: 'At leading tech companies'
    }
  ]

  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={stat.id}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>
                
                <h3 className="text-sm lg:text-base font-semibold text-neutral-700 dark:text-neutral-200 mb-1">
                  {stat.label}
                </h3>
                
                <p className="text-xs lg:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection 
