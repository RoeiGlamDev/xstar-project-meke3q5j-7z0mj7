import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #ff66b2; // pink color
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3385; // darker pink on hover
  }

  &:disabled {
    background-color: #ff99cc; // light pink when disabled
    cursor: not-allowed;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;