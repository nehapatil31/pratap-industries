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
          <div className="about-text">
            Founded in 1999, Pratap Industries is a fertilizer manufacturer
            company. It is located at Karad, Satara, Maharashtra.  We provide
            fertilizers in 5 districts of Maharashtra, India (Satara, Sangali,
            Kolhapur, Sindhudurg, Ratnagiri). We manufacture total 33 products
            in which organic fertilizers and water solubles are some of the main
            products. The products manufactured by us helps to increase the
            fertility of land.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
