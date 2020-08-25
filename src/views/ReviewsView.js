import React, { Component, lazy, Suspense } from 'react';
import { responseReviews } from '../components/services';

const AsyncReviews = lazy(() =>
  import('../components/reviews/Reviews' /* webpackChunkName: "reviews"*/),
);
export default class ReviewsView extends Component {
  state = {
    id: this.props.match.params.id.slice(1),
    reviews: [],
  };

  async componentDidMount() {
    const response = await responseReviews(this.state.id);
    this.setState({ reviews: [...response.data.results] });
    console.log('this.state.reviews', response.data.results);
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <AsyncReviews reviews={reviews} />
        </Suspense>
      </>
    );
  }
}
