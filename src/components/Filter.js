import React from 'react';
import styled from 'styled-components';

// Filter.js - My implementation of filtering and sorting controls
// 
// I debated whether to split this into two separate components (CategoryFilter and SortControl)
// but decided to keep them together since they're related functionality.
// 
// The dropdown styling took me forever to get right across browsers!
// Chrome and Firefox render select elements so differently...
const Filter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  sortOrder,
  onSortChange
}) => {
  return (
    <FilterContainer>
      <FilterGroup>
        <FilterLabel>Filter by Category:</FilterLabel>
        <CategorySelect 
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </CategorySelect>
      </FilterGroup>
      
      <FilterGroup>
        <FilterLabel>Sort by Price:</FilterLabel>
        <SortSelect 
          value={sortOrder} 
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </SortSelect>
      </FilterGroup>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
  color: #495057;
`;

const CategorySelect = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: white;
  min-width: 200px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const SortSelect = styled(CategorySelect)``;

export default Filter;
