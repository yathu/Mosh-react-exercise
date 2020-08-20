import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { getMovies } from "./services/fakeMovieService";
import { Component } from "react";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    let filered = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies: filered });
  };

  renderRows() {
    const { movies } = this.state;
    console.log(movies.length);
    return (
      <tbody>
        {movies.map((movies) => (
          <tr key={movies._id}>
            <td>{movies.title}</td>
            <td>{movies.genre.name}</td>
            <td>{movies.numberInStock}</td>
            <td>{movies.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => this.handleDelete(movies._id)}
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

  renderTable = () => {
    if (this.state.movies.length > 0) {
      return (
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
      );
    }
  };

  render() {
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in databse</p>
        <div>{this.renderTable()}</div>
      </div>
    );
  }
}

export default Movies;
