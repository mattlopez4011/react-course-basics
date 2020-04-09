import React, { Component } from "react";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Increment method
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // This is the counter object from the parameter. Sent by the counter component. You do not want to modify the local state object.
    counters[index].value++; // increment by 1
    this.setState({ counters });
  };

  // Reset counters array to default.
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // Delete counter
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    // Simplified version, since the key and value are the same.
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {/*Filter returns counters that are greater than 0.*/}
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className={"container"}>
          {/*<Movies />*/}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
