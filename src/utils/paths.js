// Utility to get the correct base path for assets
export const getBasePath = () => {
  // In production (GitHub Pages), use /Portofolio/
  // In development, use /
  return import.meta.env.DEV ? '/' : '/Portofolio/'
}

// Utility to get the correct path for public assets
export const getAssetPath = (path) => {
  const basePath = getBasePath()
  return `${basePath}${path.startsWith('/') ? path.slice(1) : path}`
} 