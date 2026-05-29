import PageHeader from '../components/PageHeader';
import { useState } from 'react';

const galleryItems = [
  { id: 1, category: 'exterior', src: 'https://images.unsplash.com/photo-1542314831-c53cd3816002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 2, category: 'rooms', src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 3, category: 'rooms', src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 4, category: 'reception', src: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 5, category: 'amenities', src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 6, category: 'exterior', src: 'https://images.unsplash.com/photo-1551882547-ff40c0d5b5df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 7, category: 'surroundings', src: 'https://images.unsplash.com/photo-1564507592208-027041be1005?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 8, category: 'rooms', src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <PageHeader 
        title="Visual Journey" 
        subtitle="Explore the elegant interiors, grand exteriors, and premium amenities of Hotel Goyal Palace."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['all', 'exterior', 'rooms', 'reception', 'amenities', 'surroundings'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full uppercase tracking-widest text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-gold-dark text-white shadow-lg' 
                    : 'bg-white text-navy hover:bg-gold/20 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative overflow-hidden group rounded-xl shadow-md aspect-[4/3] bg-gray-200">
                <img 
                  src={item.src} 
                  alt={`Gallery ${item.category}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl border-b border-gold pb-1">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
