import PageHeader from '../components/PageHeader';
import AttractionsPreview from '../components/Attractions';

export default function AttractionsPage() {
  return (
    <>
      <PageHeader 
        title="Discover Agra" 
        subtitle="A guide to the magnificent historical landmarks just minutes away from our hotel."
        image="https://images.unsplash.com/photo-1564507592208-027041be1005?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AttractionsPreview />

      <section className="py-24 bg-navy text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-gold-light">Traveler's Guide</h2>
            <p className="font-light text-gray-300 max-w-3xl mx-auto">Insider tips for exploring the city of love.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-serif text-gold mb-4">Taj Mahal Tips</h3>
              <ul className="space-y-3 font-light text-gray-300 text-sm">
                <li>• Best visited at sunrise for stunning views and fewer crowds.</li>
                <li>• Closed on Fridays.</li>
                <li>• Only water bottles and phones are allowed inside.</li>
                <li>• Purchase tickets online to avoid long queues.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-serif text-gold mb-4">Local Markets</h3>
              <ul className="space-y-3 font-light text-gray-300 text-sm">
                <li>• Sadar Bazaar: Famous for leather goods and street food.</li>
                <li>• Kinari Bazaar: Best for traditional jewelry and fabrics.</li>
                <li>• Don't forget to try 'Petha', the famous local sweet.</li>
                <li>• Bargaining is expected in local street markets.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-serif text-gold mb-4">Transport Guide</h3>
              <ul className="space-y-3 font-light text-gray-300 text-sm">
                <li>• Auto-rickshaws are convenient for short trips.</li>
                <li>• Pre-paid taxis are available at the railway station.</li>
                <li>• E-rickshaws are eco-friendly options near monuments.</li>
                <li>• Our front desk can arrange private guided tours.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
