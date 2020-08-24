import React, { Component } from 'react';
// import Axios from 'axios';
import Cast from '../components/cast/Cast';
import { request } from '../components/services';

export default class CastView extends Component {
  state = {
    id: this.props.match.params.id.slice(1),
    movieCast: [],
  };

  async componentDidMount() {
    const response = await request(this.state.id);

    // const response = await Axios.get(
    //   `https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=67b139b801704dedc647c4541346877d`,
    // );
    this.setState({ movieCast: [...response.data.cast] });
    console.log('response', this.state.movieCast);
  }
  render() {
    const { movieCast } = this.state;
    return (
      <>
        <Cast movieCast={movieCast} />
      </>
    );
  }
}
