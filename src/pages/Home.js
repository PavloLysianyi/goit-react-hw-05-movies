import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../components/api';
import MovieList from './MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMoviesData();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
