import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Bio extends React.Component {
  render() {
    return (
      <div className="practiceSection">
        <h1 className="practiceTitle">Chris DeGrandis, PT, DPT, CFMT</h1>
        <p>
          I was introduced to the treatment approach that I now practice in 2007
          when my older son sustained a serious head injury, and the doctors at
          Denver Children’s Hospital recommended a particular physical therapy
          practice in Steamboat Springs for his rehabilitation. For the next few
          weeks and months, I observed his recovery, as well as the recovery of
          other patients in the clinic, and was blown away. We had been to
          physical therapy before, but nothing like this. I was so inspired that
          when my younger son started boarding school, I went back to school.
          Seven years later, having earned a Doctorate in Physical Therapy,
          having completed a post-doctorate residency program, and having
          achieved Certification in Functional Manual Therapy, I too now
          practice that same physical therapy treatment approach that so
          impressed me over a decade ago.
        </p>
      </div>
    );
  }
}
