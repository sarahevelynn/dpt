import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Articles extends React.Component {
  render() {
    return (
      <div class="infoBox">
      <h1 className="practiceTitle">Articles</h1>
      <a href={"https://www.verywellfit.com/dormant-butt-syndrome-4075025?utm_term=bouncex12&utm_campaign=todaysl&utm_medium=email&utm_source=cn_nl&utm_content=9531662"} target="_blank">
        <div className="moreInfoLinks">
          <h3>“Dormant Butt Syndrome” Is It Causing Your Hip and Knee Pain?</h3>
        </div>
      </a>
      <a href={"https://wexnermedical.osu.edu/mediaroom/pressreleaselisting/dormant-butt-syndrome-mmr"} target="_blank">
        <div className="moreInfoLinks">
          <h3>"Dormant Butt Syndrome" May Be To Blame for Knee, Hip and Back Pain</h3>
        </div>
      </a>
      </div>
    );
  }
}
