import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // value: this.props.value,
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

    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // let classes = this.getBadgeClasses();
    // Shows the children passed
    console.log(this.props);

    return (
      <div>
        {/*Adds H2 element from Counters component*/}
        {/*{this.props.children}*/}

        {/*Receiving element id from Counters component*/}
        <h4>{this.props.id}</h4>
        {/*<img src={this.state.imageUrl} alt=""/>*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.handleIncrement(this.state)} //Example on how to pass event argument.
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
        {/*Delete Button*/}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*List of tags*/}
        {/*<div>*/}
        {/*  {this.state.tags.length === 0 && "Please create a new tag!"}*/}
        {/*  {this.renderTags()}*/}
        {/*</div>*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    console.log("state value ", this.state.value);
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
