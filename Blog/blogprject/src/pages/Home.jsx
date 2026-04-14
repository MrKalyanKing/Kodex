import React from 'react';
import BlogCard from '../components/BlogCard';
import { store } from '../store';

const Home = () => {
  const blogs = store.getBlogs();

  return (
    <div className="container-custom">
      <header className="py-32 text-center mb-24">
        <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.9] dark:text-white">
          <span className="text-blue-600">Kodex</span> <br className="sm:hidden" />
          <span className="text-pink-500">Writer</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-medium antialiased px-4">
          Discover high-impact articles on technology, engineering, and digital craft from a library of verified professional writers.
        </p>
      </header>
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Latest Articles</h2>
        <span className="text-sm font-medium text-slate-400 dark:text-slate-500">{blogs.length} articles</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
