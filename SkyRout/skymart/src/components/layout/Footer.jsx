import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo & About */}
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white uppercase italic">SkyMart</span>
            </NavLink>
            <p className="max-w-xs text-sm text-gray-500">
              SkyMart delivers the latest trends in electronics, clothing, and accessories with a clean and modern user experience. High-quality products, fast shipping, and excellent support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <NavLink to="/" className="text-sm text-gray-500 transition-colors hover:text-brand">Home</NavLink>
              <NavLink to="/shop" className="text-sm text-gray-500 transition-colors hover:text-brand">Shop All</NavLink>
              <NavLink to="/about" className="text-sm text-gray-500 transition-colors hover:text-brand">About Us</NavLink>
              <NavLink to="/contact" className="text-sm text-gray-500 transition-colors hover:text-brand">Contact</NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="text-brand font-bold">LOC:</span>
                <span>123 Sky Street, Tech City, 560001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="text-brand font-bold">TEL:</span>
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-brand cursor-pointer">
                <span className="text-brand font-bold">EMAIL:</span>
                <span>support@skymart.com</span>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Stay Updated</h4>
            <div className="flex gap-4">
              <a href="#" className="text-xs font-bold text-gray-500 transition-colors hover:text-brand">TWITTER</a>
              <a href="#" className="text-xs font-bold text-gray-500 transition-colors hover:text-brand">INSTAGRAM</a>
              <a href="#" className="text-xs font-bold text-gray-500 transition-colors hover:text-brand">GITHUB</a>
            </div>
            <div className="mt-4 flex rounded-lg border border-white/10 bg-white/5 p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-3 py-1.5 text-xs text-white outline-none placeholder:text-gray-600"
              />
              <button className="rounded-md bg-brand px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-brand/90">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} SkyMart. All rights reserved. Designed for excellence. Made by Antigravity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
