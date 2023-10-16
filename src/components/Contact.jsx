import React from "react";
import Banner from "../assets/banner.png";
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your full name..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email..."
          />
          <label>Your Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Please enter your message..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};
