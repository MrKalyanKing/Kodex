import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ShoppingCart, Users, Star, ArrowRight, Zap, Smartphone, Sparkles, Home as HomeIcon, Shirt, Coffee } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const stats = [
    { label: '20K+ Products', icon: <ShoppingCart className="h-4 w-4" />, color: 'text-brand' },
    { label: '50K+ Users', icon: <Users className="h-4 w-4" />, color: 'text-blue-400' },
    { label: '4.8 Rating', icon: <Star className="h-4 w-4" />, color: 'text-yellow-400' },
  ];

  const categories = [
    { name: 'Electronics', icon: <Smartphone className="h-6 w-6" />, count: '450+ Items', color: 'bg-blue-500/10 text-blue-500' },
    { name: 'Home & Living', icon: <HomeIcon className="h-6 w-6" />, count: '320+ Items', color: 'bg-green-500/10 text-green-500' },
    { name: 'Fashion', icon: <Shirt className="h-6 w-6" />, count: '890+ Items', color: 'bg-purple-500/10 text-purple-500' },
    { name: 'Accessories', icon: <Sparkles className="h-6 w-6" />, count: '150+ Items', color: 'bg-orange-500/10 text-orange-500' },
  ];

  return (
    <div className="flex flex-col gap-16 py-12 lg:py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-400"
          >
            <Badge variant="primary" className="h-5 px-1.5 uppercase tracking-wider">New</Badge>
            <span>Spring Collection 2026 is here!</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {isAuthenticated ? (
              <>
                Welcome back, <span className="text-brand">{user.name}</span>!
              </>
            ) : (
              <>
                Elevate Your <span className="text-brand">Shopping</span> Experience
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl"
          >
            Discover a curated selection of premium electronics, fashion, and lifestyle essentials. Designed for those who appreciate quality and speed.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" onClick={() => navigate('/shop')} className="group flex items-center gap-2">
              Shop Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="ghost" onClick={() => navigate('/about')}>
              View All Products
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-12 md:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={stat.color}>{stat.icon}</div>
                <span className="text-sm font-medium text-gray-300">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Popular Categories</h2>
            <p className="mt-2 text-gray-500">Explore our most wanted collections</p>
          </div>
          <button onClick={() => navigate('/shop')} className="hidden items-center gap-2 text-sm font-medium text-brand hover:underline sm:flex">
            Browse All Categories <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Card
                className="cursor-pointer p-6"
                onClick={() => navigate(`/shop?category=${encodeURIComponent(category.name)}`)}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{category.count}</p>
                <div className="mt-4 flex translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-brand">View Products →</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Banner */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-brand font-bold text-black lg:h-[400px]">
          <div className="relative z-10 flex h-full flex-col justify-center gap-6 p-8 lg:max-w-xl lg:p-16">
            <Badge variant="secondary" className="w-fit bg-black text-white">Free Delivery on ₹999+</Badge>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              Unleash the <br /> Future of Tech
            </h2>
            <p className="text-lg font-medium opacity-80">
              Get up to 40% off on the latest gadgets and electronics for personal and professional use.
            </p>
            <Button size="lg" className="w-fit bg-black text-white hover:bg-black/90">
              Grab Deal Now
            </Button>
          </div>
          <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-white/5 lg:block" />
          <motion.div
            animate={{
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-20 -top-20 opacity-10"
          >
            <Zap className="h-[600px] w-[600px] text-black" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
