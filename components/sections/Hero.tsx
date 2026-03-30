"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Luxury Modern Roof" 
          fill 
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <div className="flex text-primary">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-zinc-300">Winnipeg&apos;s Top-Rated Roofing Team</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          <span className="block text-white">Raising the Bar in</span>
          <span className="gold-text-gradient">Premium Roofing</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed"
        >
          Expert workmanship guided by standards, not shortcuts. We build roofs that withstand Manitoba&apos;s toughest climates with premium materials and a 15-year warranty.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-2xl flex items-center justify-center gap-2 group shadow-xl shadow-gold-500/20"
          >
            Get a Free Estimate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
          >
            Our Workmanship
          </motion.button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 glass-card p-4 rounded-2xl transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">CertainTeed Shingle Master</p>
              <p className="text-zinc-500 text-xs">Certified Manufacturer-Backed</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 glass-card p-4 rounded-2xl transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">15-Year Warranty</p>
              <p className="text-zinc-500 text-xs text-nowrap">Industry-Leading Protection</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 glass-card p-4 rounded-2xl transition-transform hover:-translate-y-1 md:col-span-1 sm:col-span-2 sm:justify-center md:justify-start">
             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Quality Guaranteed</p>
              <p className="text-zinc-500 text-xs">No Shortcuts. Ever.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Discover More</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
