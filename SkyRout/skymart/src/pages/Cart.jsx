import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { formatCurrency } from '../utils/format';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleRemove = (id, name) => {
    dispatch(removeFromCart(id));
    toast.error(`${name} removed from cart.`);
  };

  const handleQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    toast.success('Checkout successful! Thank you for shopping with SkyMart.');
    dispatch(clearCart());
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/5">
          <ShoppingBag className="h-12 w-12 text-gray-700" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added anything yet. Start exploring our premium collection.</p>
        </div>
        <Button size="lg" onClick={() => navigate('/shop')} className="flex items-center gap-2">
          Shop Now <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen px-4 py-12 sm:px-6 lg:py-20">
      <h1 className="mb-10 text-3xl font-black text-white sm:text-4xl">Shopping Cart ({items.length} items)</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Items List */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {items.map((item) => (
            <Card key={item.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-charcoal/50">
                <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
              </div>
              
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white hover:text-brand transition-colors cursor-pointer" onClick={() => navigate(`/product/${item.id}`)}>
                    {item.title}
                  </h3>
                  <button onClick={() => handleRemove(item.id, item.title)} className="p-1 text-gray-500 transition-colors hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.category}</p>
                <p className="mt-2 text-lg font-black text-brand">{formatCurrency(item.price)}</p>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4 sm:border-none sm:pt-0">
                <div className="flex h-10 items-center rounded-lg border border-white/10 bg-white/5 p-1">
                  <button
                    onClick={() => handleQuantity(item.id, item.quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-white">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantity(item.id, item.quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-lg font-black text-white sm:w-24 sm:text-right">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </Card>
          ))}

          <Button variant="ghost" onClick={() => dispatch(clearCart())} className="w-fit text-red-500 hover:bg-red-500/10 hover:text-red-500 border-red-500/20">
            Clear Shopping Cart
          </Button>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col gap-6">
          <Card className="p-6">
            <h3 className="mb-6 text-xl font-bold text-white">Order Summary</h3>
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span className="font-medium text-white">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-brand font-bold">FREE</span> : formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-white">{formatCurrency(tax)}</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between text-xl font-black text-white">
              <span>Total</span>
              <span className="text-brand">{formatCurrency(total)}</span>
            </div>
            <Button size="lg" className="mt-8 w-full gap-2" onClick={handleCheckout}>
              <CreditCard className="h-5 w-5" />
              Checkout Now
            </Button>
          </Card>

          <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <ShieldCheck className="h-5 w-5 text-brand" />
              <span>Secure Checkout & Payment</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Truck className="h-5 w-5 text-brand" />
              <span>Free shipping on orders over $50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
