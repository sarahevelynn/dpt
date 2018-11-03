import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Exercises from "./Exercises";
import Mobilizations from "./Mobilizations";
import Articles from "./Articles";
import Videos from "./Videos";

export default class MoreInfo extends React.Component {
  render() {
    return (
      <div>
      <Exercises />
      <Mobilizations />
      <Articles />
      <Videos />
      </div>
    );
  }
}
