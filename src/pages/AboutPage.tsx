export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-12">
        ABOUT <span className="text-racing-red">US</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 text-gray-300 mb-20">
        <div>
           <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
           <p className="text-lg leading-relaxed">
             Alexandria Tire & Lube is rooted in the heart of Alexandria, LA. We were founded on the simple principle of providing honest, reliable, and high-performance automotive maintenance to ensure our community stays on the road. We believe that automotive service should be transparent, efficient, and exceptionally high-quality.
           </p>
        </div>
        <div>
           <h3 className="text-2xl font-bold mb-4 text-white">Our Standards</h3>
           <p className="text-lg leading-relaxed">
             Our staff is deeply committed to being friendly, professional, and efficient. We employ only those who share our passion for mechanical precision. Combined with a welcoming atmosphere, we ensure that every client—from fleet operators to casual commuters—receives top-tier service tailored to their specific needs.
           </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-gray-900 to-black p-12 border-l-4 border-racing-red">
          <blockquote className="text-2xl md:text-3xl italic text-gray-200">
            "We don't just work on cars, we maintain the backbone of our community. Every turn of a wrench is a commitment to the safety of our neighbors."
          </blockquote>
          <p className="mt-6 text-racing-red font-bold">— The Alexandria Tire & Lube Team</p>
      </div>
    </div>
  );
}
