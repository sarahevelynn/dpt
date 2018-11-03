import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Homepage from "./Welcome/Index.js"
import Practice from "./Practice/Index";
import Services from "./Services/Index";
import NewPatients from "./NewPatients/Index";
import MoreInfo from "./MoreInfo/Index";
import Contact from "./Contact/Index";


export default class Desktop extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/my-practice" component={Practice} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/new-patients" component={NewPatients} />
            <Route exact path="/more-info" component={MoreInfo} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
      </Router>
      </div>

    );
  }
}
