import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlogs } from '../context/BlogContext';
import { User, Mail, Lock, ShieldCheck, PenTool, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('reader');
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Field states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  // Error states
  const [errors, setErrors] = useState({});

  const { signup, login } = useBlogs();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!isLogin && formData.name.length < 3) {
      newErrors.name = 'Minimum 3 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      if (isLogin) {
        await login({ email: formData.email, password: formData.password, role });
      } else {
        await signup({ name: formData.name, email: formData.email, password: formData.password, role });
      }
      navigate('/');
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setServerError('');
    setErrors({});
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full glass-card overflow-hidden">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-xl shadow-purple-500/20">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-slate-400 mt-2">
            {isLogin ? 'Access your portal' : 'Join the Kodex community'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {serverError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {serverError}
            </div>
          )}

          {!isLogin && (
            <div className="transition-all duration-300">
              <label className="block text-sm font-medium text-slate-400 mb-2">Display Name</label>
              <div className="relative">
                <User className="field-icon" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`input-field input-with-icon ${errors.name ? 'border-red-500/50' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="field-icon" />
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`input-field input-with-icon ${errors.email ? 'border-red-500/50' : ''}`}
                placeholder="name@example.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
            <div className="relative">
              <Lock className="field-icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`input-field input-with-icon ${errors.password ? 'border-red-500/50' : ''}`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => setRole('reader')}
              className={`p-3 rounded-xl border transition-all flex items-center justify-center gap-2 text-sm font-medium ${
                role === 'reader' 
                ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' 
                : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-700'
              }`}
            >
              <User className="w-4 h-4" />
              Reader
            </button>
            <button
              type="button"
              onClick={() => setRole('author')}
              className={`p-3 rounded-xl border transition-all flex items-center justify-center gap-2 text-sm font-medium ${
                role === 'author' 
                ? 'bg-brand-secondary/10 border-brand-secondary text-brand-secondary' 
                : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-700'
              }`}
            >
              <PenTool className="w-4 h-4" />
              Author
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 py-3 mt-4"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleMode}
              className="ml-2 text-brand-primary font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
