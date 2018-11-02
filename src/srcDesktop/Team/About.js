import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1> About Us. </h1>
        <div id="squareSection">
          <div id="outterSquare">
            <h2> The Reason </h2>
            <p>
              An immense untapped resource exists in the Denver metropolitan
              area along with Boulder, Fort Collins and Colorado Springs:
              motivated, engaged students and young professionals with a thirst
              for learning and experience.
              <br />
              <br />
              <br />
              Meanwhile, cohorts of startups need qualified labor in numerous
              areas, preferably at a reasonable cost.
            </p>
          </div>
          <div id="innerSquare">
            <h2> The Solution </h2>
            <p>
              We strive to help business owners develop a solid foundation and
              business strategy while providing opportunity for students and
              young professionals to work in the startup world.
              <br />
              <br />
              We provide qualified consultants to help you with any projects you
              do not have the expereince or time to do yourself.
              <br />
              Need an intern? We simplify the search process to get you people
              who can thrive in the fast pace startup environment.
            </p>
          </div>
          <div id="outterSquare">
            <h2> The Vision </h2>
            <p>
              Running a business is not easy.
              <br />
              5280 Startup Solutions allows you to focus on what is important -
              the idea implementation!
              <br />
              <br />
              We envision a Colorado with startups who accomplish <i>
                all
              </i>{" "}
              their goals. Whether you need contract work or intern placement,
              5280 Startup Solutions is the answer for getting what you need
              done when you need it done.
            </p>
          </div>
        </div>
        <hr id="outsideLine" />
        <hr id="insideLine" />
        <hr id="outsideLine" />
      </div>
    );
  }
}
