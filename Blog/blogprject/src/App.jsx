import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Create from './pages/Create';
import Edit from './pages/Edit';
import { store } from './store';

function App() {
  const hash = window.location.hash || '#home';
  const user = store.getUser();

  let Page;
  let props = {};

  if (hash === '#home' || hash === '#') {
    Page = Home;
  } else if (hash.startsWith('#blog/')) {
    const id = hash.split('/')[1];
    Page = BlogDetail;
    props = { blogId: id };
  } else if (hash === '#dashboard' || hash === '#create' || hash.startsWith('#edit/')) {
    if (user && user.role === 'author') {
      if (hash === '#dashboard') {
        Page = Dashboard;
      } else if (hash === '#create') {
        Page = Create;
      } else {
        const id = hash.split('/')[1];
        Page = Edit;
        props = { blogId: id };
      }
    } else {
      // Redirect unauthorized users to home
      window.location.hash = '#home';
      return null;
    }
  } else if (hash === '#auth' || hash === '#signup') {
    Page = Auth;
  } else {
    Page = Home;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar user={user} />
      <main className="pt-20 pb-20">
        <Page {...props} user={user} />
      </main>
      
      {/* Refined background accent - Hidden in dark mode for pure black experience */}
      <div className="bg-accents fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 pointer-events-none opacity-[0.03] dark:hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}

export default App;