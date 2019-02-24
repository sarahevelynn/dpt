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
        <a href={"https://www.youtube.com/watch?annotation_id=annotation_1871262837&amp=&feature=iv&amp=&src_vid=YQm5RCz9Pxc&amp=&v=mB468Jh9aAY"} target="_blank">
  <h3>TMJ Anatomy and Disc Displacement Animation</h3>      </a>

          <ReactPlayer url='https://www.youtube.com/watch?annotation_id=annotation_1871262837&amp=&feature=iv&amp=&src_vid=YQm5RCz9Pxc&amp=&v=mB468Jh9aAY' />
        </div>
        </div>
      </div>
    );
  }
}
