import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CranioSacral extends React.Component {
  render() {
    return (
      <div className="service">
        <td>
          <h1 className="serviceTitle">CranioSacral Therapy</h1>
        </td>
        <td>
          <p className="serviceInfo">
            CranioSacral Therapy (CST) is a light touch technique that uses the bones of the cranium and pelvic complex to mobilize deeper structures, resolving restrictions and reducing stress on the brain and spinal cord. CST can reduce symptoms associated with trauma to the head, spine, and pelvic complex, infections and disease processes affecting these same structures, headaches and migraines, and chronic pain and stress, just to name a few.
          </p>
        </td>
      </div>
    );
  }
}
