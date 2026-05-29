export default function Stats() {
  const stats = [
    { value: '50+', label: 'Luxury Rooms' },
    { value: '10k+', label: 'Happy Guests' },
    { value: '4.8', label: 'Average Rating' },
    { value: '2', label: 'Minutes to Station' },
  ];

  return (
    <section className="py-20 relative bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-c53cd3816002?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}>
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gold/20">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center ${idx % 2 === 0 ? 'border-none md:border-solid' : 'border-none'}`}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-light mb-2">
                {stat.value}
              </div>
              <div className="text-ivory/80 text-sm md:text-base tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
