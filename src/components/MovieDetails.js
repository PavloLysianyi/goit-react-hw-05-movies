import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

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
      <Link to="/movies">Назад</Link>
      <h2>{movieDetails.title}</h2>
      <p>
        Рік випуску:{' '}
        {movieDetails.release_date && movieDetails.release_date.substring(0, 4)}
      </p>
      <p>User Score: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>

      {movieDetails.genres && (
        <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      )}

      {movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={`${movieDetails.title} Poster`}
        />
      )}

      <div>
        <h3>Additional Information</h3>
        <button onClick={() => handleToggleDetails('cast')}>
          {showCast ? 'Hide Cast' : 'Show Cast'}
        </button>
        {showCast && (
          <Suspense fallback={<div>Loading Cast...</div>}>
            <Cast movieId={movieId} />
          </Suspense>
        )}

        <button onClick={() => handleToggleDetails('reviews')}>
          {showReviews ? 'Hide Reviews' : 'Show Reviews'}
        </button>
        {showReviews && (
          <Suspense fallback={<div>Loading Reviews...</div>}>
            <Reviews movieId={movieId} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
