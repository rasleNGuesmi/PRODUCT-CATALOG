import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

// Components
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

// Main component for the Product Catalog App
// Created on: June 23, 2025
// 
// NOTE TO SELF: This component got pretty complex with all the state management.
// Maybe consider useReducer if it grows any further? For now, useState works fine.
//
// I spent way too much time getting the favorites feature to work properly with localStorage!
// But I'm happy with how the filter/sort/search all work together now.
//
// TODO: Consider adding pagination if the API returns too many products in the future

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        
        // Load favorites from localStorage if available
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
        
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when category, sort order, or search term changes
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort products
    if (sortOrder === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, sortOrder, searchTerm]);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle sort order change
  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <ControlsContainer>
          <SearchBar onSearch={handleSearch} />
          <Filter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange}
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
          />
        </ControlsContainer>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        {isLoading ? (
          <LoadingMessage>Loading products...</LoadingMessage>
        ) : (
          <ProductList 
            products={filteredProducts} 
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </MainContent>
    </AppContainer>
  );
}

// Styled components
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const MainContent = styled.main`
  margin-top: 20px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
`;

const ErrorMessage = styled.div`
  background-color: #ffdddd;
  color: #ff0000;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export default App;
