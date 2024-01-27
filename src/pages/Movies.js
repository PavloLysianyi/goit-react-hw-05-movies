import React, { useState } from 'react';
import { fetchSearchMovies } from '../components/api';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async searchTerm => {
    try {
      const data = await fetchSearchMovies(searchTerm);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default Movies;
