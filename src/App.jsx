import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
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