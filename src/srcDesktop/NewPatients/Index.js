import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DPTConsentWaiverRelease from "./assets/DPTConsentWaiverRelease.pdf";
import DPTPtIntake from "./assets/DPTPtIntake.pdf";

export default class NewPatients extends React.Component {
  render() {
    return (
      <div id="patients">
        <h1 className="practiceTitle">Download and complete your initial intake forms</h1>
        <div className="forms">
          <a className="formDownload" href={DPTPtIntake} download="DPTPtIntake">
            <h3 className="formButton">Patient Intake Form</h3>
          </a>
        </div>

        <div className="forms">
          <a
            className="formDownload"
            href={DPTConsentWaiverRelease}
            download="DPTConsentWaiverRelease"
          >
            <h3 className="formButton">
              Physical Therapy Consent, Waiver
              <br />
              and Release of Liability
            </h3>
          </a>
        </div>
      </div>
    );
  }
}
