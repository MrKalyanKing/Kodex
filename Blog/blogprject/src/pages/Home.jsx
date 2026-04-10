import React from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Insights & Ideas
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Explore the latest thoughts, tasks, and stories from the community.
          </p>
        </header>
        
        <BlogList />
      </div>
    </div>
  );
};

export default Home;
