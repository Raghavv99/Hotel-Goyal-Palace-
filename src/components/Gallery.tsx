import { Link } from 'react-router-dom';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', span: 'col-span-2 md:col-span-2 row-span-2 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', span: 'col-span-2 md:col-span-1 row-span-1 md:row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold-dark uppercase tracking-widest text-sm font-semibold">Visuals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
              A Glimpse into <span className="text-gold-dark italic">Luxury</span>
            </h2>
          </div>
          <Link to="/gallery" className="text-gold-dark hover:text-royal-maroon font-semibold uppercase tracking-wider text-sm border-b border-gold-dark pb-1 transition-colors leading-none">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-[200px] md:auto-rows-[320px]">
          {images.map((image, idx) => (
            <div key={idx} className={`relative overflow-hidden group rounded-2xl shadow-lg border border-gold/10 ${image.span}`}>
              <img 
                src={image.src} 
                alt={`Hotel Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
