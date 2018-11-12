import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

var baseURL = "https://saveaway401k.herokuapp.com/";

export default class Contact extends React.Component {
  state = {
    redirect: false,
    message: "",
    isLoading: false
  };

  getBasicInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupFName: data.get("signupFName"),
      signupLName: data.get("signupLName"),
      signupPhone: data.get("signupPhone"),
      signupEmail: data.get("signupEmail"),
      signupMessage: data.get("signupMessage")
    };
  };

  addBasicInfo = event => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    event.preventDefault();
    console.log(this.getBasicInfo(event));
    fetch("https://degrandis-pt.herokuapp.com/contact", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      })
      .then(
        setTimeout(() => {
          this.setState({
            message: "Information Sent!",
            isLoading: false
          });
        }, 1000)
      )
      .then(
        setTimeout(() => {
          this.setState({
            redirect: true
          });
        }, 3000)
      )
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/Guide" />;
    }
    return (
      <div>
        <h2> Please feel free to call me at: +1 (440) 213-0909</h2>
        <h2> Or email me at: chrisdegrandispt@gmail.com</h2>
        <h2> Or submit your message below</h2>
        <div id="contactForm">
          <form className="signupForm" onSubmit={this.addBasicInfo}>
            <label htmlFor="signupFName">First</label>
            <input className="formInput" type="text" name="signupFName" />
            <label htmlFor="signupLName">Last</label>
            <input className="formInput" type="text" name="signupLName" />
            <br />
            <label htmlFor="signupEmail">Email</label>
            <input className="formInput" type="text" name="signupEmail" />
            <br />
            <label htmlFor="signupPhone">Phone Number</label>
            <input className="formInput" type="text" name="signupPhone" />
            <br />
            <br />
            <label htmlFor="signupMessage">Message</label>
            <br />
            <input id="message" type="text" name="signupMessage" />

            <br />
            {this.state.isLoading === true ? (
              <Loader
                type="ThreeDots"
                color="#22435e"
                height="50"
                width="100"
              />
            ) : (
              <p> {this.state.message} </p>
            )}
            <input type="submit" id="submitButton" value="Submit" />
          </form>
        </div>
        <h2>
          Cancellation Policy: To avoid a $50 fee,
          <br />
          please notify at least 24 hours prior
          <br />
          to your appointment to cancel or reschedule.
        </h2>
      </div>
    );
  }
}
