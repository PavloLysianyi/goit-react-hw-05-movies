import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from './api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={`${actor.name} Profile`}
                />
                <p>{actor.name}</p>
              </>
            ) : (
              <>
                <img src={actor.profile_path} alt={`${actor.name} Profile`} />
                <p>{actor.name}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
