import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

// ProductList.js - Where the magic happens!
//
// This component took me the longest to get right. I tried using Flexbox at first
// but switched to CSS Grid for better control of the layout.
//
// The empty state message was added after user testing - people were confused
// when their searches returned no results without any feedback.
//
// TODO: Maybe add a subtle animation when products are filtered/sorted?
const ProductList = ({ products, favorites, onToggleFavorite }) => {
  if (products.length === 0) {
    return <EmptyMessage>No products found matching your criteria.</EmptyMessage>;
  }

  return (
    <ProductGrid>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ProductGrid>
  );
};

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export default ProductList;
