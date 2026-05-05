import { Phone, MapPin, Clock, ChevronDown, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-12">
        CONTACT <span className="text-racing-red">US</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Info Block */}
        <div className="bg-gray-950 p-10 border border-white/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">HQ <span className="text-racing-red">INFO</span></h2>
              <div className="flex items-center gap-4 mb-6 text-lg text-gray-300 hover:text-white transition-colors">
                <MapPin className="text-racing-red h-8 w-8"/> 
                <span>1776 Jackson St<br/>Alexandria, LA 71301</span>
              </div>
              <a href="tel:+13182010014" className="flex items-center gap-4 mb-6 text-lg text-gray-300 hover:text-white transition-colors">
                <Phone className="text-racing-red h-8 w-8"/> 
                <span>(318) 201-0014</span>
              </a>
              <a href="https://www.facebook.com/groups/2080825445622563" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 mb-12 text-lg text-gray-300 hover:text-white transition-colors">
                <Facebook className="text-racing-red h-8 w-8"/> 
                <span>Join our Facebook Group</span>
              </a>
            </div>
            <div className="bg-black text-white p-8 border border-white/5">
                <h3 className="font-bold mb-6 flex items-center gap-3 text-xl"><Clock className="text-racing-red"/> OPERATING HOURS</h3>
                <div className="flex justify-between py-3 border-b border-white/10 text-gray-400">
                    <span>Mon - Thu</span>
                    <span className="text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10 text-gray-400">
                    <span>Fri</span>
                    <span className="text-white">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-3 text-gray-400">
                    <span>Sat - Sun</span>
                    <span className="text-racing-red font-bold">CLOSED</span>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-950 p-10 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-racing-red/10 rounded-full blur-[100px]" />
            <h2 className="text-3xl font-display font-bold mb-8 relative z-10">REQUEST <span className="text-racing-red">SERVICE</span></h2>
            <form className="relative z-10 flex flex-col gap-5">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-racing-red transition-colors" 
              />
              <div className="grid grid-cols-2 gap-5">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-racing-red transition-colors" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-racing-red transition-colors" 
                />
              </div>
              <div className="relative">
                <select 
                  defaultValue="" 
                  className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-racing-red transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Service of Inquiry...</option>
                  <option value="new-tires">New Tires</option>
                  <option value="rotations">Rotations & Alignments</option>
                  <option value="tire-repair">Tire Repair</option>
                  <option value="used-tires">Used Tires</option>
                  <option value="balancing">Balancing</option>
                  <option value="oil-change">Oil Change & Maintenance</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              <textarea 
                placeholder="Vehicle Details & Message..." 
                rows={4} 
                className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-racing-red transition-colors resize-none"
              ></textarea>
              <button 
                type="button" 
                className="bg-racing-red mt-2 w-full py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors tracking-widest"
              >
                SUBMIT REQUEST
              </button>
            </form>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="w-full h-[500px] border border-white/5 relative group bg-black overflow-hidden">
        {/* Subtle Red Overlay that fades on hover */}
        <div className="absolute inset-0 bg-racing-red/10 pointer-events-none mix-blend-color z-10 transition-opacity duration-500" />
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.3105741006574!2d-92.45785022396116!3d31.31174667430588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862f9f1b0a8523c5%3A0xc6226b91176bfa23!2s1776%20Jackson%20St%2C%20Alexandria%2C%20LA%2071301!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%) grayscale(20%)' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-0"
        />
      </div>
    </div>
  );
}
