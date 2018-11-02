import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  MdSpa,
  MdPanTool,
  MdAssignmentInd,
  MdFindInPage,
  MdComment,
  MdDrafts
} from "react-icons/md";

export default class Table extends React.Component {
  render() {
    return (
      <div id="table">
        <div className="tableLocation">
          <Link to="/My Practice">
            <h1 id="tableItem">
              <MdSpa size="2em" color="#5282b0" />
              My Practice
            </h1>
          </Link>
        </div>
        <div className="tableLocation">
          <Link to="/services">
            <h1 id="tableItem">
              <MdPanTool size="2em" color="#5282b0" />
              Services
            </h1>
          </Link>
        </div>
        <div className="tableLocation">
          <Link to="/new-patients">
            <h1 id="tableItem">
              <MdAssignmentInd size="2em" color="#5282b0" />
              New Patients
            </h1>
          </Link>
        </div>
        <div className="tableLocation">
          <Link to="/more-info">
            <h1 id="tableItem">
              <MdFindInPage size="2em" color="#5282b0" />
              More Info
            </h1>
          </Link>
        </div>
        <div className="tableLocation">
          <Link to="/contact">
            <h1 id="tableItem">
              <MdComment size="2em" color="#5282b0" />
              Contact
            </h1>
          </Link>
        </div>
      </div>
    );
  }
}
