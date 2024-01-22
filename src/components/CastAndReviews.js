import React, { useState, useEffect } from 'react';

const CastAndReviews = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const apiKey = 'a489cf0433455f138fd59ea00245d30d';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setCast(data.cast);
        }
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    const fetchMovieReviews = async () => {
      try {
        const apiKey = 'a489cf0433455f138fd59ea00245d30d';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setReviews(data.results);
        }
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieCast();
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastAndReviews;
