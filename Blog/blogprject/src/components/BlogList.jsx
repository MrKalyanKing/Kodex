import React from 'react';
import { useBlogs } from '../context/BlogContext';
import BlogCard from './BlogCard';
import { FileQuestion } from 'lucide-react';

const BlogList = () => {
  const { blogs, deleteBlog } = useBlogs();

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="p-6 bg-slate-900/40 rounded-full mb-6">
          <FileQuestion className="w-12 h-12 text-slate-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No blogs found</h3>
        <p className="text-slate-400">Time to share your first story!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onDelete={deleteBlog} />
      ))}
    </div>
  );
};

export default BlogList;
