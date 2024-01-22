// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Додайте імпорт
import Movies from './Movies'; // Додайте імпорт
import MovieDetails from './MovieDetails'; // Додайте імпорт
import CastAndReviews from './CastAndReviews'; // Додайте імпорт

const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <div>
        {/* Додаємо хедер з кнопками */}
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastAndReviews type="cast" />} />
              <Route
                path="reviews"
                element={<CastAndReviews type="reviews" />}
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
