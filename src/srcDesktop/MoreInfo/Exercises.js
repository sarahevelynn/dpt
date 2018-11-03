import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Exercises extends React.Component {
  render() {
    return (
      <div>
      <h1 className="practiceTitle">Exercises</h1>
      <a href={"https://www.youtube.com/watch?v=SBJcWVU8i_Yl"} target="_blank">
        <div className="moreInfoLinks">
          <h3>Lower Quarter "Basking Seal"</h3>
        </div>
      </a>
      </div>
    );
  }
}
