import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sarahEvelynn from "./assets/sarahEvelynn.png";
import lizzie from "./assets/lizzie.png";
import cam from "./assets/cam.png";
import jenna from "./assets/jenna.png";
import michael from "./assets/michael.png";
import osa from "./assets/osa.png";
import email from "./assets/email.png";
import linkedIn from "./assets/linkedIn.png";

export class Profiles extends React.Component {
  render() {
    return (
      <div>
        <h1>Meet Our Consultants </h1>
        <div id="teamProfs">
          <div id="consultant">
            <img id="memberPhoto" src={sarahEvelynn} />
            <h2> SarahEvelynn Johnson</h2>
            <h4> Years of Experience: 6</h4>
            <h4>
              {" "}
              Expertise: Web & Mobile App Development, Digital Marketing, Social
              Media & Writing
            </h4>
            <h4> Rate: $65-85/hr depending on services rendered.</h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={osa} />
            <h2> Osa Aihie</h2>
            <h4> Years of Experience: 6</h4>
            <h4>
              Expertise: Content Writing, Data Analytics & Business Strategy
            </h4>
            <h4>
              Rate: $50/hr &{" "}
              <a target="_blank" href="https://kreateable.com/">
                See website for writing package pricing
              </a>
            </h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={michael} />
            <h2> Michael Moore</h2>
            <h4> Years of Experience: 5</h4>
            <h4>
              Expertise: Marketing Strategy, Brand Strategy, Social Media
              Strategy, Customer Experience Design
            </h4>
            <h4> Rate: $50/hr</h4>
          </div>
        </div>
        <div id="teamProfs">
          <div id="consultant">
            <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            <a
              href={"https://www.linkedin.com/in/sarahevelynn/"}
              target="_blank"
            >
              <img src={linkedIn} id="contactPhoto" alt="linkedIn " />
            </a>
          </div>
          <div id="consultant">
            <a href={"mailto:Osaaihiebiz@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            <a href={"https://www.linkedin.com/in/osaaihie/"} target="_blank">
              <img src={linkedIn} id="contactPhoto" alt="linkedIn " />
            </a>
          </div>
          <div id="consultant">
            <a href={"mailto:MichaelTMoore94@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            <a
              href={"https://www.linkedin.com/in/mooremichaelt/"}
              target="_blank"
            >
              <img src={linkedIn} id="contactPhoto" alt="linkedIn " />
            </a>
          </div>
        </div>
        <div id="teamProfs">
          <div id="consultant">
            <img id="memberPhoto" src={jenna} />
            <h2> Jenna Rodger</h2>
            <h4> Years of Experience: 2</h4>
            <h4> Expertise: Direct Sales & Creative Marketing</h4>
            <h4> Rate: $40/hr</h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={cam} />
            <h2> Cam Welch </h2>
            <h4> Years of Experience: 8</h4>
            <h4>
              {" "}
              Expertise: Photography, Photoshop, Branding, Social Media
              Marketing
            </h4>
            <h4> Rate: $150/hr</h4>
          </div>
          <div id="consultant">
            <img id="memberPhoto" src={lizzie} />
            <h2> Lizzie Manning </h2>
            <h4> Years of Experience: 4</h4>
            <h4>
              {" "}
              Expertise: Copywriting, Content Creation, Strategic Integration
            </h4>
            <h4> Rate: $40/hr</h4>
          </div>
        </div>
        <div id="teamProfs">
          <div id="consultant">
            {" "}
            <a href={"mailto:Jenna.rodger@colorado.edu"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            <a
              href={"https://www.linkedin.com/in/jenna-rodger-774644134/"}
              target="_blank"
            >
              <img src={linkedIn} id="contactPhoto" alt="linkedIn " />
            </a>
          </div>
          <div id="consultant">
            <a href={"mailto:Camwelchphotography@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            <a href={"https://www.linkedin.com/in/camwelch/"} target="_blank">
              <img src={linkedIn} id="contactPhoto" alt="linkedIn " />
            </a>
          </div>
          <div id="consultant">
            <a href={"mailto:Manninglizzle@gmail.com"} target="_blank">
              <img src={email} id="contactPhoto" alt="email " />
            </a>
            <a
              href={"https://www.linkedin.com/in/madebymanning/"}
              target="_blank"
            >
              <img src={linkedIn} id="contactPhoto" alt="linkedIn " />
            </a>
          </div>
        </div>
        <hr id="outsideLine" />
        <hr id="insideLine" />
        <hr id="outsideLine" />
      </div>
    );
  }
}
