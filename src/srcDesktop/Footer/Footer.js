import React from "react";
import email from "./assets/email.png";

export default function Footer() {
  return (
    <footer>
      <div id="footerContent">
      <div class="footerItem">
        <h3>Office Hours</h3>
        <h4 class="footerText">
          Hours depend on patient and therapist availability.
          <br />
          Inquire to schedule your initial evaluation
          <br />
          and future appointments.
        </h4>
      </div>
      <div class="footerItem">
        <h3>Location</h3>
        <h4 class="footerText">
        777 29th Street, Suite 401
        <br />
        Boulder, CO 80303</h4>
      </div>
      <div id="social">
        <a href={"mailto:chrisdegrandispt@gmail.com"}>
          <img src={email} id="emailPhoto" alt="email me" />
        </a>
      </div>
      </div>
      <h4 id="copy">
        &copy; 2019
        <br />
        DeGrandis Physical Therapy
      </h4>
    </footer>
  );
}
