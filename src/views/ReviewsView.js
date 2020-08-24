import React, { Component } from 'react';
import Axios from 'axios';
import Reviews from '../components/reviews/Reviews';

export default class ReviewsView extends Component {
  state = {
    id: this.props.match.params.id.slice(1),
    reviews: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}/reviews?api_key=67b139b801704dedc647c4541346877d&language=en-US&page=1`,
    );
    this.setState({ reviews: [...response.data.results] });
    console.log('this.state.reviews', response.data.results);
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <Reviews reviews={reviews} />
      </>
    );
  }
}
