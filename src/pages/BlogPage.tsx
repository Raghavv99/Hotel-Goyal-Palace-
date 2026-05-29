import PageHeader from '../components/PageHeader';
import { Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'A Perfect Weekend Itinerary for Agra',
      excerpt: 'Planning a short trip to the city of the Taj? Here is how to maximize your 48 hours in Agra.',
      img: 'https://images.unsplash.com/photo-1564507592208-027041be1005?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Oct 12, 2023',
      author: 'Hotel Goyal Palace'
    },
    {
      title: 'The Culinary Heritage of Mughal Agra',
      excerpt: 'Discover the rich flavors and traditional recipes that define the unique cuisine of Agra.',
      img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Sep 28, 2023',
      author: 'Hotel Goyal Palace'
    },
    {
      title: 'Beyond the Taj: Hidden Gems of Agra',
      excerpt: 'Explore the serene Mehtab Bagh, the intricate Itmad-ud-Daula, and the bustling local bazaars.',
      img: 'https://images.unsplash.com/photo-1585507310892-7f72200af6fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Sep 10, 2023',
      author: 'Hotel Goyal Palace'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Traveler's Journal" 
        subtitle="Insights, guides, and stories to inspire your next journey to Agra."
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 bg-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group">
                <div className="h-56 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-gold-dark text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded">Travel Guide</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs tracking-wider text-gray-500 uppercase mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-navy mb-4 leading-tight group-hover:text-royal-maroon transition-colors">{post.title}</h3>
                  <p className="text-gray-600 font-light mb-6 border-b border-gray-100 pb-6">{post.excerpt}</p>
                  <button className="text-gold-dark font-semibold uppercase tracking-widest text-sm hover:text-navy transition-colors flex items-center gap-2">
                     Read Article <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
