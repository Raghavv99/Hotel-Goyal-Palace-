import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-tl-full rounded-tr-full overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Hotel Reception" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
              <img 
                src="https://images.unsplash.com/photo-1629814696209-4f4fac3ca9e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Agra Cantt" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold pb-4 pr-4"></div>
            <div className="absolute -bottom-4 right-8 w-24 h-24 border-b-2 border-r-2 border-gold pt-4 pl-4"></div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold-dark uppercase tracking-widest text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              A Legacy of <span className="text-gold-dark italic">Luxury</span> & Comfort in Agra
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
              Located just steps away from the majestic Agra Cantt Railway Station, 
              Hotel Goyal Palace stands as a beacon of premium hospitality. We blend 
              traditional Indian warmth with contemporary luxury to offer an unforgettable 
              stay for both leisure tourists and business travelers.
            </p>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Our family-friendly atmosphere ensures that every guest feels like royalty. 
              From the moment you step into our elegantly designed lobby, you'll experience 
              a seamless blend of comfort, style, and personalized service tailored just for you.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-2xl font-serif text-royal-maroon mb-2">Prime Location</h4>
                <p className="text-gray-500 text-sm">Minutes from Agra Cantt Station and major tourist landmarks.</p>
              </div>
              <div>
                <h4 className="text-2xl font-serif text-royal-maroon mb-2">Premium Stay</h4>
                <p className="text-gray-500 text-sm">Experience 5-star amenities in a warm, welcoming environment.</p>
              </div>
            </div>

            <Link 
              to="/rooms" 
              className="inline-flex items-center gap-2 text-navy-dark font-semibold uppercase tracking-wider text-sm hover:text-gold transition-colors pb-1 border-b-2 border-gold"
            >
              Explore Our Rooms
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
