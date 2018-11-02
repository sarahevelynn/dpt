import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import {
  MdSpa,
  MdPanTool,
  MdAssignmentInd,
  MdFindInPage,
  MdComment,
  MdDrafts
} from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div id="header">
        <Link to="/">
          <img src={logo} id="logo" alt="logo" />
        </Link>
      </div>
      <div id="navBar">
        <h2 id="tagline">DeGrandis Physical Therapy</h2>
        <nav>
          <Link to="/my-practice">
            <h2 className="navItem">
              {" "}
              <MdSpa size="1.5em" color="#5282b0" />
              My Practice
            </h2>
          </Link>
          <Link to="/services">
            <h2 className="navItem">
              {" "}
              <MdPanTool size="1.5em" color="#5282b0" />
              Services
            </h2>
          </Link>
          <Link to="/new-patients">
            <h2 className="navItem">
              {" "}
              <MdAssignmentInd size="1.5em" color="#5282b0" />
              New Patients
            </h2>
          </Link>
          <Link to="/more-info">
            <h2 className="navItem">
              {" "}
              <MdFindInPage size="1.5em" color="#5282b0" />
              More Info
            </h2>
          </Link>

          <Link to="/contact">
            <h2 className="navItem">
              {" "}
              <MdComment size="1.5em" color="#5282b0" />
              Contact
            </h2>
          </Link>
        </nav>
      </div>
    </header>
  );
}
