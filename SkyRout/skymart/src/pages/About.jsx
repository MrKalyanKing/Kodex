import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Globe, ShieldCheck, Zap, ArrowRight, Heart, Award, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    { title: 'Quality First', icon: <Award className="h-6 w-6" />, desc: 'We source only the best products from verified global suppliers to ensure excellence.' },
    { title: 'Fast Delivery', icon: <Zap className="h-6 w-6" />, desc: 'Our logistics network is optimized for speed, ensuring your orders arrive on time, every time.' },
    { title: 'Customer Love', icon: <Heart className="h-6 w-6" />, desc: 'We build relationships, not just transactions. Our support team is always here for you.' },
    { title: 'Safe & Secure', icon: <ShieldCheck className="h-6 w-6" />, desc: 'Your data and payments are protected with industry-leading encryption and security.' },
  ];

  return (
    <div className="flex flex-col gap-20 py-16 lg:py-24">
      {/* Brand Hero */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Badge variant="primary" className="w-fit scale-110 uppercase tracking-widest">About SkyMart</Badge>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Redefining the <br /> <span className="text-brand">Shopping</span> Frontier.
            </h1>
            <p className="text-lg leading-relaxed text-gray-400">
              SkyMart isn't just an e-commerce platform; it's a commitment to a premium lifestyle. We believe that everyone deserves access to high-quality electronics, fashion, and home essentials with a shopping experience that's as fast as it is beautiful.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => navigate('/shop')}>Start Shopping</Button>
              <Button size="lg" variant="ghost">Learn More</Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-white/5 p-8 lg:aspect-square">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Zap className="h-[400px] w-[400px] text-brand" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end gap-4">
              <div className="flex gap-4">
                <Card className="flex flex-1 flex-col items-center gap-2 p-6 transition-transform hover:-translate-y-2">
                  <span className="text-3xl font-black text-white">20K+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Products</span>
                </Card>
                <Card className="flex flex-1 flex-col items-center gap-2 p-6 transition-transform hover:-translate-y-2">
                  <span className="text-3xl font-black text-white">15+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Countries</span>
                </Card>
              </div>
              <Card className="flex items-center justify-between p-6 transition-transform hover:-translate-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-black text-brand">5.0</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Top Rated Support</span>
                </div>
                <Users className="h-10 w-10 text-gray-700" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white/5 py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">Our Core Values</h2>
            <p className="max-w-2xl text-gray-400">The principles that drive every decision we make at SkyMart.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none bg-transparent p-0 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-brand p-12 text-center text-black sm:p-20">
          <Sparkles className="h-12 w-12" />
          <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">
            Join the SkyMart <br /> Revolution Today.
          </h2>
          <p className="max-w-xl text-lg font-medium opacity-80">
            Be part of the fastest-growing premium e-commerce community. Experience the future of global retail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-black/90" onClick={() => navigate('/register')}>
              Join for Free
            </Button>
            <Button size="lg" variant="ghost" className="border-black text-black hover:bg-black hover:text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
