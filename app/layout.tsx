import React from 'react';
import './layout.css'; // Assuming you have a CSS file for styles

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">FashionTV Cosmetics</h1>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;