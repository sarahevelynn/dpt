import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Payment extends React.Component {
  render() {
    return (
      <div className="service">
        <td>
          <h1 className="serviceTitle">Payment for Services</h1>
        </td>
        <td>
          <p className="serviceInfo">
            As is the trend in our industry, I have foregone the
            insurance-driven model that tends to produce “assembly line” care,
            in favor of a model that is entirely patient centered. As a result,
            I do not accept health insurance as a method of payment, but will
            provide patients with a “super bill” that they can submit to
            insurance providers for potential reimbursement. Payment is due at
            the time that services are rendered, and I accept all major credit
            cards as well as cash and personal checks.
          </p>
        </td>
      </div>
    );
  }
}
