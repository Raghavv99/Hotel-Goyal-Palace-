import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { 
      name: 'Discover', 
      isDropdown: true,
      items: [
        { name: 'Local Attractions', href: '/attractions' },
        { name: 'Location & Map', href: '/location' },
        { name: 'Guest Reviews', href: '/testimonials' },
        { name: 'FAQs', href: '/faq' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-navy-light/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-ivory flex items-center gap-2">
              <span className="text-gold-light text-3xl">✦</span> 
              Goyal Palace
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-ivory/90 hover:text-gold-light transition-colors font-medium text-sm tracking-wide uppercase">
                      {link.name} <ChevronDown size={14} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                        {link.items?.map(sub => (
                          <Link 
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-2 text-sm text-navy hover:bg-gold/10 hover:text-gold-dark transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href!}
                    className="text-ivory/90 hover:text-gold-light transition-colors font-medium text-sm tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            <Link 
              to="/booking"
              className="px-6 py-2 bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold rounded hover:shadow-lg hover:shadow-gold/20 transition-all uppercase tracking-wide text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ivory hover:text-gold-light focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-navy-light shadow-xl border-t border-ivory/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name}>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full px-3 py-3 text-ivory/90 hover:text-gold-light hover:bg-white/5 border-b border-ivory/5 text-base uppercase tracking-wide"
                  >
                    {link.name} <ChevronDown size={16} className={`transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.name && (
                    <div className="bg-navy/50 pl-6 py-2">
                      {link.items?.map(sub => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-3 py-3 text-ivory/80 hover:text-gold text-sm tracking-wide"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href!}
                  className="block px-3 py-3 text-ivory/90 hover:text-gold-light hover:bg-white/5 border-b border-ivory/5 text-base uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-6 px-3 pb-4">
              <Link 
                to="/booking"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold rounded tracking-wide text-sm uppercase"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
