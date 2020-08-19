import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { getMovies, deleteMovie } from "./services/fakeMovieService";
import { Component } from "react";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  renderRows() {
    const { movies } = this.state;
    console.log(movies.length);
    return (
      <tbody>
        {movies.map((movies) => (
          <tr key={movies._id}>
            <td scope="row">{movies.title}</td>
            <td>{movies.genre.name}</td>
            <td>{movies.numberInStock}</td>
            <td>{movies.dailyRentalRate}</td>
            <td>
              <button
                onClick={this.deleteMovie_(movies._id)}
                className="btn btn-danger"
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in databse</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">genere</th>
              <th scope="col">stock</th>
              <th scope="col">rate</th>
              <th scope="col"></th>
            </tr>
          </thead>

          {this.renderRows()}
        </table>
      </div>
    );
  }
}

export default Movies;
