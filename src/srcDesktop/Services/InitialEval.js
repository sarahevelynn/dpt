import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class InitialEval extends React.Component {
  render() {
    return (
      <div className="service">
        <td>
          <h1 className="serviceTitle">Initial Evaluations</h1>
        </td>
        <td>
          <p className="serviceInfo">
            Initial evaluations, particularly for more complex patients, tend to
            run a bit longer, usually 90 minutes.
          </p>
        </td>
      </div>
    );
  }
}
