import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, RotateCcw, Minus, Plus, CheckCircle2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toast } from 'react-hot-toast';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { formatCurrency } from '../utils/format';
import { motion } from 'framer-motion';

const fetchProduct = async (id) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });

  const handleAddToCart = () => {
    // Add product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    toast.success(`${product.title} (${quantity}) added to cart!`, {
      icon: <CheckCircle2 className="h-4 w-4 text-brand" />,
    });
  };

  if (isLoading) return <div className="container mx-auto flex h-screen items-center justify-center text-white">Loading product details...</div>;
  if (error) return <div className="container mx-auto flex h-screen items-center justify-center text-red-500">Error loading product.</div>;

  return (
    <div className="container mx-auto min-h-screen px-4 py-8 sm:px-6 sm:py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to results
      </button>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Images */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className="h-full w-full object-contain p-4"
            />
          </motion.div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border transition-all ${
                  activeImage === index ? 'border-brand' : 'border-white/10 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.title} ${index}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="primary" className="uppercase tracking-widest">{product.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-yellow-400">
                <Star className="h-4 w-4 fill-yellow-400" />
                <span className="font-bold text-white">{product.rating}</span>
                <span className="text-gray-500">({product.stock} in stock)</span>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{product.title}</h1>
            <p className="text-2xl font-black text-brand sm:text-3xl">{formatCurrency(product.price)}</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-400">
            {product.description}
          </p>

          <div className="flex flex-col gap-6 border-y border-white/10 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 items-center rounded-xl border border-white/10 bg-white/5 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 text-xs text-gray-400">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 text-xs text-gray-400">
                <Truck className="h-4 w-4 text-brand" />
                <span>Express Delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 text-xs text-gray-400">
                <RotateCcw className="h-4 w-4 text-brand" />
                <span>30 Days Return</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Product Tag</h3>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-white/5 text-gray-400">#Premium</Badge>
              <Badge variant="secondary" className="bg-white/5 text-gray-400">#E-commerce</Badge>
              <Badge variant="secondary" className="bg-white/5 text-gray-400">#FutureTech</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
