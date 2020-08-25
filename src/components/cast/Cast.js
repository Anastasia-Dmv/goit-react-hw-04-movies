import React, { Component } from 'react';

export default class Cast extends Component {
  render() {
    const { movieCast } = this.props;
    return (
      <div>
        {movieCast && (
          <ul>
            {movieCast.map(actor => (
              <li className="movieItem" key={actor.cast_id}>
                {actor.name}
                <img
                  width="100"
                  alt={actor.name}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                      : 'https://dummyimage.com/100x150/615e61/fff.jpg&text=No+photo'
                  }
                />
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
