import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background-color: #fff; // White background
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px; // Set width for floating element
  height: 200px; // Set height for floating element
  background-color: #ff69b4; // Pink background
  border-radius: 50%; // Circular shape
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Subtle shadow
  animation: float 3s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0); // Start and end position
    }
    50% {
      transform: translatey(-20px); // Move up
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement />
      <FloatingElement style={{ left: '50%', transform: 'translateX(-50%)' }} />
      <FloatingElement style={{ right: '0' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;