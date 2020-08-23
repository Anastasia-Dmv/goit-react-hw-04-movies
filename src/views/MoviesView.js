import Axios from 'axios';
import MoviesList from '../components/moviesList/MoviesLIst';
import React, { Component } from 'react';

//const API_KEY = '67b139b801704dedc647c4541346877d';
//https://api.themoviedb.org/3/movie/550?api_key=67b139b801704dedc647c4541346877d

export default class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=67b139b801704dedc647c4541346877d`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}
