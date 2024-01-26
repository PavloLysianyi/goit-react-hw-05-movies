import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, basePath }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${basePath}/${movie.id}`}>
            <h3>{movie.title}</h3>
            {movie.release_date && (
              <p>Year: {new Date(movie.release_date).getFullYear()}</p>
            )}
            <p>User Score: {movie.vote_average}</p>
            <p>Overview: {movie.overview}</p>
            {movie.genres && (
              <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
