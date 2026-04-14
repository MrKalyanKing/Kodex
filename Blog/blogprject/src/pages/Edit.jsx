import React from 'react';
import { store } from '../store';
import { ChevronLeft, Save } from 'lucide-react';

const Edit = ({ blogId }) => {
  const blog = store.getBlogById(blogId);

  if (!blog) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h2>
        <a href="#dashboard" className="text-blue-600 font-medium">Return to Dashboard</a>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const updatedBlog = {
      ...blog,
      title: data.get('title'),
      content: data.get('content'),
      categories: data.get('categories').split(',').map(c => c.trim()),
    };
    
    store.saveBlog(updatedBlog);
    window.location.hash = '#dashboard';
  };

  return (
    <div className="container-custom py-12">
      <a 
        href="#dashboard" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Dashboard
      </a>

      <header className="mb-10">
        <h1 className="heading-primary mb-2">Edit Article</h1>
        <p className="text-slate-500">Refine your message and update your publication.</p>
      </header>

      <div className="ink-card shadow-lg shadow-slate-200/50">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Article Title</label>
            <input 
              name="title"
              type="text" 
              required
              defaultValue={blog.title}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-bold"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Categories (comma separated)</label>
            <input 
              name="categories"
              type="text" 
              required
              defaultValue={blog.categories?.join(', ')}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-bold text-slate-700">Content</label>
              <span className="text-xs text-slate-400">Supports Markdown-like headers (##)</span>
            </div>
            <textarea 
              name="content"
              required
              rows="12"
              defaultValue={blog.content}
              className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 leading-relaxed resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-end pt-6 border-t border-slate-100">
            <button type="submit" className="btn-blue gap-2 px-8 py-3">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
