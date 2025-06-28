import React from 'react';
import styled from 'styled-components';

// ProductCard.js - My custom card component for displaying products
// Last updated: June 23, 2025
//
// I tried a few different card designs before settling on this one.
// The hover effect was inspired by Material Design, but I added my own twist
// with the transform and shadow changes.
//
// FIXME: Long product titles sometimes overflow on mobile - might need to adjust the height
// or font size for smaller screens.
const ProductCard = ({ product, isFavorite, onToggleFavorite }) => {
  const { id, title, price, image, category, description } = product;
  
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={image} alt={title} />
      </ImageContainer>
      <ProductCategory>{category}</ProductCategory>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>${price.toFixed(2)}</ProductPrice>
      <ProductDescription>{description.substring(0, 100)}...</ProductDescription>
      <FavoriteButton 
        onClick={() => onToggleFavorite(id)}
        data-favorite={isFavorite}
      >
        {isFavorite ? '❤️ Remove from favorites' : '🤍 Add to favorites'}
      </FavoriteButton>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const ProductCategory = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  display: inline-block;
  margin: 15px 15px 0;
  text-transform: capitalize;
`;

const ProductTitle = styled.h3`
  margin: 10px 15px;
  font-size: 1.1rem;
  color: #333;
  height: 2.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0d6efd;
  margin: 0 15px 10px;
`;

const ProductDescription = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0 15px 15px;
  flex-grow: 1;
`;

const FavoriteButton = styled.button`
  background-color: ${props => props['data-favorite'] ? '#f8d7da' : '#e2e3e5'};
  color: ${props => props['data-favorite'] ? '#842029' : '#41464b'};
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  margin: 0 15px 15px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${props => props['data-favorite'] ? '#f5c2c7' : '#d3d4d5'};
  }
`;

export default ProductCard;
