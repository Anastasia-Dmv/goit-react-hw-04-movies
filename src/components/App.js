import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";
//import HomeView from "../views/HomeView";
import MoviesView from "../views/MoviesView";
import AppBar from "./appBar/AppBar";
import MovieDetailesView from "../views/MovieDetailesView";
import SearchMoviesView from "../views/SearchMoviesView";
//import CastView from "../views/CastView";
const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={MoviesView} />
      <Route exact path={routes.movies} component={SearchMoviesView} />
      <Route path="/movies/:movieId" component={MovieDetailesView} />
      {/* <Route path={routes.cast} component={CastView} /> */}
      {/* <Route path={routes.reviews} component={Reviews} /> */}
    </Switch>
  </>
);

export default App;
