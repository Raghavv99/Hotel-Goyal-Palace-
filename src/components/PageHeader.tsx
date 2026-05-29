export default function PageHeader({ title, subtitle, image }: { title: string, subtitle: string, image: string }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory mb-4 drop-shadow-lg leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mx-auto drop-shadow">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
