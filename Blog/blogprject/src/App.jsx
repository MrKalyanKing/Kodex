import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Auth from './pages/Auth';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
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