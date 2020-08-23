import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import AppBar from './appBar/AppBar';
import MovieDetailesView from '../views/MovieDetailesView';
const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route exact path={routes.movies} component={MoviesView} />
      <Route exact path="/movies/:movieId" component={MovieDetailesView} />
      {/* <Route path={routes.cast} component={Cast} />
      <Route path={routes.reviews} component={Reviews} /> */}
    </Switch>
  </>
);

export default App;
