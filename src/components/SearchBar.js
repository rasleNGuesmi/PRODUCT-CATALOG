import React, { useState } from 'react';
import styled from 'styled-components';

// My custom SearchBar component
// 
// I wanted to make this search bar both functional and good-looking.
// Initially tried to add auto-complete but it got too complex for this project.
// 
// The blue button matches our overall color scheme - considered making it
// green but blue looks better with our overall design.
const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };
  
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SearchButton type="submit">
        Search
      </SearchButton>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ced4da;
  border-right: none;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const SearchButton = styled.button`
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #0b5ed7;
  }
`;

export default SearchBar;
