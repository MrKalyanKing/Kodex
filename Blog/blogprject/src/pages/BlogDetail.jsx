import React from 'react';
import { store } from '../store';
import { User, Calendar, Clock, ShieldCheck } from 'lucide-react';

const BlogDetail = ({ blogId }) => {
  const blog = store.getBlogById(blogId);

  if (!blog) {
    return (
      <div className="container-custom text-center py-32">
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Article Not Found</h2>
        <a href="#home" className="btn-primary">Return to Home</a>
      </div>
    );
  }

  const renderContent = (content) => {
    return content.split('\n\n').map((chunk, i) => {
      // Clean markdown symbols from the chunk
      const cleanChunk = chunk.replace(/[#*]{1,3}/g, '').trim();

      if (chunk.startsWith('## ') || chunk.startsWith('### ')) {
        return <h4 key={i} className="text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 tracking-tight">{cleanChunk}</h4>;
      }
      
      if (chunk.startsWith('- ')) {
        return (
          <ul key={i} className="list-disc pl-6 mb-8 space-y-4">
            {chunk.split('\n').filter(line => line.trim()).map((li, j) => {
              const cleanLi = li.replace('- ', '').replace(/\*\*/g, '').trim();
              return (
                <li key={j} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="font-medium">{cleanLi}</span>
                </li>
              );
            })}
          </ul>
        );
      }
      
      return (
        <p key={i} className="mb-8">
          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{cleanChunk}</span>
        </p>
      );
    });
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="container-custom max-w-4xl py-12 md:py-20">

        {/* Title Block - Strictly Left Aligned */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
            {blog.title}
          </h1>

          {/* Meta Info Row */}
          <div className="flex items-center gap-4 py-8 border-y border-slate-100 dark:border-slate-800 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-[#004ecc] flex items-center justify-center text-white shadow-sm">
              <User className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-black text-slate-900 dark:text-white">{blog.author}</span>
                <span className="text-[10px] font-black text-white bg-[#004ecc] px-2 py-0.5 rounded uppercase tracking-widest">Verified Writer</span>
              </div>
              <div className="flex items-center gap-5 text-slate-400 dark:text-slate-500 font-bold text-[11px] uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body - Strictly Left Aligned */}
        <article className="prose-refined max-w-3xl">
          {renderContent(blog.content)}
        </article>

        {/* Footer CTA Card - Narrower and Clean */}
        <div className="mt-24 max-w-2xl mx-auto p-12 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
          <div className="w-14 h-14 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-6 border border-slate-50 dark:border-slate-800">
            <ShieldCheck className="w-7 h-7 text-[#004ecc]" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Stay ahead in the industry</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium text-sm">
            Get the latest insights from Kodex Writer delivered straight<br />to your library.
          </p>
          <button className="bg-[#004ecc] text-white font-black px-10 py-3 rounded-xl text-sm hover:bg-[#003a99] transition-all">
            Follow the Library
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
