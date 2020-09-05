import React, { Component } from "react";
import NavBar from "./nav-bar";
import language from "../constants/language.json";
import "./home.css";
import AboutUs from "./about-us/about-us";
import Contact from "./contact/contact";

class Home extends Component {
  state = {
    lang: "english",
  };

  changeLang = () => {
    if (this.state.lang == "english") {
      this.setState({ lang: "marathi" });
    } else {
      this.setState({ lang: "english" });
    }
  };

  render() {
    const lang = this.state.lang;

    return (
      <React.Fragment>
        {/* <div className="content-container">
         
          <div className="content">
            <NavBar lang={lang} changeLang={this.changeLang} />
            <div className="content-text">
              <div className="website-name">{language[lang].siteName}</div>
              <div className="tagline">
                Increasing soil fertility natuarally for years..
              </div>
              <button type="button" className="know-btn">
                {language[lang].knowMore}
              </button>
            </div>
          </div>
        </div> */}
        <div className="logo-container"></div>
        <div className="banner">
          <div className="main-container">
            <div className="banner-content row">
              <div className="left-content column">
                <div className="content-text">
                  <div className="website-name">{language[lang].siteName}</div>
                  <div className="tagline">
                    Increasing soil fertility natuarally for years..
                  </div>
                  <button type="button" className="know-btn">
                    {language[lang].knowMore}
                  </button>
                </div>
              </div>
              <div className="image-container column"></div>
            </div>
            <NavBar lang={lang} />
          </div>
          <div className="numbers-container">
            <div className="row row-cols-3">
              <div className="col">
                <div className="number">15+</div>
                <div className="text">Years of experience</div>
              </div>
              <div className="col">
                <div className="number">200+</div>
                <div className="text">Happy dealers</div>
              </div>
              <div className="col">
                <div className="number">30+</div>
                <div className="text">Products</div>
              </div>
            </div>
          </div>
        </div>

        {/* <AboutUs lang={lang} />
        <Contact lang={lang} /> */}
      </React.Fragment>
    );
  }
}

export default Home;
