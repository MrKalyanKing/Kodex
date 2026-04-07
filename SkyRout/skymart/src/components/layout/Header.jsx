import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingBag, Menu, X, LogOut, Zap } from 'lucide-react';
import { logout } from '../../store/authSlice';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-charcoal/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
            <Zap className="h-5 w-5 text-black fill-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SkyMart</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  isActive ? "text-brand" : "text-gray-400"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Icons & User */}
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink to="/cart" className="relative p-2 text-gray-400 transition-colors hover:text-white">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </NavLink>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-1 pr-3 py-1 sm:flex">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-black uppercase">
                  {user.name.charAt(0)}
                </div>
                <span className="text-xs font-medium text-white">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 transition-colors hover:text-red-500"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')} className="hidden sm:inline-flex">
              Login
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-gray-400 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-charcoal md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-lg font-medium transition-colors",
                      isActive ? "text-brand" : "text-gray-400"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {!isAuthenticated && (
                <Button onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>
                  Login / Register
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
