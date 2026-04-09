import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlogs } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
import { ChevronLeft, Loader2 } from 'lucide-react';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById, updateBlog } = useBlogs();

  const blog = getBlogById(id);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-brand-primary" />
        <p>Loading blog post...</p>
      </div>
    );
  }

  const handleUpdate = (data) => {
    updateBlog(id, data);
    navigate('/');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        <BlogForm
          title="Refine Your Story"
          initialData={blog}
          onSubmit={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Edit;
