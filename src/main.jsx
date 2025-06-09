import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Add error boundary and diagnostic logging
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error)
  document.body.innerHTML += `<div style="color: red; position: fixed; top: 0; left: 0; background: white; padding: 10px; z-index: 10000;">Error: ${e.message}</div>`
})

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason)
  document.body.innerHTML += `<div style="color: red; position: fixed; top: 20px; left: 0; background: white; padding: 10px; z-index: 10000;">Promise Error: ${e.reason}</div>`
})

try {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
  console.log('React app mounted successfully')
} catch (error) {
  console.error('Failed to mount React app:', error)
  document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>App Failed to Load</h1><p>Error: ${error.message}</p></div>`
} 
