import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Videos extends React.Component {
  render() {
    return (
      <div>
      <h1 className="practiceTitle">Videos</h1>
      <a href={"https://www.youtube.com/watch?v=gwd-wLdIHjs&t=16s"} target="_blank">
        <div className="moreInfoLinks">
          <h3>Lorimer Moseley “Why Things Hurt”</h3>
        </div>
      </a>
      <a href={"https://www.youtube.com/watch?annotation_id=annotation_1871262837&amp=&feature=iv&amp=&src_vid=YQm5RCz9Pxc&amp=&v=mB468Jh9aAY"} target="_blank">
        <div className="moreInfoLinks">
          <h3>TMJ Anatomy and Disc Displacement Animation</h3>
        </div>
      </a>
      </div>
    );
  }
}
