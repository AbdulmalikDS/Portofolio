// Get Google Analytics ID from environment variables or fallback to hardcoded
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-4TXTKW7YQW'

// Check if analytics should be enabled
const isAnalyticsEnabled = () => {
  return typeof window !== 'undefined' && 
         GA_TRACKING_ID && 
         GA_TRACKING_ID.startsWith('G-') && 
         !GA_TRACKING_ID.includes('undefined')
}

// Dynamically load Google Analytics script
const loadGoogleAnalytics = () => {
  if (isAnalyticsEnabled()) {
    // Prevent multiple loads
    if (window.gtag) return
    
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
    
    console.log('Google Analytics loaded with ID:', GA_TRACKING_ID)
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (isAnalyticsEnabled()) {
    // Load GA script first
    loadGoogleAnalytics()
    
    // Small delay to ensure script loads
    setTimeout(() => {
      if (window.gtag) {
        // Configure tracking
        window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
        })
        console.log('Google Analytics initialized')
      }
    }, 100)
  } else {
    console.log('Google Analytics disabled - no valid tracking ID')
  }
}

// Track page views
export const trackPageView = (url, title) => {
  if (isAnalyticsEnabled() && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title || document.title,
      page_location: url || window.location.href,
    })
    console.log('Page view tracked:', url)
  }
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (isAnalyticsEnabled() && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
    console.log('Event tracked:', action, category, label)
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