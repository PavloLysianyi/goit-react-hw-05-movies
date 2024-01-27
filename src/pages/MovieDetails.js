import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../components/api';
import MovieListItem from './MovieListItem';

const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
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
      <MovieListItem movie={movieDetails} />

      <div>
        <h3>Additional Information</h3>

        <Link to="#" onClick={() => handleToggleDetails('cast')}>
          Cast
        </Link>

        <Link to="#" onClick={() => handleToggleDetails('reviews')}>
          Reviews
        </Link>

        {(showCast || showReviews) && (
          <Suspense fallback={<div>Loading...</div>}>
            {showCast && <Cast movieId={movieId} />}
            {showReviews && <Reviews movieId={movieId} />}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
