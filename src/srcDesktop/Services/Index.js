import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneOnOne from "./OneOnOne";
import InitialEval from "./InitialEval";
import CranioSacral from "./CranioSacral";
import DryNeedle from "./DryNeedle";
import Payment from "./Payment";
import HSA from "./HSA";

export default class Services extends React.Component {
  render() {
    return (
        <table id="serviceTable">
          <tbody>
            <tr>
              <OneOnOne />
            </tr>
            <tr>
              <InitialEval />
            </tr>
            <tr>
              <CranioSacral />
            </tr>
            <tr>
              <DryNeedle />
            </tr>
            <tr>
              <Payment />
            </tr>
            <tr>
              <HSA />
            </tr>
          </tbody>
        </table>
    );
  }
}
