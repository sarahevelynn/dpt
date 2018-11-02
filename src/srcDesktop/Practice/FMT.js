import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class FMT extends React.Component {
  render() {
    return (
      <div className="practiceSection">
        <h1 className="practiceTitle">Why Functional Manual Therapy (FMT)?</h1>
        <p>
          Functional Manual Therapy (FMT) is a comprehensive physical therapy
          treatment approach developed and perfected over the course of decades
          by Gregg Johnson and his wife, Vicky Saliba Johnson. The Johnsons
          recognized early in their careers that exercise alone cannot correct
          physiological dysfunction. In response, they developed a three-step
          approach, the first of which involves the use of manual techniques to
          correct mechanical dysfunction and restore efficient alignment.
          Mechanical dysfunction almost invariably leads to muscular inhibition,
          and so the second step uses manual techniques to restore communication
          between the brain and the involved muscles (neuromuscular
          re-education). The third and final step then incorporates efficient
          mechanical alignment and neuromuscular response into a functional
          activity (i.e., walking, running, swimming, cycling, etc.) that is
          meaningful to the patient. It is the combination of these three steps
          that produces the kind of results that prompt patients to seek out
          practitioners of FMT around the country, and around the world.
        </p>
        <a href={"https://www.instituteofphysicalart.com/ipa-information/fmt.html"} target="_blank">
        <div className="moreInfoButton">
        <h3>Learn More About FMT</h3>
        </div>
        </a>
      </div>
    );
  }
}
