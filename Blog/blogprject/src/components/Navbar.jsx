import React from 'react';
import { PenTool, LogOut, Moon } from 'lucide-react';
import { store } from '../store';

const Navbar = ({ user }) => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('kodex_theme', isDark ? 'dark' : 'light');
    if (window.renderApp) window.renderApp();
  };

  const handleLogout = () => {
    store.logout();
    window.location.hash = '#home';
  };

  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <nav className="nav-sticky px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="text-blue-600 group-hover:scale-110 transition-transform">
            <PenTool className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">
            <span className="text-blue-600">Kodex</span> <span className="text-pink-500">Writer</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-500 hover:text-indigo-600 transition-colors mr-2"
          >
            {isDarkMode ? <span className="animate-pulse">☀️</span> : <Moon className="w-5 h-5" />}
          </button>
          
          {!user ? (
            <>
              <a href="#auth" className="text-sm font-bold text-slate-600 hover:text-indigo-600 px-4 py-2 transition-colors">Login</a>
              <a href="#auth" className="btn-blue text-sm px-7">Sign Up</a>
            </>
          ) : (
            <div className="flex items-center gap-4">
              {user.role === 'author' && (
                <a href="#dashboard" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Dashboard</a>
              )}
              <div className="h-4 w-[1px] bg-slate-200"></div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-none">{user.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-indigo-500 font-black mt-1">{user.role}</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
