import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import projectXITE from "./assets/projectXITE.png";
import pledge1CO from "./assets/pledge1CO.png";

export class Partners extends React.Component {
  render() {
    return (
      <div>
        <div id="expandInfo1">
          <a href="https://pledge1colorado.org/" target="_blank">
            <h2 id="sectionHeader">Pledge 1% Colorado</h2>
          </a>
          <div id="partnerInfo">
            <h3>
              Proud member of{" "}
              <a href="https://pledge1colorado.org/" target="_blank">
                Pledge 1% Colorado
              </a>
            </h3>
            <p>
              <br />
              Pledge 1% aims to change the world through inspiring early-stage
              corporate philanthropy. Pledge 1% Colorado is a network of
              Colorado entrepreneurs who share a common commitment to giving
              back to their communities. Members pledge 1% of equity, annual
              profits, employee time, or company product to nonprofits of their
              choosing. Join us and make the community a key stakeholder in your
              company. It’s an easy way to #givefirst.
            </p>
          </div>
          <a href="https://pledge1colorado.org/" target="_blank">
            <img src={pledge1CO} id="pledgePhoto" />
          </a>
        </div>

        <div id="expandInfo2">
          <a href="http://www.projectxite.org/" target="_blank">
            <h2 id="sectionHeader"> Project X-ITE </h2>
          </a>
          <div id="partnerInfo">
            <h3>
              Proud Partner with{" "}
              <a href="http://www.projectxite.org/" target="_blank">
                Project X-ITE{" "}
              </a>{" "}
              at the University of Denver
            </h3>
            <p>
              <br />
              Project X-ITE is staking out new ground where innovation,
              technology and entrepreneurship intersect. It’s a
              cross-disciplinary initiative, the first of its kind at the
              University of Denver, to ignite new ideas across the University
              and beyond, to build exciting, impactful partnerships with
              creative thinkers and doers in industry and government. The
              Project will leverage its location at the heart of Colorado’s
              thriving high-tech innovation economy to collaborate directly with
              industry and thought leaders.
            </p>
          </div>
          <a href="http://www.projectxite.org/" target="_blank">
            <img src={projectXITE} />
          </a>
        </div>
      </div>
    );
  }
}
