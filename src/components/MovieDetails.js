import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'a489cf0433455f138fd59ea00245d30d';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,reviews`
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

  const handleToggleDetails = type => {
    if (type === 'cast') {
      setShowCast(!showCast);
      setShowReviews(false);
    } else if (type === 'reviews') {
      setShowReviews(!showReviews);
      setShowCast(false);
    }
  };

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      {movieDetails.release_date && (
        <p>Year: {new Date(movieDetails.release_date).getFullYear()}</p>
      )}
      <p>User Score: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
      {movieDetails.genres && (
        <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      )}

      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={`${movieDetails.title} Poster`}
      />

      <button onClick={() => handleToggleDetails('cast')}>
        {showCast ? 'Hide Cast' : 'Show Cast'}
      </button>
      {showCast && <Cast movieId={movieId} />}

      <button onClick={() => handleToggleDetails('reviews')}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </button>
      {showReviews && <Reviews movieId={movieId} />}

      <Link to="/movies">Go Back</Link>
    </div>
  );
};

export default MovieDetails;
