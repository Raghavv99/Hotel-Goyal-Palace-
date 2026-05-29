import { attractions } from '../data';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Attractions() {
  return (
    <section id="attractions" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold"></div>
            <span className="text-gold-dark uppercase tracking-widest text-sm font-semibold">Location</span>
            <div className="w-12 h-[1px] bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4 leading-tight">
            Explore <span className="text-gold-dark italic">Nearby Attractions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Conveniently located near Agra Cantt Railway Station, giving you easy access to the city's most famous heritage sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5] shadow-lg">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-2xl font-serif text-white leading-none">{attraction.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-gold-light text-sm font-semibold mb-2">
                    <MapPin size={14} />
                    {attraction.distance} away
                  </div>
                  <p className="text-ivory/80 text-sm line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/attractions" className="inline-block py-3 px-8 text-gold-dark border border-gold-dark hover:bg-gold-dark hover:text-white transition-colors font-semibold uppercase tracking-widest text-sm rounded shadow">
            View All Attractions Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
