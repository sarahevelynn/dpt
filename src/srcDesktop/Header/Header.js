import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

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
          <Link to="/">
            <h2 className="navItem">Home</h2>
          </Link>
          <Link to="/my-practice">
            <h2 className="navItem">My Practice</h2>
          </Link>
          <Link to="/services">
            <h2 className="navItem">Services</h2>
          </Link>
          <Link to="/more-info">
            <h2 className="navItem">More Info</h2>
          </Link>
          <Link to="/contact">
            <h2 className="navItem">Contact</h2>
          </Link>
        </nav>
      </div>
    </header>
  );
}
