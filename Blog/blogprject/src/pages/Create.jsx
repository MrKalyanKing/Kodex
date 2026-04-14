import React from 'react';
import { store } from '../store';
import { ChevronLeft, Send, Image as ImageIcon } from 'lucide-react';

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const blog = {
      title: data.get('title'),
      content: data.get('content'),
      categories: data.get('categories').split(',').map(c => c.trim()),
      author: store.getUser()?.name || 'Anonymous',
      readTime: '3 min read'
    };
    
    store.saveBlog(blog);
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
        <h1 className="heading-primary mb-2">Create New Article</h1>
        <p className="text-slate-500">Draft your latest insights and share them with the world.</p>
      </header>

      <div className="ink-card shadow-lg shadow-slate-200/50">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Article Title</label>
            <input 
              name="title"
              type="text" 
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg font-bold"
              placeholder="The Future of Web Development..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Categories (comma separated)</label>
            <input 
              name="categories"
              type="text" 
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              placeholder="React, Design, Tech"
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
              className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 leading-relaxed resize-none"
              placeholder="Tell your story..."
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button type="button" className="text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm font-medium">
              <ImageIcon className="w-5 h-5" />
              Add Cover Image
            </button>
            <button type="submit" className="btn-blue gap-2 px-8 py-3">
              <Send className="w-4 h-4" />
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
