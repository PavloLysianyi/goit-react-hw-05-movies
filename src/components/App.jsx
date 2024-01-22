import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route
              path="/movies/:movieId"
              element={
                <MovieDetails>
                  <Route index element={<Cast />} />
                  <Route path="reviews" element={<Reviews />} />
                </MovieDetails>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
