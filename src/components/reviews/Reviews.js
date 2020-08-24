import React, { Component } from 'react';

export default class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews && (
          <ul>
            {reviews.map(review => (
              <li key={review.author}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
