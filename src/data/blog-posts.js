// Blog posts metadata
// This will be dynamically populated when you add actual blog content

export const blogPosts = [
  {
    id: 'getting-started-with-llms',
    title: 'Getting Started with Large Language Models',
    excerpt: 'A comprehensive guide to understanding and working with Large Language Models in 2024.',
    date: '2024-01-15',
    tags: ['AI', 'LLM', 'NLP', 'Machine Learning'],
    slug: 'getting-started-with-llms',
    published: true,
    featured: true
  },
  {
    id: 'arabic-nlp-challenges',
    title: 'Challenges in Arabic Natural Language Processing',
    excerpt: 'Exploring the unique challenges and solutions in Arabic NLP development.',
    date: '2024-01-10',
    tags: ['Arabic', 'NLP', 'Challenges', 'Research'],
    slug: 'arabic-nlp-challenges',
    published: true,
    featured: false
  },
  {
    id: 'fine-tuning-bert-models',
    title: 'Fine-tuning BERT Models for Domain-Specific Tasks',
    excerpt: 'Step-by-step guide to fine-tuning BERT models for specific domains and use cases.',
    date: '2024-01-05',
    tags: ['BERT', 'Fine-tuning', 'Tutorial', 'Deep Learning'],
    slug: 'fine-tuning-bert-models',
    published: false, // Draft
    featured: false
  }
]

// Helper functions
export const getFeaturedPosts = () => {
  return blogPosts
    .filter(post => post.published && post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getPublishedPosts = () => {
  return blogPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

export const getPostsByTag = (tag) => {
  return blogPosts
    .filter(post => post.published && post.tags.includes(tag))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
} 