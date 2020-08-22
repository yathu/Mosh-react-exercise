import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  incrementCount = () => {
    const value = this.state.count + 1;
    this.setState({ count: value });
  };

  render() {
    console.log(this.props);

    const { count } = this.state;

    return (
      <div className="mb-3">

        <span className="py-2 px-4 mr-3 badge badge-primary">
          {count === 0 ? "Zero" : count}
        </span>
        <button
          className="btn btn-sm btn-success px-4"
          onClick={this.incrementCount}
        >
          <i className="fa fa-plus"></i> add
        </button>
      </div>
    );
  }
}

export default Counter;
