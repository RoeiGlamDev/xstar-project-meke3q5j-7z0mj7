import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1>Luxury FashionTV Cosmetics</h1>
                <p>Indulge in elegance and beauty.</p>
            </header>
            <section className="pricing-plans">
                <div className="plan">
                    <h2>Basic Plan</h2>
                    <p>$29.99/month</p>
                    <ul>
                        <li>Access to basic products</li>
                        <li>Monthly beauty tips</li>
                    </ul>
                    <button className="btn">Choose Plan</button>
                </div>
                <div className="plan">
                    <h2>Premium Plan</h2>
                    <p>$49.99/month</p>
                    <ul>
                        <li>Access to all products</li>
                        <li>Personalized beauty consultations</li>
                    </ul>
                    <button className="btn">Choose Plan</button>
                </div>
                <div className="plan">
                    <h2>Luxury Plan</h2>
                    <p>$99.99/month</p>
                    <ul>
                        <li>All Premium features</li>
                        <li>Exclusive access to new launches</li>
                        <li>VIP customer support</li>
                    </ul>
                    <button className="btn">Choose Plan</button>
                </div>
            </section>
            <footer className="pricing-footer">
                <p>© 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;