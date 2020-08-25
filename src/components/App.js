import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../utils/routes';
import MoviesView from '../views/MoviesView';
import AppBar from './appBar/AppBar';
import MovieDetailesView from '../views/MovieDetailesView';
import SearchMoviesView from '../views/SearchMoviesView';

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={MoviesView} />
      <Route exact path={routes.movies} component={SearchMoviesView} />
      <Route path={routes.moviesDetails} component={MovieDetailesView} />
      {/* <Route path={routes.cast} component={CastView} /> */}
      {/* <Route path={routes.reviews} component={Reviews} /> */}
    </Switch>
  </>
);

export default App;
