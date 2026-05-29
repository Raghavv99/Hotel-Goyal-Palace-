import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold-dark uppercase tracking-widest text-sm font-semibold">Reach Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              Get in <span className="text-gold-dark italic">Touch</span>
            </h2>
            <p className="text-gray-600 mb-12 font-light text-lg">
              We look forward to welcoming you to Hotel Goyal Palace. For inquiries, reservations, or special requests, please contact our dedicated team.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark flex-shrink-0 border border-gold/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-navy mb-1">Hotel Address</h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Hotel Goyal Palace, Near Railway Station,<br />
                    Agra Cantt, Sultan Pura, Idgah Colony,<br />
                    Agra, Uttar Pradesh 282001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark flex-shrink-0 border border-gold/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-navy mb-1">Contact Number</h4>
                  <p className="text-gray-600 font-light mb-1">
                    <a href="tel:+917895544395" className="hover:text-gold-dark transition-colors">+91 78955 44395</a>
                  </p>
                  <span className="text-xs font-semibold text-royal-maroon uppercase tracking-wider bg-royal-maroon/5 px-2 py-1 rounded">24/7 Available</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark flex-shrink-0 border border-gold/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-navy mb-1">Email Inquiry</h4>
                  <p className="text-gray-600 font-light">
                    <a href="mailto:info@hotelgoyalpalace.com" className="hover:text-gold-dark transition-colors">info@hotelgoyalpalace.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark flex-shrink-0 border border-gold/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-navy mb-1">Check-in / Check-out</h4>
                  <p className="text-gray-600 font-light">
                    Check-in: 12:00 PM<br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div 
              className="rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")' }}
            >
              <div className="absolute inset-0 bg-navy/90 z-0"></div>
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-maroon/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif text-ivory mb-2">Send us a Message</h3>
                <p className="text-gray-400 font-light text-sm mb-8">Fields marked with * are required.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject *</label>
                      <input 
                        type="text" 
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="Reservation Inquiry"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message *</label>
                    <textarea 
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none custom-scrollbar"
                      placeholder="How can we assist you today?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy-dark font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[500px] bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.80806466487!2d77.99427389869274!3d27.165681123490715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747190d7159ae9%3A0xcda6b00ecbd66e04!2sAgra%20Cantt.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Hotel Goyal Palace Location"
        ></iframe>
      </div>
    </section>
  );
}
