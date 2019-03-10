import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Credentials extends React.Component {
  render() {
    return (
      <div id="credentials">
        <h1 className="practiceTitle">My Credentials</h1>
        <h2>
          Doctor of Physical Therapy (DPT) with Honors,
          <br />
          Regis University, Denver, CO May 2014
        </h2>
        <h2>
          Post-Doctoral Residency in Proprioceptive Neuromuscular Facilitation
          (PNF),
          <br />
          Kaiser Foundation Rehabilitation Center, Vallejo, CA January 2015
        </h2>
        <h2>
          Certified Functional Manual Therapist (CFMT) with Honors,
          <br />
          Institute of Physical Art, Steamboat Springs, CO August 2016
        </h2>
        <h2>
          Upledger CranioSacral Therapy, Levels 1 & 2
          <br />
          Various dates and locations
        </h2>
        <h2>
          Functional Dry Needling, Level 1,
          <br />
          Kinetacore Physical Therapy Education, Brighton, CO May 2016
        </h2>
      </div>
    );
  }
}
