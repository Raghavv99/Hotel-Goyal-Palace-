import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-navy-light text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Quote className="absolute top-0 right-10 text-gold/10 w-40 h-40 transform -translate-y-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold-light"></div>
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              What Our <span className="text-gold italic">Guests</span> Say
            </h2>
            <p className="text-gray-400 font-light mb-8">
              Discover why guests consistently choose Hotel Goyal Palace for their stay in Agra.
            </p>
            
            <div className="flex gap-4">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-12 h-1 transition-colors ${idx === activeIndex ? 'bg-gold' : 'bg-white/20'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 z-10">
            <div className="relative h-[300px]">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 bg-navy p-8 md:p-12 rounded-2xl border border-gold/10 transition-all duration-700 ease-in-out ${
                    idx === activeIndex 
                      ? 'opacity-100 translate-x-0 pointer-events-auto' 
                      : 'opacity-0 translate-x-10 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? 'fill-gold text-gold' : 'text-gray-600'} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-gray-200 indent-8">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center font-serif text-xl border border-gold/30">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gold-light text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
