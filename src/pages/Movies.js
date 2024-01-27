import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../components/api';

import MovieList from './MovieList';
import SearchForm from './SearchForm';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = value => {
    setSearchParams({ search: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchTerm = searchParams.get('search');

        if (searchTerm !== '') {
          const data = await fetchSearchMovies(searchTerm);
          setSearchResults(data);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {searchParams.has('search') && <MovieList movies={searchResults} />}
    </div>
  );
};

export default Movies;
