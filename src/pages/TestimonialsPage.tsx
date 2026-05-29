import PageHeader from '../components/PageHeader';
import TestimonialsPreview from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader 
        title="Guest Experiences" 
        subtitle="Read the stories and reviews of travelers who made Hotel Goyal Palace their home in Agra."
        image="https://images.unsplash.com/photo-1542314831-c53cd3816002?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <TestimonialsPreview />
      
      <section className="py-24 bg-ivory text-center">
         <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">Leave Your Trace</h2>
             <p className="text-gray-600 font-light text-lg mb-8">
               We cherish the feedback of our guests. If you have recently stayed with us, we would be honored to hear about your experience. Your insights help us continually refine our luxury standard.
             </p>
             <button className="py-3 px-8 bg-gold-dark text-white font-semibold uppercase tracking-widest text-sm rounded shadow hover:bg-gold transition-colors">
               Write a Review
             </button>
         </div>
      </section>
    </>
  );
}
