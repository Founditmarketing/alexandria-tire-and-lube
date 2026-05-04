import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-12 text-racing-red">CONTACT US</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-950 p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="flex items-center gap-4 mb-4 text-lg text-gray-300"><MapPin className="text-racing-red"/> 1776 Jackson St, Alexandria, LA</div>
            <div className="flex items-center gap-4 mb-8 text-lg text-gray-300"><Phone className="text-racing-red"/> (318) 201-0014</div>
            <div className="bg-black text-white p-6 border border-white/10">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Clock className="text-racing-red"/> Operating Hours</h3>
                <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Mon - Thu</span>
                    <span>8 AM - 5 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Fri</span>
                    <span>8 AM - 4 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Sat</span>
                    <span>Closed</span>
                </div>
            </div>
        </div>
        <div className="h-96 w-full bg-gray-950 border border-white/10 flex items-center justify-center text-gray-500">
            [MAP PLACEHOLDER]
        </div>
      </div>
    </div>
  );
}
