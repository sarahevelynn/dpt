import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { About } from "./About.js";
import { Partners } from "./Partners.js";
import { Team } from "./Team.js";

export default class CompanyInfo extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Team />
        <Partners />
        <hr id="outsideLine" />
        <hr id="insideLine" />
        <hr id="outsideLine" />
      </div>
    );
  }
}
