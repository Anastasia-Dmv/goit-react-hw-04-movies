//import Axios from 'axios';
//import MoviesList from '../components/moviesList/MoviesLIst';
import React, { Component, lazy, Suspense } from 'react';
import { responseMovieList } from '../components/services';

const AsyncMovieList = lazy(() =>
  import(
    '../components/moviesList/MoviesLIst' /* webpackChunkName:"movie-list"*/
  ),
);
export default class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await responseMovieList();
    // const response = await Axios.get(
    //   `https://api.themoviedb.org/3/trending/movie/week?api_key=67b139b801704dedc647c4541346877d`,
    // );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <section className="moviesList-section">
        <Suspense fallback={<h1>Loading... movieList</h1>}>
          <AsyncMovieList movies={this.state.movies} />
        </Suspense>
      </section>
    );
  }
}
