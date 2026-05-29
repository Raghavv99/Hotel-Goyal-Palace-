import PageHeader from '../components/PageHeader';
import { MapPin, Train, Plane, Bus } from 'lucide-react';

export default function LocationPage() {
  return (
    <>
      <PageHeader 
        title="Location & Connectivity" 
        subtitle="Unbeatably convenient logistics for seamless travel in and out of the city."
        image="https://images.unsplash.com/photo-1629814696209-4f4fac3ca9e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-navy mb-4 flex items-center gap-3">
                   <Train className="text-gold-dark" size={28} /> Railway Station
                </h3>
                <p className="text-gray-600 font-light">
                  We are located barely 2 minutes (1.2 km) from Agra Cantt Railway Station, the primary transit hub. This makes us the ideal choice for travelers arriving by train (Gatimaan Express, Shatabdi, etc.).
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-navy mb-4 flex items-center gap-3">
                   <Plane className="text-gold-dark" size={28} /> Airports
                </h3>
                <p className="text-gray-600 font-light">
                  Agra Airport (AGR) is approximately 6 km away. For international travelers, we provide luxury taxi pickups directly from New Delhi (DEL), which is a smooth 3-hour drive via the Yamuna Expressway.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-navy mb-4 flex items-center gap-3">
                   <Bus className="text-gold-dark" size={28} /> Bus Terminals
                </h3>
                <p className="text-gray-600 font-light">
                  ISBT (Inter State Bus Terminal) is 10 km away, and Idgah Bus Stand is only 1.5 km away, offering excellent connectivity to neighboring cities in Uttar Pradesh and Rajasthan.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
               <div className="h-full min-h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.80806466487!2d77.99427389869274!3d27.165681123490715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747190d7159ae9%3A0xcda6b00ecbd66e04!2sAgra%20Cantt.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[500px]"
                ></iframe>
               </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex items-center gap-6">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-gold flex-shrink-0">
               <MapPin size={32} />
            </div>
            <div>
               <h4 className="text-xl font-serif text-navy font-bold mb-1">Navigation Address</h4>
               <p className="text-gray-600">Hotel Goyal Palace, Near Railway Station, Agra Cantt, Sultan Pura, Idgah Colony, Agra, Uttar Pradesh 282001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
