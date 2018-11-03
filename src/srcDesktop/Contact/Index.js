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
      signupName: data.get("signupName"),
      signupEmail: data.get("signupEmail"),
      signupPhone: data.get("signupPhone"),
      signupCoName: data.get("signupCoName"),
      EmployeeNumber: data.get("EmployeeNumber")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/freeGuide", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addBasicInfo = event => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    event.preventDefault();
    console.log(this.getBasicInfo(event));
    fetch(baseURL + "guideRegistration", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(this.sendMessage(event))
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
            <label htmlFor="signupName">First Name</label>
            <input type="text" name="signupName" />
            <label htmlFor="signupCoName">Last Name</label>
            <input type="text" name="signupCoName" />
            <br/>
            <label htmlFor="signupEmail">Your Email Adress</label>
            <input type="text" name="signupEmail" />
            <label htmlFor="signupPhone">Your Phone Number</label>
            <input type="text" name="signupPhone" />
            <label htmlFor="signupPhone">Message</label>
            <input type="text" name="signupPhone" />

            <br />
            {this.state.isLoading === true ? (
              <Loader
                type="ThreeDots"
                color="#c33539"
                height="50"
                width="100"
              />
            ) : (
              <p> {this.state.message} </p>
            )}
            <input type="submit" className="submitButton" value="Submit" />
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
