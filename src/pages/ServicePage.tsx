import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Disc, RotateCw, Wrench, Car, Target, Droplet, ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceData: Record<string, any> = {
  'new-tires': {
    title: 'New Tires',
    icon: Disc,
    bgImage: '/service-new-tires.png',
    headline: 'THE TIRE AUTHORITY IN ALEXANDRIA.',
    description: "We don't just sell tires; we engineer your ride. Our premium selection focuses on high-performance, critical safety ratings, and maximum longevity tailored to your specific driving habits.",
    breakdown: [
      { title: 'Performance Matching', desc: 'Tires selected specifically for your vehicle weight and local road conditions.' },
      { title: 'Safety Ratings', desc: 'Only stocking brands that exceed rigorous national safety standards.' },
      { title: 'Premium Warranties', desc: 'Comprehensive protection included on all top-tier brand installations.' }
    ]
  },
  'rotations': {
    title: 'Rotations',
    icon: RotateCw,
    bgImage: '/service-rotations.png',
    headline: 'MAXIMIZE YOUR TIRE ROI.',
    description: "Regular rotations are the most cost-effective way to extend the life of your tires. We ensure even tread wear, preserving your traction and saving you money over the lifespan of the rubber.",
    breakdown: [
      { title: 'Tread Depth Analysis', desc: 'Precise measurements to determine the optimal rotation pattern.' },
      { title: 'Even Wear Engineering', desc: 'Strategically moving tires to balance out the driving load.' },
      { title: 'Longevity Boost', desc: 'Extend the usable life of your tires by thousands of miles.' }
    ]
  },
  'tire-repair': {
    title: 'Tire Repair',
    icon: Wrench,
    bgImage: '/service-tire-repair.png',
    headline: 'STRUCTURAL INTEGRITY RESTORED.',
    description: "Don't let a puncture ruin your day. We focus on strict structural integrity, meticulously inspecting the interior and exterior to ensure a repair meets rigorous safety standards before you get back on the road.",
    breakdown: [
      { title: 'Interior Inspection', desc: 'Dismounting the tire to check for hidden sidewall damage.' },
      { title: 'Plug & Patch Method', desc: 'Using the industry-standard dual repair method for maximum safety.' },
      { title: 'Pressure Testing', desc: 'Verifying the seal holds under high-stress conditions.' }
    ]
  },
  'used-tires': {
    title: 'Used Tires',
    icon: Car,
    bgImage: '/service-used-tires.png',
    headline: 'VALUE WITHOUT COMPROMISE.',
    description: "Our used tire inventory undergoes a rigorous Safety-First inspection process. We carefully check each tire for sidewall integrity, tread depth, and bead quality to ensure you get exceptional value without ever compromising safety.",
    breakdown: [
      { title: 'Tread Depth Verification', desc: 'Ensuring adequate tread life remains for safe wet-weather driving.' },
      { title: 'Sidewall Inspection', desc: 'Checking for bubbles, cracks, or structural weaknesses.' },
      { title: 'Bead Quality Check', desc: 'Verifying the tire will form a perfect seal against the rim.' }
    ]
  },
  'balancing': {
    title: 'Balancing',
    icon: Target,
    bgImage: '/service-balancing.png',
    headline: 'PRECISION PHYSICS AT WORK.',
    description: "Our Alignment & Balancing Mastery utilizes precision physics to ensure a smooth, vibration-free ride. Proper balancing prevents premature suspension wear and guarantees optimal contact with the asphalt.",
    breakdown: [
      { title: 'Dynamic Spin Balancing', desc: 'Computerized spin testing to identify microscopic weight imbalances.' },
      { title: 'Laser-Guided Placement', desc: 'Pinpoint accuracy for attaching corrective wheel weights.' },
      { title: 'Vibration Elimination', desc: 'Restoring a smooth, factory-quality ride at highway speeds.' }
    ]
  },
  'oil-change': {
    title: 'Oil Changes',
    icon: Droplet,
    bgImage: '/service-oil-change.png',
    headline: 'ADVANCED ENGINE LONGEVITY.',
    description: "Designed for maximum engine life. We focus on Thermal Stability, utilizing high-flow filters that remove more contaminants than standard alternatives to keep your engine running cold and clean.",
    breakdown: [
      { title: 'Thermal Stability', desc: 'Premium synthetic oils designed to resist high-heat breakdown.' },
      { title: 'High-Flow Filtration', desc: 'Installing filters capable of capturing microscopic particulate matter.' },
      { title: 'Multi-Point Health Check', desc: 'A complementary inspection to identify issues before they escalate.' }
    ]
  }
};

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const data = serviceData[serviceSlug || ''] || serviceData['new-tires']; // Fallback
  const Icon = data.icon;

  return (
    <div className="bg-black">
      {/* Dynamic Hero Section */}
      <section 
        className="relative pt-32 pb-16 px-6 overflow-hidden bg-cover bg-center min-h-[50vh] flex flex-col justify-center"
        style={{ backgroundImage: `url('${data.bgImage}')` }}
      >
        <div className="absolute inset-0 z-0 bg-black/70" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-racing-red/40 via-black/60 to-black/90 animate-flicker" />
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
            <Icon className="text-racing-red h-20 w-20 mb-8" />
            <nav className="text-gray-400 text-sm mb-6 flex justify-center gap-2 font-mono uppercase tracking-widest">
                <Link to="/" className="hover:text-white transition-colors">Pit Crew Services</Link> 
                <span>/</span>
                <span className="text-racing-red">{data.title}</span>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none mb-6"
            >
              {data.title}
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              {data.headline}
            </p>
        </div>
      </section>

      {/* Content Breakdown Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">SERVICE <span className="text-racing-red">OVERVIEW</span></h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {data.description}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-racing-red px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors rounded-none group">
              SCHEDULE SERVICE <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="bg-gray-950 border border-white/5 p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-racing-red/5 rounded-full blur-[80px]" />
             <h3 className="text-2xl font-display font-bold mb-8 relative z-10">THE <span className="text-racing-red">BREAKDOWN</span></h3>
             
             <div className="space-y-6 relative z-10">
               {data.breakdown.map((item: any, index: number) => (
                 <div key={index} className="flex gap-4">
                   <CheckCircle2 className="text-racing-red flex-shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-white text-lg">{item.title}</h4>
                     <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
