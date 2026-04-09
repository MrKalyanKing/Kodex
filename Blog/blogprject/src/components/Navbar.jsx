import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusCircle, Home as HomeIcon, LayoutPanelLeft, LogIn, LogOut, User } from 'lucide-react';
import { useBlogs } from '../context/BlogContext';

const Navbar = () => {
  const { user, logout } = useBlogs();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-3xl px-8 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <LayoutPanelLeft className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Kodex
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            <HomeIcon className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Home</span>
          </Link>

          {user?.role === 'author' && (
            <Link
              to="/create"
              className="btn-primary flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">New Post</span>
            </Link>
          )}

          {!user ? (
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-full font-medium border border-slate-700 hover:border-brand-primary hover:text-brand-primary transition-all flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          ) : (
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <div className="flex flex-col items-end hidden md:flex">
                <span className="text-sm font-bold text-white leading-none">{user.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-black">{user.role}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-400/30 transition-all group"
                title="Logout"
              >
                <LogOut className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
