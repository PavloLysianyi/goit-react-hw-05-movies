import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const apiKey = 'a489cf0433455f138fd59ea00245d30d';
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setTrendingMovies(data.results);
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.length > 0 ? (
          trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/goit-react-hw-05-movies/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))
        ) : (
          <p>No trending movies available</p>
        )}
      </ul>
    </div>
  );
};

export default Home;