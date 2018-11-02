import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class DryNeedle extends React.Component {
  render() {
    return (
      <div className="service">
        <td>
          <h1 className="serviceTitle">Functional Dry Needling</h1>
        </td>
        <td>
          <p className="serviceInfo">
            I am trained and certified in the use of
            <a href={"https://www.kinetacore.com/faq/#whatis"} target="_blank">
              Functional Dry Needling
            </a>
            as a tool for reducing pain, calming muscle spasms, and restoring
            optimal neuromuscular function. Functional Dry Needling services are
            provided as part of a comprehensive treatment approach designed to
            achieve patient goals and optimize function.
          </p>
        </td>
      </div>
    );
  }
}
