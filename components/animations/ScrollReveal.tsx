'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 200,
    });

    sr.reveal('.reveal', { origin: 'bottom' }); // Customize reveal settings here
  }, []);

  return <div className="reveal">{children}</div>;
};

export default ScrollRevealComponent;