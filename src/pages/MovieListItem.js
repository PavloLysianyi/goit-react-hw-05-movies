import React from 'react';

const MovieListItem = ({ movie }) => {
  const defaultImage = 'https://placekitten.com/200/300';

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>
        Рік випуску: {movie.release_date && movie.release_date.substring(0, 4)}
      </p>
      <p>User Score: {movie.vote_average}</p>
      <p>Overview: {movie.overview}</p>
      {movie.genres && (
        <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      )}
      {movie.poster_path && (
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImage
          }
          alt={`${movie.title} Poster`}
        />
      )}
    </div>
  );
};

export default MovieListItem;
