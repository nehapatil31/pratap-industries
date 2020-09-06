import React, { Component } from "react";
import language from "../../constants/language.json";
import "./about-us.css";

class AboutUs extends Component {
  state = {};

  render() {
    const lang = this.props.lang;

    return (
      <div className="about-container" id="about">
        <div className="background-color"></div>
        <div className="about-content">
          <div className="about-header">{language[lang].aboutHeader}</div>
          <div className="group-img"></div>
          <div className="about-text">{language[lang].aboutUsDiscription}</div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
