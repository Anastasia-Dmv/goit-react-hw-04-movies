import React, { Component } from "react";
import Axios from "axios";
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
export default class CastView extends Component {
  state = {
    id: this.props.match.params.id.slice(1),
    movieCast: [],
  };

  async componentDidMount() {
    console.log("YEESSSSS");
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=67b139b801704dedc647c4541346877d`
    );
    this.setState({ movieCast: [...response.data.cast] });
    console.log("response", this.state.movieCast);
  }
  render() {
    return (
      <>
        <p>Yes</p>

        {this.state.movieCast && (
          <ul>
            {this.state.movieCast.map((actor) => (
              <li key={actor.cast_id}>
                {actor.name}
                <img
                  width="100"
                  alt={actor.name}
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                />
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
