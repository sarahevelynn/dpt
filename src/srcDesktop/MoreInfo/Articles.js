import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Articles extends React.Component {
  render() {
    return (
      <div class="infoBox">
      <h1 className="practiceTitle">Articles</h1>
      <a href={"http://online.liebertpub.com/doi/full/10.1089/acu.2017.1222"} target="_blank">
        <div className="moreInfoLinks">
          <h3>Craniosacral Therapy and Visceral Manipulation: A New Treatment Intervention for Concussion Recovery:</h3>
        </div>
      </a>
      <a href={"https://www.npr.org/sections/health-shots/2018/02/26/587735283/lost-art-of-bending-over-how-other-cultures-spare-their-spines?utm_campaign=storyshare&utm_source=facebook.com&utm_medium=social"} target="_blank">
        <div className="moreInfoLinks">
          <h3>Hip hinging or “table” bending to spare your spine:</h3>
        </div>
      </a>
      <a href={"https://www.npr.org/sections/goatsandsoda/2018/08/13/636025077/to-fix-that-pain-in-your-back-you-might-have-to-change-the-way-you-sit"} target="_blank">
        <div className="moreInfoLinks">
          <h3>Changing how we sit for decreased back pain:</h3>
        </div>
      </a>
      </div>
    );
  }
}
