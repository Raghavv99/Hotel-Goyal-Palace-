import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-navy/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(10, 17, 40, 0.8) 100%)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <span className="text-gold-light tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6 block drop-shadow-md">
          Welcome to Hotel Goyal Palace
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-6 drop-shadow-lg leading-tight">
          Experience <span className="text-gradient-gold">Royal Hospitality</span> in the Heart of Agra
        </h1>
        <p className="text-lg md:text-2xl text-ivory/90 font-light mb-10 max-w-3xl mx-auto drop-shadow">
          Comfort, Luxury & Convenience Near Agra Cantt Railway Station.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/booking"
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold rounded hover:shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wider text-sm md:text-base w-full sm:w-auto"
          >
            Book Your Stay
          </Link>
          <a 
            href="tel:+917895544395"
            className="px-8 py-4 bg-transparent border-2 border-ivory text-ivory font-semibold rounded hover:bg-white/10 transition-all uppercase tracking-wider text-sm md:text-base flex items-center justify-center gap-2 w-full sm:w-auto glass"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-ivory/70 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-ivory to-transparent"></div>
      </div>
    </section>
  );
}
