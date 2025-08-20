import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2); // semi-transparent white
  border-radius: 15px;
  backdrop-filter: blur(10px); // glass effect
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #fff; // white text
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff69b4; // pink color
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #fff; // white text
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;