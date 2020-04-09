import React, { Component } from "react";

// Stateless Functional Component
// const Navbar = (props) => { // before object destructuring
const Navbar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/*{props.totalCounters}*/}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
