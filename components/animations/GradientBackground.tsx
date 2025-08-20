import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientBackgroundStyled = styled.div`
  height: 100vh; // Full height of the viewport
  background: linear-gradient(270deg, #ffcccb, #ffffff); // Pink to white gradient
  background-size: 400% 400%; // For animation effect
  animation: ${gradientAnimation} 15s ease infinite; // Animation properties
`;

const GradientBackground: React.FC = ({ children }) => {
  return <GradientBackgroundStyled>{children}</GradientBackgroundStyled>; // Render children
};

export default GradientBackground;