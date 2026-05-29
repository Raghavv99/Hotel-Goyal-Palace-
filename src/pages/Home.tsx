import Hero from '../components/Hero';
import AboutPreview from '../components/About';
import RoomsPreview from '../components/Rooms';
import FacilitiesPreview from '../components/Facilities';
import Stats from '../components/Stats';
import GalleryPreview from '../components/Gallery';
import AttractionsPreview from '../components/Attractions';
import TestimonialsPreview from '../components/Testimonials';
import ContactPreview from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <RoomsPreview />
      <FacilitiesPreview />
      <Stats />
      <GalleryPreview />
      <AttractionsPreview />
      <TestimonialsPreview />
      <ContactPreview />
    </>
  );
}
