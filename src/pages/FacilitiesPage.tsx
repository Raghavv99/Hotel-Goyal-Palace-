import PageHeader from '../components/PageHeader';
import FacilitiesPreview from '../components/Facilities';

export default function FacilitiesPage() {
  const detailedFacilities = [
    {
      title: '24/7 Front Desk & Concierge',
      desc: 'Our dedicated front desk team is available around the clock to assist you with check-ins, check-outs, local area information, travel arrangements, and any special requests you may have.',
      img: 'https://images.unsplash.com/photo-1551882547-ff40c0d5b5df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'In-Room Dining',
      desc: 'Savor delicious culinary creations from the comfort of your room. Our room service menu features a wide selection of local Indian delicacies and international favorites, available 24/7.',
      img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Travel & Transport Assistance',
      desc: 'Need a taxi to the Taj Mahal or a pick-up from Agra Cantt Station? Our travel desk provides secure and comfortable transportation options, guided tours, and itinerary planning.',
      img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Impeccable Housekeeping',
      desc: 'Experience fresh, clean, and sanitized environments every day. Our rigorous housekeeping standards ensure your room remains a pristine sanctuary throughout your stay.',
      img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Facilities & Services" 
        subtitle="Experience world-class amenities and holistic services designed for your ultimate comfort."
        image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <FacilitiesPreview />

      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-navy mb-4">Detailed Services</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">Going above and beyond to ensure unparalleled convenience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {detailedFacilities.map((fac, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-64 overflow-hidden relative">
                   <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-navy/20"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-royal-maroon mb-4">{fac.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
