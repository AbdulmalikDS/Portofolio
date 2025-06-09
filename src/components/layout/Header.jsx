import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-neutral-800 border-b border-neutral-700">
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-neutral-100 hover:text-neutral-300 transition-all duration-300 transform hover:scale-105"
          >
            Abdulmalik Alquwayfili
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  isActive(item.path)
                    ? 'text-neutral-200'
                    : 'text-neutral-300 hover:text-neutral-200'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-200 transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group md:hidden p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-5 h-5 text-neutral-300 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <HiMenuAlt3 className="w-5 h-5 text-neutral-300 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-700 animate-fade-in">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    isActive(item.path)
                      ? 'bg-neutral-700 text-neutral-200'
                      : 'hover:bg-neutral-700 text-neutral-300'
                  }`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 
