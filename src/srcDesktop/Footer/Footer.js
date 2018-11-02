import React from "react";
import email from "./assets/email.png";

export default function Footer() {
  return (
    <footer>
      <p id="copy">&copy; 2018, DeGrandis Physical Therapy, LLC</p>
      <div id="social">
        <a href={"mailto:chrisdegrandispt@gmail.com"}>
          <img src={email} className="emailPhoto" alt="email me" />
        </a>
      </div>
    </footer>
  );
}
