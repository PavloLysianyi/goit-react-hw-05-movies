import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../components/api';
import MovieListItem from './MovieListItem';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

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

  return (
    <div>
      <Link to="/movies">Назад</Link>
      <MovieListItem movie={movieDetails} />

      <div>
        <h3>Additional Information</h3>

        <Link to={`./cast`}>Cast</Link>
        <Link to={`./reviews`}>Reviews</Link>

        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
