import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiKey } from './api';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = searchTerm
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
          : `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

        const response = await fetch(endpoint);

        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.results);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {};

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
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
                {movie.release_date && (
                  <p>Year: {new Date(movie.release_date).getFullYear()}</p>
                )}
                <p>User Score: {movie.vote_average}</p>
                <p>Overview: {movie.overview}</p>
                {movie.genres && (
                  <p>
                    Genres: {movie.genres.map(genre => genre.name).join(', ')}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
