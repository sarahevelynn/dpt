import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sarahEvelynn from "./assets/sarahEvelynn.png";
import lizzie from "./assets/lizzie.png";
import osa from "./assets/osa.png";

export class Team extends React.Component {
  render() {
    return (
      <div>
        <h1>Meet Our Team </h1>
        <div id="teamProfs">
          <div id="member">
            <img id="memberPhoto" src={sarahEvelynn} />
            <h2> SarahEvelynn Johnson</h2>
            <h4> Founder :: CEO </h4>
          </div>
          <div id="member">
            <img id="memberPhoto" src={osa} />
            <h2> Osa Aihie</h2>
            <h4> Head of Development </h4>
          </div>
          <div id="member">
            <img id="memberPhoto" src={lizzie} />
            <h2> Lizzie Manning </h2>
            <h4> Head of Marketing </h4>
          </div>
        </div>
        <hr id="outsideLine"/>
        <hr id="insideLine"/>
        <hr id="outsideLine" />
      </div>
    );
  }
}
