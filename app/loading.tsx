import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background-color: white; // Background color
`;

const Loader = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid pink; // Loader color
  border-top: 10px solid white; // Loader color
  border-radius: 50%;
  animation: ${loadingAnimation} 1s infinite; // Animation
`;

const Loading: React.FC = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default Loading;