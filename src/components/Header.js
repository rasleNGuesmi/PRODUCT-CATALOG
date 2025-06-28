import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Product Catalog</Title>
      <Subtitle>Browse our collection of products</Subtitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin: 0;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin: 10px 0 0;
  font-size: 1.1rem;
`;

export default Header;
