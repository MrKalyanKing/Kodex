import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="ink-card flex flex-col h-full group border-slate-200 dark:bg-black dark:border-slate-800 transition-colors duration-300">
      <div className="flex flex-wrap gap-2 mb-5">
        {blog.categories?.map(cat => (
          <span key={cat} className="badge bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 font-semibold px-2.5 py-1">
            {cat}
          </span>
        ))}
      </div>

      <a href={`#blog/${blog.id}`} className="block group mb-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
          {blog.title}
        </h3>
      </a>

      <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 line-clamp-3">
        {blog.content.substring(0, 160)}...
      </p>

      <div className="mt-auto">
        <a
          href={`#blog/${blog.id}`}
          className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
