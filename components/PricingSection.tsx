import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styles

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$99</p>
                        <ul className="card-features">
                            <li>High-quality skincare</li>
                            <li>Free shipping</li>
                            <li>24/7 customer support</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$199</p>
                        <ul className="card-features">
                            <li>All Basic features</li>
                            <li>Exclusive discounts</li>
                            <li>Personalized consultations</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$299</p>
                        <ul className="card-features">
                            <li>All Premium features</li>
                            <li>VIP access to events</li>
                            <li>Custom skincare routine</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;