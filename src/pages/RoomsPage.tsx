import PageHeader from '../components/PageHeader';
import { rooms } from '../data';
import { Users, CheckCircle2, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoomsPage() {
  return (
    <>
      <PageHeader 
        title="Rooms & Suites" 
        subtitle="Unwind in our exquisitely appointed accommodations designed for ultimate relaxation."
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div key={room.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100`}>
                <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden group">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-navy">{room.name}</h2>
                    <div className="text-right">
                      <div className="text-2xl font-serif text-gold-dark">{room.price}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Per Night</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100 uppercase tracking-wide">
                    <span className="flex items-center gap-2"><Users size={18} className="text-gold" /> Up to {room.capacity}</span>
                    <span className="flex items-center gap-2"><Maximize size={18} className="text-gold" /> 350 sq.ft</span>
                  </div>
                  
                  <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                    {room.description} The room boasts elegant furnishings, a serene atmosphere, and all the modern conveniences you need for a restful stay after a long day of exploring Agra.
                  </p>
                  
                  <h4 className="text-navy font-semibold uppercase tracking-widest text-sm mb-4">Room Amenities</h4>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700 font-light">
                        <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    <div className="flex items-center gap-3 text-gray-700 font-light">
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0" /> Fast WiFi
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 font-light">
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0" /> 24x7 Room Service
                    </div>
                  </div>
                  
                  <Link 
                    to="/booking"
                    className="inline-block text-center py-4 px-8 bg-navy text-white hover:bg-gold hover:text-navy-dark transition-colors font-semibold uppercase tracking-widest text-sm rounded shadow-lg"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-navy-light text-ivory p-12 rounded-2xl text-center border border-gold/20">
             <h3 className="text-3xl font-serif mb-4 text-gold-light">Need Help Choosing?</h3>
             <p className="text-lg font-light text-gray-300 mb-8 max-w-2xl mx-auto">
               Our reservation specialists are available 24/7 to help you select the perfect room for your stay in Agra.
             </p>
             <a href="tel:+917895544395" className="inline-block text-center py-4 px-10 border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-colors font-semibold uppercase tracking-widest text-sm rounded">
               Call +91 78955 44395
             </a>
          </div>

        </div>
      </section>
    </>
  );
}
