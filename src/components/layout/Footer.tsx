import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/10 mt-auto text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
            <img src="/atl new logo.jpeg" alt="Alexandria Tire & Lube" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 mb-4">1776 Jackson St, Alexandria, LA</p>
            <p className="text-gray-400">Mon-Thu: 8am-5pm | Fri: 8am-4pm</p>
            <a href="https://www.facebook.com/groups/2080825445622563" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 hover:text-racing-red"><Facebook size={20}/> Connect with us</a>
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
            <h3 className="font-display font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="text-gray-400 text-sm space-y-2 flex flex-col">
                <li><Link to="/" className="hover:text-racing-red transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-racing-red transition-colors">About Us</Link></li>
                <li><a href="/#gallery" className="hover:text-racing-red transition-colors">Gallery</a></li>
                <li><Link to="/contact" className="hover:text-racing-red transition-colors">Contact</Link></li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-600 font-mono text-sm">© 2026 Alexandria Tire & Lube | Safety Certified | Authorized Dealer</div>
    </footer>
  );
}
