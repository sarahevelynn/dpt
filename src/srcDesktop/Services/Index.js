import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Profiles } from "./Profiles.js";
import { Clients } from "./Clients.js";

export default class Consulting extends React.Component {
  render() {
    return (
      <div>
        <Profiles />
        <Clients />
        <hr id="outsideLine" />
        <hr id="insideLine" />
        <hr id="outsideLine" />
      </div>
    );
  }
}
