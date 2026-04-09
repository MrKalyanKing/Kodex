import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogs } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
import { ChevronLeft } from 'lucide-react';

const Create = () => {
  const { addBlog } = useBlogs();
  const navigate = useNavigate();

  const handleCreate = (data) => {
    addBlog(data);
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

        <BlogForm title="Share Something New" onSubmit={handleCreate} />
      </div>
    </div>
  );
};

export default Create;
