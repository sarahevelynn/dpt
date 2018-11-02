import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Homepage from "./Welcome/Index.js"
import CompanyInfo from "./Team/Index.js";
import Consulting from "./Services/Index.js";


export default class Desktop extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={CompanyInfo} />
            <Route exact path="/services" component={Consulting} />
            <Footer />
          </div>
      </Router>
      </div>

    );
  }
}
