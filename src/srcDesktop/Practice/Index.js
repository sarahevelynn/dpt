import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import headshot from "./assets/headshot.jpg";
import Bio from "./Bio";
import FMT from "./FMT";
import CFMT from "./CFMT";
import Credentials from "./Credentials";


export default class Practice extends React.Component {
  render() {
    return (
      <div>
      <img src={headshot} id="headshot" alt="Chris DeGrandis" />
      <Bio />
      <FMT />
      <CFMT />
      <Credentials />
      </div>
    );
  }
}
