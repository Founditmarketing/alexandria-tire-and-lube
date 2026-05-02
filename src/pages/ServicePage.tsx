import { useParams, Link } from 'react-router-dom';

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const title = serviceSlug?.replace('-', ' ') || '';
  
  const getContent = (slug: string) => {
    switch(slug) {
        case 'new-tires':
            return (
              <>
                <p>We pride ourselves on being the Tire Authority in Alexandria. Our <strong>New Tire</strong> selection focuses on performance, safety ratings, and longevity. We don't just sell tires; we recommend the perfect set based on your driving habits, ensuring durability and fuel efficiency.</p>
                <div className="mt-4"><strong>Warranties included</strong> on all premium brands.</div>
              </>
            );
        case 'used-tires':
             return (
              <>
                <p>Our <strong>Used Tire</strong> inventory undergoes a rigorous <strong>Safety-First inspection process</strong>. We carefully check each tire for sidewall integrity, tread depth, and bead quality to ensure you get value without compromising safety.</p>
              </>
             );
        case 'oil-change':
            return (
              <>
                <p>Our <strong>Advanced Oil Change</strong> service is designed for maximum engine longevity. We focus on <strong>Thermal Stability</strong> and use only high-flow filters that remove more contaminants than standard alternatives. Every oil change includes a <strong>Multi-Point Health Check</strong> to identify issues before they become expensive problems.</p>
                <div className="mt-6 font-bold text-racing-red">Related: <Link to="/rotations" className="underline">Get a Tire Rotation for optimal, even wear during your visit.</Link></div>
              </>
            );
        case 'tire-repair':
            return (
              <>
                <p>Don't let a puncture ruin your day. Our <strong>Tire Repair</strong> service focuses on strict <strong>Structural Integrity</strong>. We meticulously inspect the interior and exterior to decide if a repair meets safety standards, ensuring you're back on the road with complete confidence.</p>
              </>
            );
        case 'balancing':
        case 'rotations':
            return (
               <>
                 <p>Our <strong>Alignment & Balancing Mastery</strong> utilizes precision physics to ensure a smooth, vibration-free ride. Proper balancing prevents premature suspension wear, while regular rotations maximize your <strong>ROI per tire</strong> by ensuring even tread wear, saving you money in the long run.</p>
               </>
            );
        default:
            return <p>At Alexandria Tire & Lube, we prioritize your vehicle's safety, quality, and efficiency. Our {title} service is designed to deliver maximum performance and peace of mind.</p>;
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-20 px-6 text-center overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-racing-red rounded-full blur-[128px] opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
            <nav className="text-gray-400 text-sm mb-4 flex justify-center gap-2">
                <Link to="/" className="hover:text-white">Home</Link> 
                <span>/</span>
                <span className="text-racing-red capitalize">{title}</span>
            </nav>
            <h1 className="text-6xl md:text-8xl font-display font-bold capitalize tracking-tighter leading-none">{title}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Expert {title}</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
            {getContent(serviceSlug || '')}
        </p>
        <button className="mt-8 bg-racing-red px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors rounded-none">
          SCHEDULE YOUR {title.toUpperCase()}
        </button>
      </div>
    </div>
  );
}
