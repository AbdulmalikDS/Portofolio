import React from 'react'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AbdulmalikDS',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdulmalik-alquwayfili-0405792a0/',
      icon: FaLinkedin,
    },
  ]

  const footerText = {
    copyright: '© 2024 Abdulmalik Alquwayfili. All rights reserved.',
    contact: 'Get in touch',
    email: 'af.alquwayfili@gmail.com',
  }

  return (
    <footer className="bg-white/80 dark:bg-neutral-800/50 border-t border-neutral-200/50 dark:border-neutral-700/30 backdrop-blur-sm">
      <div className="container-max px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200">
              {footerText.contact}
            </h3>
            <a
              href={`mailto:${footerText.email}`}
              className="group flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-all duration-300 transform hover:scale-105"
            >
              <HiMail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              <span>{footerText.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                  aria-label={link.name}
                >
                  <IconComponent className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200">
            {footerText.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
