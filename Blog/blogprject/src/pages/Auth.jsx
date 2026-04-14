import React from 'react';
import { store } from '../store';
import { Mail, Lock, Pen, ArrowRight, User } from 'lucide-react';

const Auth = () => {
  const hash = window.location.hash;
  const isSignup = hash === '#signup';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    const name = data.get('name');
    const role = data.get('role');
    
    // Clear previous errors
    const errorEl = document.getElementById('auth-error');
    if (errorEl) errorEl.classList.add('hidden');

    // Validation
    if (isSignup) {
      if (!name || name.length < 2) {
        showError("Please enter your full name.");
        return;
      }
      if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
      }
      if (password.length < 6) {
        showError("Password must be at least 6 characters.");
        return;
      }
    }

    if (!email || !email.includes('@')) {
      showError("Please enter a valid email address.");
      return;
    }

    try {
      if (isSignup) {
        store.signup({ name, email, password, role });
      } else {
        store.login({ email, password });
      }
      window.location.hash = '#home';
    } catch (err) {
      showError(err.message);
    }
  };

  const showError = (msg) => {
    const errorEl = document.getElementById('auth-error');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.remove('hidden');
    }
  };

  const selectRole = (role) => {
    // Update hidden input
    const roleInput = document.getElementById('role-input');
    if (roleInput) roleInput.value = role;

    // Update UI classes
    document.querySelectorAll('.role-card').forEach(card => {
      card.classList.remove('selected');
    });
    const selectedCard = document.getElementById(`role-${role}`);
    if (selectedCard) selectedCard.classList.add('selected');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-md w-full">
        {/* Logo Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 bg-[#004ecc] rounded-full flex items-center justify-center shadow-lg">
            <Pen className="text-white w-7 h-7" />
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSignup ? 'Create an Account' : 'Welcome Back'}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400 font-medium">
            {isSignup ? 'Join Kodex Writer to start reading or writing' : 'Sign in to your account to continue'}
          </p>
        </div>

        {/* Error Message Section */}
        <div id="auth-error" className="hidden mb-6 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg text-red-600 dark:text-red-400 text-sm font-bold text-center">
        </div>

        {/* The Card */}
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div>
                <label className="label-field dark:text-slate-300">Name</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder="John Doe"
                  className="input-field dark:bg-black dark:border-slate-700 dark:text-white"
                />
              </div>
            )}

            <div>
              <label className="label-field dark:text-slate-300">Email</label>
              <input 
                name="email"
                type="email" 
                placeholder="you@example.com"
                className="input-field dark:bg-black dark:border-slate-700 dark:text-white"
              />
            </div>

            <div>
              <label className="label-field dark:text-slate-300">Password</label>
              <input 
                name="password"
                type="password" 
                placeholder={isSignup ? "Create a password" : "Enter your password"}
                className="input-field dark:bg-black dark:border-slate-700 dark:text-white"
              />
            </div>

            {isSignup && (
              <>
                <div>
                  <label className="label-field dark:text-slate-300">Confirm Password</label>
                  <input 
                    name="confirmPassword"
                    type="password" 
                    placeholder="Confirm your password"
                    className="input-field dark:bg-black dark:border-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="label-field dark:text-slate-300">Account Type</label>
                  <input type="hidden" id="role-input" name="role" defaultValue="reader" />
                  <div className="flex gap-4 mt-2">
                    <div 
                      id="role-reader"
                      onClick={() => selectRole('reader')}
                      className="role-card selected group dark:border-slate-700"
                    >
                      <User className="mx-auto w-6 h-6 mb-2 text-slate-400 group-hover:text-[#004ecc]" />
                      <p className="font-bold text-slate-900 dark:text-white text-sm">Reader</p>
                      <p className="text-[10px] text-slate-500">Read articles</p>
                    </div>
                    <div 
                      id="role-author"
                      onClick={() => selectRole('author')}
                      className="role-card group dark:border-slate-700"
                    >
                      <Pen className="mx-auto w-6 h-6 mb-2 text-slate-400 group-hover:text-[#004ecc]" />
                      <p className="font-bold text-slate-900 dark:text-white text-sm">Author</p>
                      <p className="text-[10px] text-slate-500">Write & publish</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="w-full btn-primary !rounded-lg mt-6 py-3 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/10">
              <span className="text-white font-bold">{isSignup ? 'Create Account' : 'Sign In'}</span>
            </button>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-800 pt-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <a 
                href={isSignup ? '#auth' : '#signup'} 
                onClick={() => {
                  const err = document.getElementById('auth-error');
                  if (err) err.classList.add('hidden');
                }}
                className="ml-2 text-[#004ecc] font-bold hover:underline"
              >
                {isSignup ? 'Sign in' : 'Sign up'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
