// Utility to get the correct base path for assets
export const getBasePath = () => {
  // Check if we're on GitHub Pages (production) or localhost (development)
  if (typeof window !== 'undefined') {
    const isGitHubPages = window.location.hostname === 'abdulmalikds.github.io'
    return isGitHubPages ? '/Portofolio/' : '/'
  }
  // Fallback for SSR or build time - use environment variable
  return import.meta.env.PROD ? '/Portofolio/' : '/'
}

// Utility to get the correct path for public assets
export const getAssetPath = (path) => {
  const basePath = getBasePath()
  return `${basePath}${path.startsWith('/') ? path.slice(1) : path}`
} 