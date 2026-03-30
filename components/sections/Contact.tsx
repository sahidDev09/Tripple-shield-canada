"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[180px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/3">
             <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block text-center lg:text-left"
            >
              Get Integrated
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight text-center lg:text-left"
            >
              Start Your <br />
              <span className="gold-text-gradient">Free Estimate</span>
            </motion.h2>
            
            <div className="space-y-8">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex items-center gap-6 group cursor-pointer"
               >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Direct Line</h4>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors hover:underline">(431) 336-8834</p>
                  </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="flex items-center gap-6 group cursor-pointer"
               >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Mailbox</h4>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors hover:underline">info@tripleshieldroofing.com</p>
                  </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="flex items-center gap-6 group cursor-pointer"
               >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Main Office</h4>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors">Serving Winnipeg & Surrounding Areas</p>
                  </div>
               </motion.div>
            </div>
          </div>
          
          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 lg:w-2/3 glass-card p-8 md:p-12 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] text-zinc-500 font-black uppercase tracking-widest px-4">Full Name</label>
                     <input 
                       className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700" 
                       placeholder="e.g. John Doe"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] text-zinc-500 font-black uppercase tracking-widest px-4">Phone Number</label>
                     <input 
                       className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700" 
                       placeholder="(204) 555-0123"
                     />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-black uppercase tracking-widest px-4">Email Address</label>
                  <input 
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700" 
                    placeholder="john@example.com"
                  />
               </div>
               
               <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-black uppercase tracking-widest px-4">Project Details</label>
                  <textarea 
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700 min-h-[150px]" 
                    placeholder="Tell us about your roofing needs, storm damage, or replacement goals..."
                  />
               </div>
               
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full bg-primary py-5 rounded-2xl text-black font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-gold-500/20 group hover:bg-white transition-colors"
               >
                 Request Free Estimate
                 <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
