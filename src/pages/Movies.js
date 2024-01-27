import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../components/api';

import MovieList from './MovieList';
import SearchForm from './SearchForm';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = value => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm !== '') {
          setSearchParams({ search: searchTerm });
          const data = await fetchSearchMovies(searchTerm);
          setSearchResults(data);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [searchParams, searchTerm, setSearchParams]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {searchTerm !== '' && <MovieList movies={searchResults} />}
    </div>
  );
};

export default Movies;
