/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Disc, RotateCw, Wrench, Car, Target, Droplet, MapPin, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { hash } = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (hash === '#gallery') {
       document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero */}
      <section 
        className="relative pt-32 pb-40 px-6 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-0 bg-black/70" />
        {/* Mesh Gradient + Flicker */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-racing-red/40 via-black/60 to-black/90 animate-flicker" />
        
        <div className="relative max-w-7xl mx-auto z-10 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-6 uppercase"
          >
            ALEXANDRIA<br/> <span className="text-racing-red">TIRE & LUBE</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 mx-auto md:mx-0">
            Professional automotive care. Proven reliability. Fast, affordable, and built for your safety.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/contact" className="animate-shine bg-racing-red px-8 py-4 font-bold text-lg transition-colors rounded-none hover:bg-white hover:text-black inline-block">
              SCHEDULE NOW
            </Link>
            <a href="tel:+13182010014" className="border border-racing-red text-racing-red px-8 py-4 font-bold text-lg hover:bg-racing-red hover:text-white transition-colors rounded-none inline-block">
              CALL US
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <motion.section variants={scrollVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative py-20 px-6 bg-black">
        {/* Left-aligned minimal red glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-racing-red rounded-full blur-[128px] opacity-15 z-0" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center z-10">
            <div className="h-64 w-full md:w-1/2 bg-gray-900 border border-white/5 relative bg-cover bg-center" style={{ backgroundImage: "url('/atl 2.png')" }}>
              <div className="absolute inset-0 bg-racing-red/20 hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-display font-bold mb-4">ENGINEERING <span className="text-racing-red">EXCELLENCE</span></h2>
                <p className="text-lg mb-6 text-gray-400 leading-relaxed">
                    At the core of Alexandria Tire & Lube lies a commitment to mechanical integrity. We marry technical precision with rapid, reliable service to ensure your vehicle performs at its peak.
                </p>
                <div className="flex gap-6 mb-6 text-sm">
                    <div><h4 className="font-bold text-white">Precision</h4><p className="text-gray-500">Torque-Tested</p></div>
                    <div><h4 className="font-bold text-white">Velocity</h4><p className="text-gray-500">Fast-Tracked</p></div>
                </div>
                <Link to="/about" className="font-bold text-racing-red hover:underline">Read Our Full Story →</Link>
            </div>
        </div>
      </motion.section>

      {/* Pit Crew Services */}
      <motion.section variants={scrollVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12">PIT <span className="text-racing-red">CREW SERVICES</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'New Tires', icon: Disc, path: '/new-tires', img: '/service-new-tires.png' },
              { title: 'Rotations', icon: RotateCw, path: '/rotations', img: '/service-rotations.png' },
              { title: 'Tire Repair', icon: Wrench, path: '/tire-repair', img: '/service-tire-repair.png' },
              { title: 'Used Tires', icon: Car, path: '/used-tires', img: '/service-used-tires.png' },
              { title: 'Balancing', icon: Target, path: '/balancing', img: '/service-balancing.png' },
              { title: 'Oil Changes', icon: Droplet, path: '/oil-change', img: '/service-oil-change.png' },
            ].map((s) => (
              <Link 
                to={s.path} 
                key={s.title} 
                className="relative bg-gray-950 border border-white/5 p-8 hover:border-racing-red transition-all duration-300 group hover:scale-[1.02] overflow-hidden flex flex-col justify-end min-h-[240px]"
              >
                {/* Background Image with Dark Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-0" 
                  style={{ backgroundImage: `url('${s.img}')` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
                
                <div className="relative z-10">
                  <s.icon className="text-racing-red mb-4 h-10 w-10 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-display font-bold">{s.title.toUpperCase()}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <section className="py-12 bg-racing-red/10 border-y border-racing-red/20 text-white relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#A52026 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 text-center relative z-10">
            <div><div className="text-4xl font-bold text-racing-red">2005</div><div className="text-xs uppercase font-bold tracking-widest">Est.</div></div>
            <div><div className="text-4xl font-bold text-racing-red">500K+</div><div className="text-xs uppercase font-bold tracking-widest">Miles</div></div>
            <div><div className="text-4xl font-bold text-racing-red">15K+</div><div className="text-xs uppercase font-bold tracking-widest">Services</div></div>
        </div>
      </section>



      {/* Gallery */}
      <motion.section id="gallery" variants={scrollVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-display font-bold mb-12">OUR <span className="text-racing-red">WORK</span></h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {['/atl 1.png', '/atl 2.png', '/atl 3.png', '/atl 4.png'].map((imgSrc, i) => (
                   <div 
                     key={i} 
                     onClick={() => setSelectedImage(imgSrc)}
                     className="h-60 bg-gray-900 border border-white/5 bg-cover bg-center hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                     style={{ backgroundImage: `url('${imgSrc}')` }}
                   />
                 ))}
             </div>
          </div>
      </motion.section>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-racing-red transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery view" 
            className="max-h-[90vh] max-w-[90vw] object-contain border border-white/10" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}
