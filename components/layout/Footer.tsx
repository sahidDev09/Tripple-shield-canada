"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Share2, Globe, ExternalLink, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const serviceAreas = [
  "St. Vital", "River Heights", "Transcona", "Charleswood", "North End", 
  "Fort Garry", "Garden City", "Island Lakes", "Sage Creek", "Bridgwater", "Whyte Ridge"
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden">
                <Image 
                  src="/logotripple.png"
                  alt="Triple Shield Roofing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-bold text-xl tracking-tight leading-tight">
                <span className="text-white block text-lg font-black tracking-tight tracking-wider">TRIPLE SHIELD</span>
                <span className="text-primary block -mt-1 text-xs font-black tracking-[0.3em]">ROOFING</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Winnipeg&apos;s premier choice for high-end roofing solutions. Built on standards, backed by warranty, and trusted by homeowners across Manitoba.
            </p>
            <div className="flex gap-4">
              {[Share2, Globe, ExternalLink].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: 'white', color: 'black' }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 border-white/5 transition-all"
                  href="#"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Resources</h4>
            <ul className="space-y-4">
              {['About Us', 'Roofing Services', 'Warranties', 'Claim Standards', 'Emergency Request', 'Latest Projects'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 glass rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer border-white/5">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-6">& Surrounding Manitoba Regions</p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-1">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none">Phone Line</p>
                  <a href="tel:4313368834" className="text-white font-bold hover:text-primary transition-colors">(431) 336-8834</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-1">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none">Email Us</p>
                  <a href="mailto:info@tripleshieldroofing.com" className="text-white font-bold hover:text-primary transition-colors">info@tripleshieldroofing.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-1">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none">Main Hub</p>
                  <p className="text-white font-bold">Winnipeg, MB, Canada</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Triple Shield Roofing. All Rights Reserved. Guiding quality with standards.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
