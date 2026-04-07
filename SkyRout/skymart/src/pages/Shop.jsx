import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Search, Filter, SlidersHorizontal, ShoppingCart, Star, X, Check } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toast } from 'react-hot-toast';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import { formatCurrency } from '../utils/format';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const categories = [
  'All',
  'Beauty',
  'Fragrances',
  'Furniture',
  'Groceries',
  'Home-decoration',
  'Kitchen-accessories',
  'Laptops',
  'Mens-shirts',
  'Mens-shoes',
  'Mens-watches',
  'Mobile-accessories',
  'Motorcycle',
  'Skin-care',
  'Smartphones',
  'Sports-accessories',
  'Sunglasses',
  'Tablets',
  'Tops',
  'Vehicle',
  'Womens-bags',
  'Womens-dresses',
  'Womens-jewellery',
  'Womens-shoes',
  'Womens-watches'
];

const fetchProducts = async () => {
  const response = await axios.get('https://dummyjson.com/products?limit=100');
  return response.data.products;
};

const Shop = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Default');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    return products
      .filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, search, selectedCategory, sortBy]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`, {
      icon: <Check className="h-4 w-4 text-brand" />,
    });
  };

  if (error) return <div className="flex h-96 items-center justify-center text-red-500">Error loading products. Please try again.</div>;

  return (
    <div className="container mx-auto min-h-screen px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar Filters */}
        <aside className="hidden w-64 flex-shrink-0 lg:block">
          <div className="sticky top-24 flex flex-col gap-8">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Categories</h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-brand text-black font-bold'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Controls */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 lg:hidden">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </div>
              <select
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-brand focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option className="bg-charcoal">Default</option>
                <option className="bg-charcoal">Price: Low to High</option>
                <option className="bg-charcoal">Price: High to Low</option>
                <option className="bg-charcoal">Rating</option>
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6 text-sm text-gray-500">
            Showing <span className="font-medium text-white">{filteredProducts.length}</span> products
            {selectedCategory !== 'All' && <span> in <span className="text-brand">{selectedCategory}</span></span>}
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="aspect-[3/4] animate-pulse rounded-xl bg-white/5" />
              ))}
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      className="group/product h-full cursor-pointer p-3"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-charcoal/50">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/product:scale-110"
                        />
                        <div className="absolute right-2 top-2">
                          <Badge variant="secondary" className="bg-black/60 text-[10px] backdrop-blur-sm">
                            {product.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-[10px] text-gray-400">{product.rating}</span>
                        </div>
                        <h4 className="line-clamp-1 text-sm font-semibold text-white transition-colors group-hover/product:text-brand">
                          {product.title}
                        </h4>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-base font-bold text-white">{formatCurrency(product.price)}</span>
                          <button
                            onClick={(e) => handleAddToCart(e, product)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-black transition-all hover:bg-brand/90 active:scale-90"
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!isLoading && filteredProducts.length === 0 && (
            <div className="flex h-96 flex-col items-center justify-center gap-4 text-center">
              <Search className="h-12 w-12 text-gray-700" />
              <div>
                <p className="text-lg font-bold text-white">No products found</p>
                <p className="text-sm text-gray-500">Try adjusting your filters or search terms.</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => { setSearch(''); setSelectedCategory('All'); }}>
                Clear all filters
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
