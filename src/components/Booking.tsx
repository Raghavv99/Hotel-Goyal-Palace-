import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'deluxe',
    name: '',
    phone: '',
    email: '',
    request: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };


  return (
    <section id="booking" className="py-24 bg-ivory relative">
      {isSubmitted && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded shadow-lg font-semibold tracking-wider">
          Booking Request Sent Successfully!
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gold/10">
          <div className="bg-navy p-8 md:p-12 text-center text-ivory relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 relative z-10 text-gold-light">Reserve Your Stay</h2>
            <p className="text-gray-300 font-light relative z-10">Book directly with us for the best rates and exclusive offers.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Check-in Date</label>
                <input 
                  type="date" 
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Check-out Date</label>
                <input 
                  type="date" 
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Guests</label>
                <select 
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700 bg-white"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Room Type</label>
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700 bg-white"
                >
                  <option value="executive">Executive Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="premium">Premium Room</option>
                  <option value="family">Family Suite</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2 border-t border-gray-100 pt-8 mt-4">
                <h3 className="text-lg font-serif text-royal-maroon mb-2">Guest Details</h3>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+91 00000 00000"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700" 
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700" 
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-navy-light uppercase tracking-wide">Special Requests</label>
                <textarea 
                  name="request"
                  rows={4}
                  placeholder="Any special requests or preferences..."
                  value={formData.request}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-gray-700 resize-none" 
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-bold rounded uppercase tracking-widest hover:shadow-xl hover:shadow-gold/20 transition-all text-lg"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
