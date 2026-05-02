import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const services = [
    { name: 'New Tires', path: '/new-tires' },
    { name: 'Rotations', path: '/rotations' },
    { name: 'Tire Repair', path: '/tire-repair' },
    { name: 'Used Tires', path: '/used-tires' },
    { name: 'Oil Change', path: '/oil-change' },
    { name: 'Balancing', path: '/balancing' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          ALEXANDRIA<span className="text-racing-red"> TIRE&LUBE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-racing-red transition-colors">Home</Link>
          <Link to="/about" className="hover:text-racing-red transition-colors">About Us</Link>
          <a href="/#gallery" className="hover:text-racing-red transition-colors">Gallery</a>
          <div className="relative">
            <button 
              className="hover:text-racing-red transition-colors flex items-center gap-1"
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
            >
              Services <ChevronDown size={16} />
            </button>
            {serviceDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-black border border-white/10 py-2 mt-2">
                {services.map(s => (
                  <Link key={s.path} to={s.path} className="block px-4 py-2 hover:bg-racing-red hover:text-white transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-racing-red transition-colors">Contact</Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
