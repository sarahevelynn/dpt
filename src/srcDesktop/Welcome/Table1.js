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
        <table id="serviceTable">
          <tbody>
            <tr>
              <td className="tablePlace">
                <Link to="/My Practice">
                  <MdSpa size="3em" color="#5282b0" />
                </Link>
              </td>
              <td className="tablePlace">
                <Link to="/My Practice">
                  <h1 id="tableItem">My Practice</h1>
                </Link>
              </td>
              <td className="tablePlace">
                <Link to="/services">
                  <MdPanTool size="3em" color="#5282b0" />
                </Link>
              </td>
              <td className="tablePlace">
                <Link to="/services">
                  <h1 id="tableItem">Services</h1>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="tablePlace">
                <Link to="/new-patients">
                  <MdAssignmentInd size="3em" color="#5282b0" />
                </Link>
              </td>
              <td className="tablePlace">
                <Link to="/new-patients">
                  <h1 id="tableItem">New Patients</h1>
                </Link>
              </td>
              <td className="tablePlace">
                <Link to="/more-info">
                  <MdFindInPage size="3em" color="#5282b0" />
                </Link>
              </td>
              <td className="tablePlace">
                <Link to="/more-info">
                  <h1 id="tableItem">More Info</h1>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
