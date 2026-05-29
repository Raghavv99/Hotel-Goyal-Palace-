export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  capacity: string;
}

export interface Facility {
  id: string;
  name: string;
  iconName: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
}
