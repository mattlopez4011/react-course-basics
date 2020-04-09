import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {/*Reset button*/}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/*Loops through the counters array*/}
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
