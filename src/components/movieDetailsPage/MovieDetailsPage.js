import React, { Component } from 'react';

export default class MovieDetailsPage extends Component {
  render() {
    const { movie, changeLocation } = this.props;
    return (
      <div>
        <section className="movieDetails">
          <button
            type="button"
            onClick={changeLocation}
            className="movieDetails__button"
          >
            Go back
          </button>
          <hr />
          <div className="card">
            <div className="moviePreview">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                width="250"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">
                {`${movie.title} (${movie.release_date})`}
              </h3>
              <p>User score: {movie.vote_average * 10}%</p>

              <h4>Overview</h4>
              <p>{movie.overview}</p>

              {movie.genres && <h4>Genres</h4>}
              {movie.genres && (
                <ul className="moviesList">
                  {movie.genres.map(genre => (
                    <li className="moviesListItem" key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
