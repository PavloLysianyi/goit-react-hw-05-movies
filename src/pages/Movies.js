import React, { useState, useEffect } from 'react';
import { fetchSearchMovies } from '../components/api';
import MovieList from './MovieList';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await fetchSearchMovies(searchTerm);
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchMoviesData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>{searchTerm ? 'Search Results' : 'Trending Movies'}</h2>
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => {}}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <MovieList movies={searchResults} basePath="/movies" />
      )}
    </div>
  );
};

export default Movies;
