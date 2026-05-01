import React from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Sparkles, Sun, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-gradient-to-br from-yellow-200 via-orange-100 to-orange-200 mt-4 rounded-3xl overflow-hidden relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content text-center py-20"
        >
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500 text-white text-sm font-bold tracking-wider mb-6 animate__animated animate__pulse animate__infinite">
              HOT DEALS 🔥
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-orange-900 mb-6 tracking-tight animate__animated animate__fadeInDown">
              Summer Sale{' '}
              <span className="text-orange-600 block mt-2">50% OFF</span>
            </h1>
            <p className="py-6 text-lg md:text-xl text-orange-800 font-medium animate__animated animate__fadeInUp animate__delay-1s">
              Gear up for the brightest season. Discover our exclusive
              collection of sunglasses, beachwear, and premium skincare.
            </p>
            <button className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full px-10 text-lg h-auto py-4">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <Sun className="absolute top-10 right-10 text-yellow-500 opacity-50 blur-sm w-32 h-32" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      {/* Popular Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              Popular Picks <Sparkles className="text-orange-500" />
            </h2>
            <p className="text-gray-500 mt-2">
              Our most loved summer essentials
            </p>
          </div>
          <a
            href="/products"
            className="text-orange-600 font-medium hover:underline hidden sm:block"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra Section: Summer Care Tips */}
      <div className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Summer Care Tips 🌴
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Stay fresh and protected while you enjoy the sunny days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Stay Hydrated
              </h3>
              <p className="text-gray-600">
                Drink at least 8 glasses of water daily. Keep a reusable bottle
                with you specially during beach outings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Reapply Sunscreen
              </h3>
              <p className="text-gray-600">
                Apply broad-spectrum SPF 30+ every two hours, or immediately
                after swimming or heavy sweating.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Light Clothing
              </h3>
              <p className="text-gray-600">
                Wear loose, light-colored clothings made of breathable fabrics
                like cotton or linen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Section: Top Brands */}
      <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-y border-gray-100">
        {/* Compact Heading */}
        <h2 className="text-sm font-semibold text-center text-gray-400 uppercase tracking-[0.2em] mb-12">
          OUR TRUSTED PARTNERS
        </h2>

        {/* Logos Flex */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {/* SunShade */}
          <div className="group cursor-default">
            <span className="relative text-2xl font-black text-gray-400 transition-colors duration-300 group-hover:text-orange-500">
              SunShade
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* BREEZE */}
          <div className="group cursor-default">
            <span className="relative text-2xl font-black italic text-gray-400 transition-colors duration-300 group-hover:text-orange-500">
              BREEZE
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* GlowSkin */}
          <div className="group cursor-default">
            <span className="relative text-2xl font-black tracking-tighter text-gray-400 transition-colors duration-300 group-hover:text-orange-500">
              GlowSkin
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          {/* SandMate */}
          <div className="group cursor-default">
            <span className="relative text-2xl font-serif font-bold text-gray-400 transition-colors duration-300 group-hover:text-orange-500">
              SandMate
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
