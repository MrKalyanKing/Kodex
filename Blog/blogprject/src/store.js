const STORAGE_KEY = 'kodex_blogs';
const USER_KEY = 'kodex_user';
const USERS_KEY = 'kodex_users';

const DEFAULT_BLOGS = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    content: `React Hooks revolutionized how we write components by allowing us to use state and other React features without writing a class. This paradigm shift addressed long-standing issues with class components, such as complex lifecycle methods and the "wrapper hell" caused by higher-order components.

Why Hooks?
Hooks solve many problems in React that were previously difficult to handle:
- Reuse stateful logic: Share complex logic between components without changing your component hierarchy.
- Simplification: Split complex components into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).
- No more Classes: Use React features without having to understand how 'this' works in JavaScript.

Common Hooks you should know
- useState: This is the most used hook. It allows you to add state to your functional components.
- useEffect: This hook replaces 'componentDidMount', 'componentDidUpdate', and 'componentWillUnmount'. It is perfect for data fetching and manual DOM manipulations.
- useContext: Combined with the Context API, this hook allows for easy global state management without prop drilling.

Best Practices
When using hooks, remember the "Rules of Hooks": Only call hooks at the top level of your component, and only call them from React functions. This ensures that hooks are called in the same order each time a component renders, which is vital for React to maintain state correctly between calls.

Discover how to leverage these powerful tools in your next project to write cleaner, more maintainable code.`,
    author: 'Sarah Chen',
    date: 'February 12, 2024',
    readTime: '8 min read',
    categories: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js',
    content: `Creating scalable APIs is crucial for modern web applications. Node.js provides excellent tools for building fast, efficient backend services that can handle thousands of concurrent connections with ease.

Architecture Patterns
When building APIs, consider these patterns:

RESTful Design
Follow REST principles for predictable, standardized endpoints. This makes your API intuitive for other developers and ensures scalability as your system grows.

Middleware Pattern
Use middleware for authentication, logging, and error handling. This separation of concerns allows you to keep your core business logic clean and isolated from cross-cutting concerns.

Database Optimization
Implement proper indexing and query optimization for better performance. Scalability isn't just about the server; it's about how efficiently you can retrieve and store data.

Performance Tuning
To truly scale, you should implement caching strategies (like Redis), use load balancers to distribute traffic, and ensure your Node.js processes are utilizing all available CPU cores using the Cluster module or a process manager like PM2.

Security Best Practices
- Environment Variables: Never hardcode secrets. Use .env files and process.env.
- Validation: Always validate incoming data using libraries like Joi or Zod.
- Rate Limiting: Protect your API from brute force and DoS attacks.
- Encryption: Use HTTPS and encrypt sensitive data at rest.`,
    author: 'Michael Scott',
    date: 'January 20, 2024',
    readTime: '12 min read',
    categories: ['Node.js', 'API', 'Backend']
  },
  {
    id: '3',
    title: 'The Art of Clean Code',
    content: `Writing code is easy, but writing clean, maintainable code is an art form. Clean code is code that is easy to read and easy to change, reducing the long-term cost of software maintenance.

Core Principles
- DRY (Dont Repeat Yourself): Duplication is the root of many evils in software. If you find yourself copying and pasting, it's time to abstract.
- KISS (Keep It Simple, Stupid): Avoid unnecessary complexity. The most elegant solution is often the simplest one.
- SOLID: These five principles of object-oriented design (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) are the foundation of robust software.

Meaningful Naming
One of the hardest things in programming is naming things. Variables, functions, and classes should tell you exactly what they do. If you need a comment to explain a variable name, you probably need a better name.

Why it matters
Maintainable code reduces technical debt and makes team collaboration much smoother. It allows teams to move faster in the long run because they aren't constantly fighting against a messy codebase. Learn the patterns that separate good code from great code.`,
    author: 'Emily Watson',
    date: 'March 10, 2024',
    readTime: '10 min read',
    categories: ['Programming', 'Best Practices', 'Software Engineering']
  }
];

const INITIAL_USERS = [
  { name: 'Admin User', email: 'admin@kodex.com', password: 'password', role: 'author' },
  { name: 'Kodex Staff', email: 'staff@kodex.com', password: 'password', role: 'author' }
];

export const store = {
  // --- USER METHODS ---
  getUsers: () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : INITIAL_USERS;
  },

  signup: (userData) => {
    const users = store.getUsers();
    const existingUser = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role || 'reader'
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    // Auto-login after signup
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    if (window.renderApp) window.renderApp();
    return newUser;
  },

  login: (credentials) => {
    const users = store.getUsers();
    const user = users.find(u =>
      u.email.toLowerCase() === credentials.email.toLowerCase() &&
      u.password === credentials.password
    );

    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      if (window.renderApp) window.renderApp();
      return user;
    }
    throw new Error('Invalid email or password');
  },

  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  logout: () => {
    localStorage.removeItem(USER_KEY);
    if (window.renderApp) window.renderApp();
  },

  // --- BLOG METHODS ---
  getBlogs: () => {
    const blogs = localStorage.getItem(STORAGE_KEY);
    return blogs ? JSON.parse(blogs) : DEFAULT_BLOGS;
  },

  getBlogById: (id) => {
    const blogs = store.getBlogs();
    return blogs.find(b => b.id === id);
  },

  saveBlog: (blog) => {
    const blogs = store.getBlogs();
    let updatedBlogs;
    if (blog.id) {
      updatedBlogs = blogs.map(b => b.id === blog.id ? blog : b);
    } else {
      const newBlog = { ...blog, id: Date.now().toString(), date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) };
      updatedBlogs = [newBlog, ...blogs];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
    if (window.renderApp) window.renderApp();
  },

  deleteBlog: (id) => {
    const blogs = store.getBlogs();
    const updatedBlogs = blogs.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
    if (window.renderApp) window.renderApp();
  }
};
