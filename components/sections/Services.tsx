"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, CloudRain, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Asphalt Shingle Roofing",
    description: "Specialized installation of premium architectural shingles with multiple color options and lifetime durability.",
    icon: ShieldCheck,
    color: "from-gold-300 to-gold-600"
  },
  {
    title: "Roof Replacement",
    description: "Complete full-service teardown and replacement with industry-leading materials and craftsmanship standards.",
    icon: RotateCcw,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Emergency Roof Repair",
    description: "24/7 rapid response for urgent leaks or structural damage to protect your property immediately.",
    icon: Hammer,
    color: "from-red-400 to-red-600"
  },
  {
    title: "Storm & Hail Damage",
    description: "Expert assessment and restoration for roofs affected by Winnipeg's intense wind, hail, and storm events.",
    icon: CloudRain,
    color: "from-green-400 to-green-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
          >
            Comprehensive <span className="gold-text-gradient">Roofing Services</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mt-6 rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-10 group relative flex flex-col justify-between items-start cursor-pointer hover:border-primary/50 transition-all overflow-hidden rounded-[2rem]"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-primary to-transparent" />
              
              <div className="mb-10 relative">
                <div className={`w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-primary shadow-2xl group-hover:shadow-primary/20 transition-all border border-zinc-800`}>
                  <service.icon className="w-8 h-8" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <motion.div 
                   whileHover={{ x: 5 }}
                   className="flex items-center gap-2 text-zinc-300 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:text-primary transition-colors"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Why Triple Shield Call to Action */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 glass p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20"
        >
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-3xl font-black text-white mb-4 leading-tight">Can&apos;t find what you&apos;re looking for?</h4>
            <p className="text-zinc-400">Our team offers a wide range of specialized services for various roofing architectures in Winnipeg.</p>
          </div>
          <button className="px-10 py-5 bg-white text-black font-black rounded-2xl whitespace-nowrap hover:scale-105 transition-transform shadow-2xl shadow-white/5">
            Contact Specialist
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
