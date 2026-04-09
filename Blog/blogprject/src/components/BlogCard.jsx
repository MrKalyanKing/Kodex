import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Trash2, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBlogs } from '../context/BlogContext';

const BlogCard = ({ blog, onDelete }) => {
  const { user } = useBlogs();
  
  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const isAuthor = user?.role === 'author';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass-card group flex flex-col h-full bg-slate-900/20"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formattedDate}</span>
        </div>
        
        {isAuthor && (
          <div className="flex items-center gap-2">
            <Link
              to={`/edit/${blog.id}`}
              className="p-2 rounded-lg hover:bg-brand-primary/10 hover:text-brand-primary transition-colors text-slate-400"
              title="Edit"
            >
              <Edit2 className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onDelete(blog.id)}
              className="p-2 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors text-slate-400"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
        {blog.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {blog.content}
      </p>

      <div className="mt-auto pt-4 border-t border-slate-800/50">
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group/link"
        >
          {isAuthor ? 'Manage Post' : 'Read Full Insights'}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
