import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import { initGA, trackPageView } from './lib/analytics'

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation()
  
  useEffect(() => {
    // Initialize GA on first load
    initGA()
  }, [])
  
  useEffect(() => {
    // Track page views on route changes
    const url = window.location.href
    const title = document.title
    trackPageView(url, title)
  }, [location])
  
  return null
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        {/* Portfolio page without Layout (has its own navigation) */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Other pages with Layout */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App 
