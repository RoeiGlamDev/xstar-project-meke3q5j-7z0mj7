import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxSection.css'; // Assuming you have a CSS file for styles

const ParallaxSection: React.FC = () => {
    return (
        <Parallax
            bgImage="/path/to/your/image.jpg" // Replace with your image path
            bgImageAlt="Luxury Cosmetics"
            strength={500}
        >
            <div style={{ height: '500px' }}>
                <div className="parallax-content">
                    <h1 className="title">Elevate Your Beauty</h1>
                    <p className="description">Discover the elegance of FashionTV Cosmetics.</p>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxSection;