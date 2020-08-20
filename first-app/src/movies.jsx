import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";
import { getMovies } from "./services/fakeMovieService";
import { Component } from "react";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie);
    let filered = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: filered });
  };

  renderTable = () => {
    const { length: count } = this.state.movies;

    if (count == 0) return <p> the database is empty</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in databse</p>
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

          <tbody>
            {this.state.movies.map((movies) => (
              <tr key={movies._id}>
                <td>{movies.title}</td>
                <td>{movies.genre.name}</td>
                <td>{movies.numberInStock}</td>
                <td>{movies.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movies)}
                    className="btn btn-danger"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <div>{this.renderTable()}</div>
      </div>
    );
  }
}

export default Movies;
