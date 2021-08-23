import React, { Component } from "react";
import { apiKey } from "./config";
import axios from "axios";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const mid = this.props.match.params.movieId;
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${apiKey}`;
    axios.get(singleMovieUrl).then((response) => {
      console.log(response.data);
      this.setState({
        movie: response.data,
      });
    });
  }

  render() {
    if (this.state.movie.title === undefined) {
      return <h1>Loading...</h1>;
    }
    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return (
      <div>
        <img src={imageUrl} alt="poster" />
        <p>{movie.title}</p>
        <p>Budget: {movie.budget}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Description: {movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
