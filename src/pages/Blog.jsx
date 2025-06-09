import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../components/blog/BlogCard'
import { 
  HiSearch, 
  HiFilter, 
  HiStar, 
  HiClock, 
  HiCollection,
  HiLightningBolt,
  HiPencilAlt,
  HiTrendingUp,
  HiGlobeAlt,
  HiMail,
  HiRss
} from 'react-icons/hi'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const content = {
    title: 'Blog',
    subtitle: 'AI/ML Insights & Tutorials',
    intro: {
      title: 'Exploring the Future of AI',
      description: 'Deep dives into artificial intelligence, machine learning research, industry trends, and practical tutorials. Stay updated with the latest developments in NLP, computer vision, and emerging AI technologies.'
    },
    search: {
      placeholder: 'Search articles...',
      filter: 'Filter by category'
    },
    categories: [
      { id: 'all', name: 'All Articles', icon: HiGlobeAlt },
      { id: 'ai-research', name: 'AI Research', icon: HiLightningBolt },
      { id: 'tutorials', name: 'Tutorials', icon: HiPencilAlt },
      { id: 'industry', name: 'Industry Insights', icon: HiTrendingUp }
    ],
    articles: [
      {
        id: 'arabic-nlp-future',
        title: 'The Future of Arabic NLP: Challenges and Opportunities',
        excerpt: 'Exploring the unique challenges in Arabic natural language processing and the promising developments in Arabic language models like ALLaM and AraBERT.',
        category: 'ai-research',
        readTime: '8 min read',
        date: '2024-12-15',
        tags: ['Arabic NLP', 'Language Models', 'Research'],
        featured: true,
        image: '/api/placeholder/400/250'
      },
      {
        id: 'building-rag-systems',
        title: 'Building Production-Ready RAG Systems',
        excerpt: 'A comprehensive guide to implementing Retrieval-Augmented Generation systems using LangChain, Qdrant, and modern LLMs for real-world applications.',
        category: 'tutorials',
        readTime: '12 min read',
        date: '2024-12-10',
        tags: ['RAG', 'LangChain', 'Tutorial', 'Production'],
        featured: true,
        image: '/api/placeholder/400/250'
      },
      {
        id: 'ai-trends-2025',
        title: 'AI Trends Shaping 2025: From LLMs to Agentic AI',
        excerpt: 'An analysis of emerging AI trends including multimodal models, agentic AI systems, and the evolving landscape of artificial intelligence applications.',
        category: 'industry',
        readTime: '6 min read',
        date: '2024-12-05',
        tags: ['Trends', 'LLMs', 'Agentic AI', 'Future'],
        featured: true,
        image: '/api/placeholder/400/250'
      },
      {
        id: 'bert-fine-tuning',
        title: 'Fine-tuning BERT Models for Arabic Text Classification',
        excerpt: 'Step-by-step guide on fine-tuning BERT-based models like CAMeL BERT and AraBERT for Arabic text classification tasks with practical code examples.',
        category: 'tutorials',
        readTime: '10 min read',
        date: '2024-11-28',
        tags: ['BERT', 'Fine-tuning', 'Arabic', 'Classification'],
        featured: false,
        image: '/api/placeholder/400/250'
      },
      {
        id: 'mlops-best-practices',
        title: 'MLOps Best Practices for Scaling AI Applications',
        excerpt: 'Essential MLOps practices for deploying and maintaining machine learning models in production environments, covering monitoring, versioning, and automation.',
        category: 'industry',
        readTime: '9 min read',
        date: '2024-11-20',
        tags: ['MLOps', 'Production', 'Best Practices', 'Scaling'],
        featured: false,
        image: '/api/placeholder/400/250'
      },
      {
        id: 'reinforcement-learning-intro',
        title: 'Introduction to Reinforcement Learning with Policy Gradients',
        excerpt: 'Understanding the fundamentals of reinforcement learning, focusing on policy gradient methods and their applications in modern AI systems.',
        category: 'ai-research',
        readTime: '15 min read',
        date: '2024-11-15',
        tags: ['Reinforcement Learning', 'Policy Gradients', 'Theory'],
        featured: false,
        image: '/api/placeholder/400/250'
      }
    ],
    stats: {
      totalArticles: '15+ Articles',
      categories: '4 Categories',
      readTime: 'Avg 8 min read'
    },
    cta: {
      title: 'Stay Updated',
      description: 'Get notified about new articles and insights in AI/ML research and development.',
      subscribe: 'Subscribe to Newsletter',
      rss: 'RSS Feed'
    }
  }

  // Filter articles based on category and search term
  const filteredArticles = content.articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const ArticleCard = ({ article, index, featured = false }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-lg dark:hover:shadow-neutral-900/25 transition-all duration-300 transform hover:-translate-y-1 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Article Image */}
      <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-sm">
            {content.categories.find(cat => cat.id === article.category)?.name}
          </span>
        </div>
        {article.featured && (
          <div className="absolute top-4 right-4">
            <HiStar className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mb-3 space-x-4">
          <div className="flex items-center">
            <HiClock className="w-4 h-4 mr-1" />
            {article.readTime}
          </div>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <button className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">
          Read Article
          <motion.span
            className="ml-1"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </button>
      </div>
    </motion.article>
  )

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              {content.subtitle}
            </p>
          </motion.div>

          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              {content.intro.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {content.intro.description}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <HiCollection className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                {content.stats.totalArticles}
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <HiFilter className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                {content.stats.categories}
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <HiClock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                {content.stats.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 mb-12"
          >
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={content.search.placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-neutral-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {content.categories.map((category) => {
                const IconComponent = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                      isActive
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-max">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-8"
            >
              Featured Articles
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-max">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-8"
            >
              Recent Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {content.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-100 transition-all duration-200 font-medium transform hover:scale-105">
                <HiMail className="w-5 h-5 mr-2" />
                {content.cta.subscribe}
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 font-medium transform hover:scale-105">
                <HiRss className="w-5 h-5 mr-2" />
                {content.cta.rss}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog 
