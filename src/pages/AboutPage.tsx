import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-16 px-6 overflow-hidden bg-cover bg-center min-h-[50vh] flex flex-col justify-center"
        style={{ backgroundImage: "url('/atl 2.png')" }}
      >
        <div className="absolute inset-0 z-0 bg-black/80" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-racing-red/30 via-black/60 to-black/90 animate-flicker" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-6"
          >
            ENGINEERING <span className="text-racing-red">EXCELLENCE</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At the core of Alexandria Tire & Lube lies a commitment to mechanical integrity. We marry technical precision with rapid, reliable service to ensure your vehicle performs at its absolute peak.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-950 border border-white/5 p-10 hover:border-racing-red transition-all duration-300 group">
            <Target className="text-racing-red mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">PRECISION</h3>
            <p className="text-gray-400 leading-relaxed">
              Every lug nut torque-tested, every wheel mathematically balanced. We don't guess; we measure, verify, and execute with absolute accuracy to ensure your safety and vehicle longevity.
            </p>
          </div>
          <div className="bg-gray-950 border border-white/5 p-10 hover:border-racing-red transition-all duration-300 group">
            <Zap className="text-racing-red mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">VELOCITY</h3>
            <p className="text-gray-400 leading-relaxed">
              Your time is the only commodity more valuable than your vehicle. Our fast-tracked pit crew methodology is engineered to get you back on the asphalt without sacrificing a single quality metric.
            </p>
          </div>
          <div className="bg-gray-950 border border-white/5 p-10 hover:border-racing-red transition-all duration-300 group">
            <ShieldCheck className="text-racing-red mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">INTEGRITY</h3>
            <p className="text-gray-400 leading-relaxed">
              Zero compromise. Honest diagnostics and transparent pricing are the foundation of our operation. We treat every vehicle as if our own families are riding in it.
            </p>
          </div>
        </div>
      </section>

      {/* Content & CTA */}
      <section className="pb-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">MORE THAN JUST <span className="text-racing-red">MECHANICS</span></h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              For nearly two decades, Alexandria Tire & Lube has been the backbone of reliable transportation in our community. We don't just work on cars; we ensure that families travel safely, businesses maintain their fleets, and individuals get where they need to go without hesitation. Every turn of a wrench and every diagnostic check is a direct commitment to the safety and prosperity of our neighbors.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Whether you need an emergency repair or routine high-velocity maintenance, our team is standing by to deliver elite, uncompromising service.
            </p>
            <Link to="/contact" className="inline-block bg-racing-red px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors rounded-none">
              CONTACT OUR TEAM
            </Link>
          </div>
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 bg-cover bg-center border border-white/10" style={{ backgroundImage: "url('/atl 1.png')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
