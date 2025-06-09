import React from 'react'
import { Link } from 'react-router-dom'
import { HiCalendar, HiClock } from 'react-icons/hi'
import { format } from 'date-fns'

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM dd, yyyy')
  }

  return (
    <article className={`
      bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-300 dark:border-neutral-600 
      hover:shadow-md transition-all duration-200 overflow-hidden
      ${featured ? 'md:col-span-2' : ''}
    `}>
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full"
            >
              {tag}
            </span>
          ))}
          {post.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`
          font-bold text-neutral-800 dark:text-neutral-100 mb-3 line-clamp-2
          ${featured ? 'text-xl md:text-2xl' : 'text-lg'}
        `}>
          <Link 
            to={`/blog/${post.slug}`}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <HiCalendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <HiClock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogCard 
