//import Axios from 'axios';
import routes from '../utils/routes';
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import CastView from './CastView';
import ReviewsView from './ReviewsView';
import MovieDetailsPage from '../components/movieDetailsPage/MovieDetailsPage';
import { responseMovieDetails } from '../components/services';

export default class MovieDetailesView extends Component {
  state = {
    id: this.props.match.params.movieId.slice(1),
    movie: [],
    // from: '',
  };

  async componentDidMount() {
    const response = await responseMovieDetails(this.state.id);

    this.setState({
      movie: {
        ...response.data,
      },
    });
  }

  changeLocation = () => {
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    }
    this.props.history.push({
      pathname: routes.movies,
      state: this.props.location.state.from,
    });
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
                  state: location.state,
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
                  state: location.state,
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
