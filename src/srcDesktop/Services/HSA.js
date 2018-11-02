import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class HSA extends React.Component {
  render() {
    return (
      <div className="service">
        <td>
          <h1 className="serviceTitle">Health Savings Accounts</h1>
        </td>
        <td>
          <div className="serviceInfo">
            <p>
              Many patients find that HSA (Health Savings Account) cards are a
              great way to pay for physical therapy services. This is a type of
              savings account that allows you to set aside money on a pre-tax
              basis to pay for qualified medical expenses if you have a “high
              deductible” health insurance plan.
            </p>
            <a
              href={
                "https://www.healthcare.gov/glossary/health-savings-account-HSA/"
              }
              target="_blank"
            >
              <div id="moreInfoButton1">
                <h3>Learn More About HSA</h3>
              </div>
            </a>
          </div>
        </td>
      </div>
    );
  }
}
