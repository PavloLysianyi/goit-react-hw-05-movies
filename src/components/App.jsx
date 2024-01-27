import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';

const Home = React.lazy(() => import('../pages/Home'));
const Movies = React.lazy(() => import('../pages/Movies'));
const MovieDetails = React.lazy(() => import('../pages/MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
