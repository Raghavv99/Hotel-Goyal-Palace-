import { Attraction, Facility, Room, Testimonial } from './types';

export const rooms: Room[] = [
  {
    id: 'executive',
    name: 'Executive Room',
    description: 'Perfect blend of comfort and luxury for business travelers, featuring modern amenities and elegant decor.',
    price: 'â¹4,500',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    features: ['Premium Bedding', 'City View', 'Work Desk', 'Mini Bar'],
    capacity: '2 Guests'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious and beautifully appointed rooms designed for a relaxing stay with premium furnishings.',
    price: 'â¹5,500',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    features: ['King Size Bed', 'Lounge Area', 'Smart TV', 'Luxury Bath'],
    capacity: '2 Guests'
  },
  {
    id: 'premium',
    name: 'Premium Room',
    description: 'Experience unparalleled luxury in our highly sought-after premium rooms with exclusive services.',
    price: 'â¹6,500',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    features: ['Panoramic Views', 'Walk-in Closet', 'Espresso Machine', '24/7 Butler'],
    capacity: '2 Guests'
  },
  {
    id: 'family',
    name: 'Family Suite',
    description: 'Generously sized suites ideal for families, offering distinct living and sleeping areas for maximum comfort.',
    price: 'â¹8,500',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    features: ['Two Bedrooms', 'Living Room', 'Dining Area', 'Kitchenette'],
    capacity: '4 Guests'
  }
];

export const facilities: Facility[] = [
  { id: 'wifi', name: 'Free High-Speed WiFi', iconName: 'Wifi' },
  { id: 'ac', name: 'Air Conditioned Rooms', iconName: 'Wind' },
  { id: 'family-room', name: 'Family Rooms', iconName: 'Users' },
  { id: 'desk', name: '24x7 Front Desk', iconName: 'Phone' },
  { id: 'room-service', name: 'Room Service', iconName: 'Coffee' },
  { id: 'parking', name: 'Parking Facility', iconName: 'Car' },
  { id: 'security', name: 'CCTV Security', iconName: 'ShieldCheck' },
  { id: 'housekeeping', name: 'Daily Housekeeping', iconName: 'Sparkles' },
  { id: 'power', name: 'Power Backup', iconName: 'Zap' },
  { id: 'train', name: 'Near Railway Station', iconName: 'Train' }
];

export const attractions: Attraction[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    distance: '6.5 km',
    description: 'One of the Seven Wonders of the World, this magnificent ivory-white marble mausoleum is a symbol of eternal love.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'agra-fort',
    name: 'Agra Fort',
    distance: '4.5 km',
    description: 'A UNESCO World Heritage site and a prominent historical fort in the city of Agra.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Agra_03-2016_10_Agra_Fort.jpg'
  },
  {
    id: 'cantt-station',
    name: 'Agra Cantt Station',
    distance: '1.2 km',
    description: 'The main railway station in Agra, making our hotel exceptionally convenient for travelers.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Agra_Cantt.jpg'
  },
  {
    id: 'fatehpur-sikri',
    name: 'Fatehpur Sikri',
    distance: '36 km',
    description: 'A fascinating ghost city built by Emperor Akbar, known for its stunning red sandstone architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'An exceptional stay! The proximity to Agra Cantt made my business trip so much easier. The rooms are luxurious and the staff is incredibly hospitable.',
    role: 'Business Traveler'
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'We stayed in the Family Suite and it was perfect. The royal decor, the prompt room service, and the cleanliness exceeded our expectations.',
    role: 'Tourist'
  },
  {
    id: '3',
    name: 'Amit Sharma',
    rating: 4,
    text: 'A premium experience at a very reasonable price point. The ambiance of Hotel Goyal Palace truly lives up to its name.',
    role: 'Local Guest'
  }
];
