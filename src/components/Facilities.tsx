import { facilities } from '../data';
import * as Icons from 'lucide-react';

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-navy text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold"></div>
            <span className="text-gold-light uppercase tracking-widest text-sm font-semibold">Amenities</span>
            <div className="w-12 h-[1px] bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Premium <span className="text-gold-light italic">Facilities</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            We offer world-class amenities to ensure your stay is as comfortable and convenient as possible.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6">
          {facilities.map((facility) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[facility.iconName];
            return (
              <div key={facility.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mb-4 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {Icon && <Icon size={32} strokeWidth={1.5} />}
                </div>
                <h4 className="text-sm md:text-base font-medium tracking-wide">{facility.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
