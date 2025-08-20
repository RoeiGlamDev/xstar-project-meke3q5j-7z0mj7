import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">Why Choose Our Cosmetics?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3 className="feature-title">Luxurious Ingredients</h3>
                        <p className="feature-description">Our products are crafted with the finest ingredients for a lavish experience.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Elegant Packaging</h3>
                        <p className="feature-description">Each item is beautifully packaged, perfect for gifting or personal use.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Cruelty-Free</h3>
                        <p className="feature-description">We are committed to ethical practices and do not test on animals.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Sustainable Practices</h3>
                        <p className="feature-description">Our brand focuses on sustainability, using eco-friendly materials.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;