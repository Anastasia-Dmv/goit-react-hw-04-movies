import React, { Component } from 'react';

export default class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.author}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h5>We don't have any reviews for this movie</h5>
        )}
      </div>
    );
  }
}
