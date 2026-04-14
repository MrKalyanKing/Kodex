import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize Theme - Immediate execution to prevent flash
(function() {
  const savedTheme = localStorage.getItem('kodex_theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

const root = createRoot(document.getElementById('root'));

window.renderApp = () => {
  root.render(<App />);
};

// Initial render
window.renderApp();

// Listen for hash changes to simulate routing without react-router
window.addEventListener('hashchange', () => {
  window.renderApp();
});
