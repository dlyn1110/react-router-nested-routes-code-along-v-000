// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
  </div>;

)

export default MoviesPage
