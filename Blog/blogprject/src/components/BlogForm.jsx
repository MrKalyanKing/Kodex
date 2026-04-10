import React, { useState, useEffect } from 'react';
import { Send, X, AlertCircle } from 'lucide-react';

const BlogForm = ({ onSubmit, initialData, title }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        content: initialData.content || '',
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Both title and content are required.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto glass-card">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Title</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter a catchy title..."
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              setError('');
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Content</label>
          <textarea
            className="input-field min-h-[200px] resize-none"
            placeholder="Tell your story..."
            value={formData.content}
            onChange={(e) => {
              setFormData({ ...formData, content: e.target.value });
              setError('');
            }}
          ></textarea>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="submit"
            className="btn-primary"
          >
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              {initialData ? 'Update Post' : 'Publish Post'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
