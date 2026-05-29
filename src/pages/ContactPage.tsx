import PageHeader from '../components/PageHeader';
import ContactPreview from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We remain at your complete disposal for any inquiries or reservations."
        image="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <ContactPreview />
    </>
  );
}
