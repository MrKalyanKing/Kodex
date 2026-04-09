import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadBlogs, saveBlogs } from '../utils/localStorage';

const BlogContext = createContext();

const SEED_DATA = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    content: 'Artificial Intelligence is revolutionizing how we build software. From copilot tools to automated testing, the landscape is shifting rapidly...',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '2',
    title: 'Modern Design Principles for 2024',
    content: 'Glassmorphism, bento layouts, and micro-interactions are defining the modern web. Learn how to implement these in your next project...',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: '3',
    title: 'Mastering React Context API',
    content: 'State management doesn\'t always require Redux. React Context is powerful enough for most applications when used correctly...',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  }
];

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogs must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('kodex_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [allUsers, setAllUsers] = useState(() => {
    const savedUsers = localStorage.getItem('kodex_all_users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Load blogs on initial mount
  useEffect(() => {
    const initialBlogs = loadBlogs();
    if (initialBlogs.length === 0) {
      setBlogs(SEED_DATA);
      saveBlogs(SEED_DATA);
    } else {
      setBlogs(initialBlogs);
    }
  }, []);

  // Sync blogs to localStorage
  useEffect(() => {
    if (blogs.length > 0) {
      saveBlogs(blogs);
    }
  }, [blogs]);

  // Sync current user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('kodex_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('kodex_user');
    }
  }, [user]);

  // Sync all users to localStorage
  useEffect(() => {
    localStorage.setItem('kodex_all_users', JSON.stringify(allUsers));
  }, [allUsers]);

  const signup = (userData) => {
    const exists = allUsers.find(u => u.email === userData.email);
    if (exists) {
      throw new Error('User already exists with this email.');
    }
    const newUser = { ...userData, id: crypto.randomUUID() };
    setAllUsers(prev => [...prev, newUser]);
    setUser(newUser);
    return newUser;
  };

  const login = (credentials) => {
    const foundUser = allUsers.find(
      u => u.email === credentials.email && 
           u.password === credentials.password && 
           u.role === credentials.role
    );
    
    if (!foundUser) {
      throw new Error('Invalid credentials or role mismatch.');
    }
    
    setUser(foundUser);
    return foundUser;
  };

  const logout = () => {
    setUser(null);
  };

  const addBlog = (blog) => {
    const newBlog = {
      ...blog,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setBlogs((prev) => [newBlog, ...prev]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === id ? { ...blog, ...updatedBlog } : blog))
    );
  };

  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  const getBlogById = (id) => {
    return blogs.find((blog) => blog.id === id);
  };

  const value = {
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
    user,
    allUsers,
    signup,
    login,
    logout,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
