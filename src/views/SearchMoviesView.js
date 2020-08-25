import React, { Component } from 'react';
import getQueryParams from '../utils/parseQueryString';
//import Axios from 'axios';
import { Link } from 'react-router-dom';
import { responseSearchQuery } from '../components/services';

export default class SearchMoviesView extends Component {
  state = {
    value: '',
    matchedMovies: [],
  };

  async componentDidMount() {
    const { query: params } = getQueryParams(this.props.location.search);
    console.log('params', params);
    if (params) {
      const response = await responseSearchQuery(params);

      //   const response = await Axios.get(
      //     ` https://api.themoviedb.org/3/search/movie?&query=${params}&api_key=67b139b801704dedc647c4541346877d&language=en-US&page=1&include_adult=false`,
      //   );

      this.setState({
        matchedMovies: [...response.data.results],
      });
    }
  }
  async componentDidUpdate(prevProps, nextProps) {
    //const params = getQueryParams(this.props.location.search);

    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      const response = await responseSearchQuery(nextQuery);
      //   const response = await Axios.get(
      //     ` https://api.themoviedb.org/3/search/movie?&query=${nextQuery}&api_key=67b139b801704dedc647c4541346877d&language=en-US&page=1&include_adult=false`,
      //   );
      console.log('params', response);
      this.setState({ matchedMovies: [...response.data.results] });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('this.state.value', this.state.value);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <section className="searchForm">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="SearchFormInput"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className=" search movieDetails__button">
            Search
          </button>
        </form>
        {this.state.matchedMovies && (
          <ul>
            {this.state.matchedMovies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/:${movie.id}`,
                    state: { from: this.props.location },
                    params: movie.id,
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
