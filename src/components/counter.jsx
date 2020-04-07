import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: 'https://picsum.photos/200'
    tags: ["tags", "tags2", "tags3"],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // *Event handler
  // Arrow function don't re-bind the "this" keyword they inherent it.
  // Counter object is available in the console (side note)
  handleIncrement = (product) => {
    console.log(product);

    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <div>
        {/*<img src={this.state.imageUrl} alt=""/>*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.handleIncrement(this.state)} //Example on how to pass event argument.
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    console.log("state count ", this.state.count);
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
