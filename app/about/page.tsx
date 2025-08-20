import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ color: '#ff69b4' }}>About FashionTV Cosmetics</h1>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#ff69b4' }}>Our Mission</h2>
          <p>
            At FashionTV Cosmetics, we believe in empowering individuals through luxury beauty products that enhance their natural beauty.
          </p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#ff69b4' }}>Our Products</h2>
          <p>
            Our collection features high-quality cosmetics that are designed for elegance and sophistication, perfect for any occasion.
          </p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#ff69b4' }}>Sustainability</h2>
          <p>
            We are committed to sustainability, using eco-friendly materials and practices in our production processes.
          </p>
        </section>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #ff69b4' }}>
        <p>&copy; {new Date().getFullYear()} FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;