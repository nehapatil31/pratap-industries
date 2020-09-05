import React, { Component } from "react";
import language from "../../constants/language.json";
import "./contact.css";

class Contact extends Component {
  state = {};
  render() {
    const lang = this.props.lang;

    return (
      <div className="contact-container" id="contact">
        <div className="background-color"></div>
        <div className="contact-content">
          <div className="contact-header">{language[lang].contactHeader}</div>
          <div className="group-img"></div>
          <div className="contact-text">
            Customer Care - (02164)221043, 9422403683 68/ 69, Ravivar Peth,
            Karad pin 415110, Satara, Maharashtra. Email:
            pratapindustry2014@gmail.com
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
