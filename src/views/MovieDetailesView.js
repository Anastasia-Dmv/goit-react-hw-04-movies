import Axios from 'axios';
import routes from '../routes';
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import CastView from './CastView';
import ReviewsView from './ReviewsView';

export default class MovieDetailesView extends Component {
  state = {
    id: this.props.match.params.movieId.slice(1),
    movie: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=67b139b801704dedc647c4541346877d&language=en-US`,
    );
    this.setState({ movie: { ...response.data } });
  }

  changeLocation = () => {
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    }
    this.props.history.push(routes.movies);
  };
  render() {
    const { movie, id } = this.state;
    const { location } = this.props;
    return (
      <>
        <section className="movieDetails">
          <button
            type="button"
            onClick={this.changeLocation}
            className="movieDetails__button"
          >
            Go back
          </button>
          <hr />
          <div className="card">
            <div className="moviePreview">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                width="250"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">
                {`${movie.title} (${movie.release_date})`}
              </h3>
              <p>User score: {movie.vote_average * 10}%</p>

              <h4>Overview</h4>
              <p>{movie.overview}</p>

              {movie.genres && <h4>Genres</h4>}
              {movie.genres && (
                <ul className="moviesList">
                  {movie.genres.map(genre => (
                    <li className="moviesListItem" key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <hr />
        <section className="additionalInfo">
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${this.props.match.url}${routes.cast}`,
                  state: { from: location },
                  params: id,
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${this.props.match.url}${routes.reviews}`,
                  state: { from: location },
                  params: id,
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/movies/:id/cast" component={CastView} />
            <Route exact path="/movies/:id/reviews" component={ReviewsView} />
          </Switch>
          {/* <Route
          exact
          path={`${this.props.match.url}${routes.cast}`}
          component={CastView}
        /> */}
        </section>
      </>
    );
  }
}
