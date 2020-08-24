import Axios from 'axios';
import routes from '../utils/routes';
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import CastView from './CastView';
import ReviewsView from './ReviewsView';
import MovieDetailsPage from '../components/movieDetailsPage/MovieDetailsPage';

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
        <MovieDetailsPage movie={movie} changeLocation={this.changeLocation} />

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
        </section>
      </>
    );
  }
}
