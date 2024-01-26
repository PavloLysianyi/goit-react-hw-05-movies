export const apiKey = 'a489cf0433455f138fd59ea00245d30d';

export const fetchMovieCast = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      return data.cast;
    }
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      const filteredMovies = data.results.filter(movie => movie.title);
      return filteredMovies;
    }
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchSearchMovies = async searchTerm => {
  try {
    const endpoint = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      : `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

    const response = await fetch(endpoint);

    if (response.ok) {
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
