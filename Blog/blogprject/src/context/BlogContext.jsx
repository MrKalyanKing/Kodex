import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

const STORAGE_KEY = 'kodex_blogs_data';
const USER_KEY = 'kodex_user';
const ALL_USERS_KEY = 'kodex_all_users';

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
  const [blogs, setBlogs] = useState(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading blogs:', error);
      return [];
    }
  });
  
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(USER_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      return null;
    }
  });
  
  const [allUsers, setAllUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem(ALL_USERS_KEY);
      return savedUsers ? JSON.parse(savedUsers) : [];
    } catch (error) {
      return [];
    }
  });

  // Seed data if empty
  useEffect(() => {
    if (blogs.length === 0) {
      setBlogs(SEED_DATA);
    }
  }, []);

  // Sync blogs to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  }, [blogs]);

  // Sync current user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  }, [user]);

  // Sync all users to localStorage
  useEffect(() => {
    localStorage.setItem(ALL_USERS_KEY, JSON.stringify(allUsers));
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
