// Get Google Analytics ID from environment variables
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-4TXTKW7YQW'

// Dynamically load Google Analytics script
const loadGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID.startsWith('G-')) {
    // Load the gtag script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID.startsWith('G-')) {
    // Load GA script first
    loadGoogleAnalytics()
    
    // Configure tracking
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID.startsWith('G-')) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID.startsWith('G-')) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track downloads (like resume)
export const trackDownload = (fileName) => {
  trackEvent('download', 'file', fileName)
}

// Track contact form submissions
export const trackContactForm = (method) => {
  trackEvent('contact', 'form_submission', method)
}

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent('click', 'external_link', url)
}

// Track project views
export const trackProjectView = (projectName) => {
  trackEvent('view', 'project', projectName)
} 