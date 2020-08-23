import Axios from 'axios';
//import routes from '../routes';

import React, { Component } from 'react';
//import MovieDetailsPage from '../components/movieDetailsPage/MovieDetailsPage';

export default class MovieDetailesView extends Component {
  state = {
    id: Number(this.props.match.params),
    movieInfo: {},
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
      //`https://api.themoviedb.org/3/movie/550?api_key=67b139b801704dedc647c4541346877d`,
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=67b139b801704dedc647c4541346877d&language=en-US`,
      //`https://api.themoviedb.org/3/movie/${movieId}?api_key=<<67b139b801704dedc647c4541346877>>d&language=en-US`,
    );
    this.setState({ movieInfo: { ...response.data } });
    //this.setState({ movie: response.data });
  }
  render() {
    const { movieInfo } = this.state;
    return (
      <div>
        <div className="card">
          <div className="moviePreview">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
              alt={movieInfo.title}
              width="150"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{movieInfo.title}</h5>
            <p>{movieInfo.overview}</p>
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
    );
  }
}
