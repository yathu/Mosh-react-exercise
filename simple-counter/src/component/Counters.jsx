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
  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter key={item.id} id={item.id} value={item.value}>
            <h5>Item Title {item.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;