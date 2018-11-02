import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CFMT extends React.Component {
  render() {
    return (
      <div className="practiceSection">
        <h1 className="practiceTitle">What is Certification in Functional Manual Therapy (CFMT)?</h1>
        <p>
          Certification in Functional Manual Therapy (CFMT) is a rigorous
          continuing education program involving the completion of a series of
          eight courses followed by a week-long examination. Most candidates
          complete each of the eight courses multiple times in order to fully
          master the material prior to sitting for the examination. The
          examination itself consists of four days of review, followed by two
          days of both oral/practical and written examinations for each of the
          required courses. Certification is awarded to those candidates who
          demonstrate proficiency in all required courses.
        </p>
        <a href={"http://www.instituteofphysicalart.com/index.php/certification/cfmt.html"} target="_blank">
          <div className="moreInfoButton">
            <h3>Learn More About CFMT</h3>
          </div>
        </a>
      </div>
    );
  }
}
