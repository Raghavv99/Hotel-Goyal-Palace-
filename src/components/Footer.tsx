import { Facebook, Instagram, Twitter, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { policies } from '../data/policies';

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1 border-r border-ivory/10 pr-8">
            <h3 className="text-3xl font-serif text-ivory mb-6 flex items-center gap-2">
              <span className="text-gold">✦</span> 
              Goyal Palace
            </h3>
            <p className="text-gray-400 font-light mb-6 text-sm leading-relaxed">
              Experience the pinnacle of royal hospitality near Agra Cantt Railway Station. Where traditional warmth meets modern luxury.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://wa.me/917895544395" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold-light mb-6 uppercase tracking-widest pl-4 border-l-[3px] border-royal-maroon">Quick Links</h4>
            <ul className="space-y-3 font-light text-gray-400">
              <li><Link to="/about" className="hover:text-gold-light transition-colors flex justify-between group">About Us <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
              <li><Link to="/rooms" className="hover:text-gold-light transition-colors flex justify-between group">Our Rooms <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
              <li><Link to="/facilities" className="hover:text-gold-light transition-colors flex justify-between group">Facilities <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
              <li><Link to="/gallery" className="hover:text-gold-light transition-colors flex justify-between group">Gallery <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
              <li><Link to="/attractions" className="hover:text-gold-light transition-colors flex justify-between group">Attractions <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
              <li><Link to="/faq" className="hover:text-gold-light transition-colors flex justify-between group">FAQ <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold-light mb-6 uppercase tracking-widest pl-4 border-l-[3px] border-royal-maroon">Contact</h4>
            <ul className="space-y-3 font-light text-gray-400 text-sm">
              <li>Near Agra Cantt Railway Station</li>
              <li>Sultan Pura, Idgah Colony</li>
              <li>Agra, Uttar Pradesh 282001</li>
              <li className="pt-2 text-gold"><a href="tel:+917895544395">+91 78955 44395</a></li>
              <li>info@hotelgoyalpalace.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold-light mb-6 uppercase tracking-widest pl-4 border-l-[3px] border-royal-maroon">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4 text-sm">Subscribe to receive exclusive offers and updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-navy border border-gray-700 px-4 py-3 text-ivory placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-3 uppercase tracking-wider text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Legal Center Section */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="w-5 h-5 text-gold" />
            <h4 className="text-xl font-serif text-ivory">Legal Center</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
            {policies.map((policy) => (
              <Link 
                key={policy.id} 
                to={`/legal/${policy.id}`}
                className="text-gray-400 hover:text-gold transition-colors text-xs font-light"
              >
                {policy.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-[#050814] py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Hotel Goyal Palace. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Designed with <span className="text-gold">✦</span> for Luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
