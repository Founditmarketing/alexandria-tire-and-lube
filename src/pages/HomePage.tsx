/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Disc, RotateCw, Wrench, Car, Target, Droplet, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage() {
  const { hash } = useLocation();

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
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-6"
          >
            PRECISION SERVICE.<br/> <span className="text-racing-red">ZERO COMPROMISE.</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 mx-auto md:mx-0">
            Alexandria’s elite destination for high-velocity oil changes and GPS-accurate tire maintenance. Fast. Reliable. Proven.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="animate-shine bg-racing-red px-8 py-4 font-bold text-lg transition-colors rounded-none hover:bg-white hover:text-black">
              SCHEDULE NOW
            </button>
            <Link to="/contact" className="border border-racing-red text-racing-red px-8 py-4 font-bold text-lg hover:bg-racing-red hover:text-white transition-colors rounded-none">
              EMERGENCY SERVICE
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <motion.section variants={scrollVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative py-20 px-6 bg-black">
        {/* Left-aligned minimal red glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-racing-red rounded-full blur-[128px] opacity-15 z-0" />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center z-10">
            <div className="h-64 w-full md:w-1/2 bg-gray-900 border border-white/5 relative">
              <div className="absolute inset-0 bg-racing-red/20 hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-display font-bold mb-4">ENGINEERING <span className="text-racing-red">EXCELLENCE</span></h2>
                <p className="text-lg mb-6 text-gray-400 italic leading-relaxed">
                    "At the core of Alexandria Tire & Lube lies a commitment to mechanical integrity. We marry technical precision with rapid, reliable service to ensure your vehicle performs at its peak."
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
              { title: 'New Tires', icon: Disc, path: '/new-tires' },
              { title: 'Rotations', icon: RotateCw, path: '/rotations' },
              { title: 'Tire Repair', icon: Wrench, path: '/tire-repair' },
              { title: 'Used Tires', icon: Car, path: '/used-tires' },
              { title: 'Balancing', icon: Target, path: '/balancing' },
              { title: 'Oil Changes', icon: Droplet, path: '/oil-change' },
            ].map((s) => (
              <Link to={s.path} key={s.title} className="bg-gray-950 backdrop-blur-xl border border-white/5 p-8 hover:border-racing-red transition-all duration-300 group hover:scale-[1.02]">
                <s.icon className="text-racing-red mb-6 h-10 w-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-bold">{s.title.toUpperCase()}</h3>
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

      {/* Anatomy Diagram Placeholder */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12">ANATOMY OF <span className="text-racing-red">A SERVICE</span></h2>
            <div className="h-96 w-full border border-racing-red/20 bg-gray-950 flex items-center justify-center text-gray-500 text-lg tracking-widest">
                [INTERACTIVE DIAGRAM: ARRIVAL to MULTI-POINT INSPECTION to SERVICE to FINAL CHECK]
            </div>
        </div>
      </section>

      {/* Gallery */}
      <motion.section id="gallery" variants={scrollVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-display font-bold mb-12">OUR <span className="text-racing-red">WORK</span></h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[1, 2, 3, 4].map(i => <div key={i} className="h-60 bg-gray-900 border border-white/5"></div>)}
             </div>
          </div>
      </motion.section>
      
      {/* Hours Module */}
      <section className="bg-gradient-to-t from-gray-950 to-black py-16 px-6 border-t border-racing-red/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-display font-bold mb-4">LOCATION & <span className="text-racing-red">HOURS</span></h2>
                <div className="flex items-center gap-4 mb-2 text-lg text-gray-300"><MapPin className="text-racing-red"/> 1776 Jackson St, Alexandria, LA</div>
            </div>
            <div className="bg-gray-950 border border-white/10 p-8">
                <div className="flex justify-between py-2 border-b border-white/10"><span>Mon - Thu</span><span>8 AM - 5 PM</span></div>
                <div className="flex justify-between py-2 border-b border-white/10"><span>Fri</span><span>8 AM - 4 PM</span></div>
                <div className="flex justify-between py-2 border-b border-white/10"><span>Sat - Sun</span><span>Closed</span></div>
            </div>
        </div>
      </section>
    </div>
  );
}
