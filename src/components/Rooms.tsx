import { rooms } from '../data';
import { Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-navy-light relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-ivory"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold"></div>
            <span className="text-gold-dark uppercase tracking-widest text-sm font-semibold">Accommodations</span>
            <div className="w-12 h-[1px] bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4 leading-tight">
            Our Luxury <span className="text-gold-dark italic">Rooms & Suites</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Each room is thoughtfully designed to provide an unparalleled experience of elegance and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                  <h3 className="text-2xl font-serif text-white">{room.name}</h3>
                  <div className="bg-gold-light text-navy-dark px-3 py-1 rounded text-sm font-semibold">
                    {room.price} <span className="text-xs font-normal">/ night</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 border-b border-gray-100 pb-4">
                  <Users size={16} className="text-gold-dark" />
                  <span>Up to {room.capacity}</span>
                </div>
                
                <p className="text-gray-600 mb-6 font-light line-clamp-2">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-gold" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/booking"
                  className="block w-full text-center py-3 bg-navy text-white hover:bg-gold hover:text-navy-dark transition-colors font-semibold uppercase tracking-wider text-sm rounded"
                >
                  Book This Room
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
