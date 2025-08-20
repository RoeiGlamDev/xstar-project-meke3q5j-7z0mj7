import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to FashionTV Cosmetics</h1>
                <p className="about-description">
                    Discover the essence of luxury with our exclusive range of cosmetics designed for the modern, sophisticated individual. 
                    Our products embody elegance and quality, ensuring you feel confident and beautiful.
                </p>
                <p className="about-description">
                    At FashionTV Cosmetics, we believe in the power of beauty and self-expression. 
                    Our commitment to excellence and innovation sets us apart in the world of luxury cosmetics.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;