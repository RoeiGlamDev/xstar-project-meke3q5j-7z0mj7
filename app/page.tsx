import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', padding: '20px' }}>
      <header style={{ backgroundColor: '#ff69b4', padding: '10px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Luxury FashionTV Cosmetics</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#ff69b4' }}>Discover Elegance</h2>
          <p>
            Explore our exclusive range of high-end cosmetics designed for the modern luxury lover.
          </p>
        </section>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#ff69b4' }}>Featured Products</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ border: '1px solid #ff69b4', padding: '10px', borderRadius: '8px' }}>
              <h3>Luxury Lipstick</h3>
              <p>$45.00</p>
            </div>
            <div style={{ border: '1px solid #ff69b4', padding: '10px', borderRadius: '8px' }}>
              <h3>Silk Foundation</h3>
              <p>$60.00</p>
            </div>
            <div style={{ border: '1px solid #ff69b4', padding: '10px', borderRadius: '8px' }}>
              <h3>Glow Highlighter</h3>
              <p>$35.00</p>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: '#ff69b4', padding: '10px', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;