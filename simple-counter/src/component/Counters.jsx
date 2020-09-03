import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 5 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter
            onDelete={this.handleDelete}
            key={item.id}
            counter={item}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
