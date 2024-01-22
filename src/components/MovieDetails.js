// MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CastAndReviews from './CastAndReviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'a489cf0433455f138fd59ea00245d30d';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={`${movieDetails.title} Poster`}
      />

      {/* Додаємо кнопки для переходу на сторінки Cast та Reviews */}
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

      {/* Додаємо роут для відображення акторського складу та відгуків */}
      <CastAndReviews movieId={movieId} />
    </div>
  );
};

export default MovieDetails;
