import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Create = lazy(() => import('./pages/Create'));
const Edit = lazy(() => import('./pages/Edit'));
const Auth = lazy(() => import('./pages/Auth'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />
                
                {/* Author-only routes */}
                <Route 
                  path="/create" 
                  element={
                    <ProtectedRoute roleRequired="author">
                      <Create />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/edit/:id" 
                  element={
                    <ProtectedRoute roleRequired="author">
                      <Edit />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </Suspense>
          </main>
          
          {/* Subtle background glow elements */}
          <div className="fixed top-1/4 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-brand-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;