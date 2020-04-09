import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;

    return (
      <div>
        {/*Reset button*/}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {/*Loops through the counters array*/}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // value={counter.value}
            // id={counter.id}
            // Counter object will contain all props like value, id etc...
            counter={counter}
          >
            <h2>Counter #{counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
