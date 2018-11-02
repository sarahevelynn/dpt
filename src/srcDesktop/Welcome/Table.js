import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Table extends React.Component {
  render() {
    return (
      <div id="table">
      <div className="tableLocation">
      <Link to="/My Practice">
        <h1 id="tableItem">My Practice</h1>
      </Link>
      </div>
      <div className="tableLocation">
      <Link to="/services">
        <h1 id="tableItem">Services</h1>
      </Link>
      </div>
      <div className="tableLocation">
      <Link to="/more-info">
        <h1 id="tableItem">More Info</h1>
      </Link>
      </div>
      <div className="tableLocation">
      <Link to="/contact">
        <h1 id="tableItem">Contact</h1>
      </Link>
      </div>

      </div>
    );
  }
}
