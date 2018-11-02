import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class OneOnOne extends React.Component {
  render() {
    return (
      <div className="service">
      <td>
        <h1 className="serviceTitle">One-on-one Appointments </h1> </td>
        <td><p className="serviceInfo">
          All services are provided one-on-one by myself in an appropriate
          treatment setting, either in my clinic or in the patient’s home or
          other venue. Most patients can benefit from hour-long appointments,
          and so my schedule is optimized for 60 minute sessions, but can be
          modified to allow for shorter or longer visits depending upon patient
          needs.
        </p></td>
      </div>
    );
  }
}
