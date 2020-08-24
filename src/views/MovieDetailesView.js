import Axios from "axios";
import routes from "../routes";
import { NavLink, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import CastView from "./CastView";
import ReviewsView from "./ReviewsView";

//import MovieDetailsPage from '../components/movieDetailsPage/MovieDetailsPage';

export default class MovieDetailesView extends Component {
  state = {
    id: this.props.match.params.movieId.slice(1),
    movie: [],
    //movie: [],
    // title: null,
    // userScore: null,
    // overview: null,

    // id: null,
    // imgUrl: null,
  };

  async componentDidMount() {
    //const { movieId } = this.props.match.params;
    //console.log('movieId', Number(movieId.slice(1)));
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=67b139b801704dedc647c4541346877d&language=en-US`
    );
    this.setState({ movie: { ...response.data } });
    //this.setState({ movie: response.data });
  }
  render() {
    const { movie, id } = this.state;
    const { location } = this.props;
    return (
      <>
        <div>
          <div className="card">
            <div className="moviePreview">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                width="150"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">
                {`${movie.title} (${movie.release_date})`}
              </h2>
              <p>User score: {movie.vote_average * 10}%</p>

              <h3>Overview</h3>
              <p>{movie.overview}</p>

              {movie.genres && <h3>Genres</h3>}
              {movie.genres && (
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/* <MovieDetailsPage
          imgUrl={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
        /> */}
          {/* <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>{overview}</p> */}
        </div>

        <hr />
        <p>Additional information</p>
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
      </>
    );
  }
}
