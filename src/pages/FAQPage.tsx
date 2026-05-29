import PageHeader from '../components/PageHeader';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What are the check-in and check-out times?", a: "Standard check-in time is 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges." },
  { q: "Is the hotel far from the Taj Mahal?", a: "We are approximately 6.5 km from the Taj Mahal, which is about a 15-20 minute drive depending on traffic." },
  { q: "Do you provide airport or railway station transfers?", a: "Yes, we provide safe and comfortable transfer services. Please inform our front desk of your travel details 24 hours in advance." },
  { q: "Is breakfast included in the room rate?", a: "Many of our room packages include a complimentary buffet breakfast. Please verify your specific booking details." },
  { q: "Is Wi-Fi available at the hotel?", a: "Yes, complimentary high-speed Wi-Fi is available in all rooms and public areas." },
  { q: "Do you have parking facilities?", a: "Yes, we offer secure, complimentary parking for all our guests with 24/7 CCTV surveillance." },
  { q: "Are pets allowed in the hotel?", a: "To maintain our hygiene and allergy standards, we currently do not allow pets on the property." },
  { q: "Can I book a guided tour of Agra through the hotel?", a: "Absolutely. Our travel desk can arrange personalized tours, tickets, and professional guides for all major attractions." },
  { q: "Do the rooms have air conditioning?", a: "Yes, all our rooms and suites are fully air-conditioned with individual climate control." },
  { q: "Is there a restaurant on-site?", a: "Yes, we have a multi-cuisine dining area offering a refined selection of Indian, Mughlai, and Continental dishes." },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common inquiries to help you plan your perfect stay with us."
        image="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 bg-ivory text-navy hover:bg-gold/10 transition-colors text-left"
                >
                  <span className="font-serif text-lg font-medium">{faq.q}</span>
                  <ChevronDown className={`transform transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                {openIdx === idx && (
                  <div className="p-5 bg-white text-gray-600 font-light border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif text-navy mb-4">Still have questions?</h3>
            <p className="text-gray-600 font-light mb-6">Our guest relations team is ready to assist you.</p>
            <a href="/contact" className="inline-block py-3 px-8 bg-navy text-white hover:bg-gold hover:text-navy-dark transition-colors font-semibold uppercase tracking-widest text-sm rounded">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
