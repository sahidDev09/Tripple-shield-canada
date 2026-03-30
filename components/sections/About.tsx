"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Award, MapPin } from 'lucide-react';

const trustFactors = [
  {
    title: "CertainTeed Certified",
    description: "ShingleMaster & Master Craftsman status indicates top-tier manufacturer training.",
    icon: Award
  },
  {
    title: "15-Year Warranty",
    description: "We stand behind every shingle with an industry-leading workmanship guarantee.",
    icon: Shield
  },
  {
    title: "Winnipeg's Choice",
    description: "Built for local climates. We know exactly what Manitoba's weather demands.",
    icon: MapPin
  },
  {
    title: "Full Coverage",
    description: "Completely licensed, bonded, and insured for your total peace of mind.",
    icon: CheckCircle2
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Side: Text Content */}
        <div className="flex-1">
          <motion.span 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Our Standards
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            Guiding Quality with <br />
            <span className="gold-text-gradient">No Shortcuts. Ever.</span>
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-xl"
          >
            Triple Shield Roofing was founded with a single mission: to provide Winnipeg homeowners with a level of roofing quality that matches the city&apos;s unique climate requirements.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustFactors.map((fact, idx) => (
              <motion.div 
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                  <fact.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{fact.title}</h4>
                  <p className="text-zinc-500 text-sm leading-snug">{fact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Right Side: Shield Design Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
             {/* Decorative Background Circles */}
             <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-125 translate-x-10 translate-y-10" />
             <div className="absolute inset-0 bg-gold-400/10 blur-[100px] rounded-full scale-125 -translate-x-10 -translate-y-10" />
             
             {/* The Shield Asset Visual Container */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative w-full h-full glass rounded-[3rem] p-12 flex items-center justify-center border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                
                <div className="relative flex flex-col items-center gap-6">
                   <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-300 to-gold-700 flex items-center justify-center shadow-2xl relative">
                      <Shield className="w-24 h-24 text-black p-4" strokeWidth={1} />
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
                          {[1,2,3].map(i => <Award key={i} className="w-8 h-8 text-gold-200 fill-current" />)}
                      </div>
                   </div>
                   <div className="text-center">
                      <span className="text-4xl font-black text-white italic tracking-widest block">CERTIFIED</span>
                      <span className="text-zinc-500 text-sm uppercase font-bold tracking-[0.4em]">Expert Roofers</span>
                   </div>
                </div>
             </motion.div>
             
             {/* Floating Stats */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="absolute top-1/2 -right-10 glass px-6 py-4 rounded-2xl border-white/20 shadow-2xl backdrop-blur-xl"
             >
                <p className="text-3xl font-black text-primary">15Yrs</p>
                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Workmanship</p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.7 }}
               className="absolute bottom-1/4 -left-10 glass px-6 py-4 rounded-2xl border-white/20 shadow-2xl backdrop-blur-xl"
             >
                <p className="text-3xl font-black text-white">5 Star</p>
                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Public Rating</p>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
