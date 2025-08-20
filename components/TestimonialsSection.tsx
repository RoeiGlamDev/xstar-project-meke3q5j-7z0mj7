import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: 'Sophia Loren',
    quote: 'The best cosmetics I have ever used! Truly luxurious.',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Gigi Hadid',
    quote: 'FashionTV cosmetics elevate my beauty routine to a new level.',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Zendaya',
    quote: 'I love the elegance and quality of these products.',
    image: '/images/testimonial3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;