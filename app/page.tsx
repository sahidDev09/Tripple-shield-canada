import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Marquee Section */}
        <div className="bg-[#050505] py-12 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">★</div>
                   <span className="text-sm font-black uppercase tracking-[0.3em] text-white">ShingleMaster™</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">★</div>
                   <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Master Craftsman</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">★</div>
                   <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Select Shingle Master</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">★</div>
                   <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Workmanship Guarantee</span>
                </div>
             </div>
          </div>
        </div>

        <Services />
        <About />
        
        {/* Testimonials Placeholder / Quote */}
        <section id="reviews" className="py-24 bg-black relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full scale-150" />
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Client Testimonials</span>
              <blockquote className="text-3xl md:text-5xl font-black text-white italic leading-tight mb-12">
                &quot;Professional, punctual, and the quality is second to none. Triple Shield went above and beyond to ensure our new roof was built to last the Winnipeg winter.&quot;
              </blockquote>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full glass mb-4 border border-primary/20 bg-gradient-to-br from-gold-300 to-gold-700" />
                 <p className="text-white font-bold text-lg">David Henderson</p>
                 <p className="text-zinc-500 text-sm italic">Local Homeowner, Winnipeg</p>
              </div>
           </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
