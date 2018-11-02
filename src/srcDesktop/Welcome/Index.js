import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import flatirons from "./assets/flatirons.jpg";
import Table from "./Table";

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        
        <img id="flatirons" src={flatirons} alt="Flatirons" />
      </div>
    );
  }
}
