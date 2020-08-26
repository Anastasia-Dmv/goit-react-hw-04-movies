import React, { Component, lazy, Suspense } from 'react';

import { request } from '../components/services';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AsyncCast = lazy(() =>
  import('../components/cast/Cast' /* webpackChunkName:"cast" */),
);
export default class CastView extends Component {
  state = {
    id: this.props.match.params.id.slice(1),
    movieCast: [],
  };

  async componentDidMount() {
    const response = await request(this.state.id);

    this.setState({ movieCast: [...response.data.cast] });
    console.log('response', this.state.movieCast);
  }
  render() {
    const { movieCast } = this.state;
    return (
      <>
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          }
        >
          <AsyncCast movieCast={movieCast} />
        </Suspense>
      </>
    );
  }
}
