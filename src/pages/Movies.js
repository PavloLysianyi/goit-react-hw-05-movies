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
      <h2>{searchResults.length > 0 ? 'Search Results' : 'Trending Movies'}</h2>
      <SearchForm onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <MovieList movies={searchResults} basePath="/movies" />
      )}
    </div>
  );
};

export default Movies;
