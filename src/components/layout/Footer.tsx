import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/10 mt-auto text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
            <h3 className="font-display font-bold text-lg mb-4">ALEXANDRIA TIRE & LUBE</h3>
            <p className="text-gray-400 mb-4">1776 Jackson St, Alexandria, LA</p>
            <p className="text-gray-400">Mon-Thu: 8am-5pm | Fri: 8am-4pm</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 hover:text-racing-red"><Facebook size={20}/> Connect with us</a>
        </div>
        <div>
            <h3 className="font-display font-bold text-lg mb-4">AREAS WE SERVE</h3>
            <ul className="text-gray-400 text-sm space-y-2">
                <li>Alexandria, LA</li>
                <li>Pineville, LA</li>
                <li>Ball, LA</li>
                <li>Boyce, LA</li>
                <li>Woodworth, LA</li>
            </ul>
        </div>
        <div>
            <h3 className="font-display font-bold text-lg mb-4">FAST QUOTE</h3>
            <input type="text" placeholder="Your Name" className="w-full bg-gray-900 p-2 mb-2"/>
            <button className="bg-racing-red w-full py-2 font-bold hover:bg-white hover:text-black">SUBMIT</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-600 font-mono text-sm">© 2026 Alexandria Tire & Lube | Safety Certified | Authorized Dealer</div>
    </footer>
  );
}
