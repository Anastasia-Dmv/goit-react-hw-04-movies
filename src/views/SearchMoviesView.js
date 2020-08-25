import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../utils/parseQueryString';
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

      this.setState({
        matchedMovies: [...response.data.results],
      });
    }
  }
  async componentDidUpdate(prevProps, nextProps) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      const response = await responseSearchQuery(nextQuery);

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
