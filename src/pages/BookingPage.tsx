import PageHeader from '../components/PageHeader';
import BookingPreview from '../components/Booking';

export default function BookingPage() {
  return (
    <>
      <PageHeader 
        title="Make a Reservation" 
        subtitle="Secure your luxury stay with our seamless online booking system."
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <BookingPreview />
    </>
  );
}
