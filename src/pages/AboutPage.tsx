import PageHeader from '../components/PageHeader';
import AboutPreview from '../components/About';
import Stats from '../components/Stats';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Our Royal Legacy" 
        subtitle="Creating unforgettable memories through exceptional hospitality and uncompromising luxury."
        image="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <AboutPreview />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-6 font-light leading-relaxed text-lg">
                At the core of Hotel Goyal Palace is a deep-seated commitment to 'Athithi Devo Bhava' (The Guest is equivalent to God). A sanctuary of elegance amidst the historic city of Agra, we strive to exceed every expectation.
              </p>
              <p className="text-gray-600 mb-6 font-light leading-relaxed text-lg">
                Our vision is continuous elevation of the hospitality experience. By combining world-class amenities with the legendary warmth of Indian culture, we have created an environment that feels simultaneously grand and comfortably familiar. Every detail, from the selection of our fine linens to the curation of our culinary offerings, is meticulously designed to provide you with a regal experience.
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Our commitment to our guests extends beyond the walls of our rooms. We aim to be your gateway to Agra, connecting you to the soul of the city while providing a peaceful retreat you can look forward to returning to. We continuously train our staff to anticipate your needs and offer a service that is intuitive, respectful, and genuinely caring.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospitality 1" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospitality 2" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-ivory text-center">
         <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl font-serif mb-6 text-gold-light">Message from the Management</h2>
           <div className="text-gold-light text-6xl font-serif mb-6 opacity-30">"</div>
           <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
             Welcome to Hotel Goyal Palace. It is our immense pleasure to invite you to experience hospitality that stems from the heart. Our team is dedicated to crafting a stay that not only meets but transcends your expectations, making your visit to the city of the Taj truly unforgettable. We look forward to hosting you.
           </p>
           <h4 className="text-lg font-semibold tracking-widest uppercase">The Management Team</h4>
         </div>
      </section>
      
      <Stats />
    </>
  );
}
