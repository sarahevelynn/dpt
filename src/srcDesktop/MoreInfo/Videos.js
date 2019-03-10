import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player';

export default class Videos extends React.Component {
  render() {
    return (
      <div>
      <h1 className="practiceTitle">Videos</h1>
      <div id="videos">
        <div className="moreInfoVideo">
        <a href={"https://www.youtube.com/watch?v=gwd-wLdIHjs&t=16s"} target="_blank">

          <h3>Lorimer Moseley “Why Things Hurt”</h3>      </a>

          <ReactPlayer url='https://www.youtube.com/watch?v=gwd-wLdIHjs&t=16s' />
        </div>
        <div className="moreInfoVideo">
        <a href={"https://www.youtube.com/watch?v=KLjgBLwH3Wc"} target="_blank">
  <h3>Dr. Terry Wahls and The Wahls Protocol, Minding your Mitochondria:</h3>      </a>

          <ReactPlayer url='https://www.youtube.com/watch?v=KLjgBLwH3Wc' />
        </div>
        </div>
      </div>
    );
  }
}
