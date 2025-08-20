import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#D5006D' }}>Luxury FashionTV Cosmetics</h1>
      <h2 style={{ color: '#D5006D' }}>Welcome to our elegant cosmetics website!</h2>
      <p>
        Our mission is to provide high-end beauty products that embody luxury and sophistication.
      </p>
      <h3 style={{ color: '#D5006D' }}>Features:</h3>
      <ul>
        <li>Elegant pink and white color scheme</li>
        <li>High-quality product images</li>
        <li>User-friendly navigation</li>
        <li>Exclusive offers and promotions</li>
        <li>Responsive design for all devices</li>
      </ul>
      <h3 style={{ color: '#D5006D' }}>Getting Started:</h3>
      <ol>
        <li>Clone the repository</li>
        <li>Install dependencies with <code>npm install</code></li>
        <li>Run the application with <code>npm start</code></li>
      </ol>
      <h3 style={{ color: '#D5006D' }}>Contributing:</h3>
      <p>
        We welcome contributions! Please submit a pull request or open an issue for any suggestions.
      </p>
      <h3 style={{ color: '#D5006D' }}>License:</h3>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default README;