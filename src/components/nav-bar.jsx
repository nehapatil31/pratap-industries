import React, { Component } from "react";
import language from "../constants/language.json";
import { Link } from "react-scroll";
import box from "../assets/icons/box.svg";

class NavBar extends Component {
  state = {};

  render() {
    const lang = this.props.lang;

    return (
      // <nav className="navbar navbar-expand-lg navbar-dark">

      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNav"
      //     aria-controls="navbarNav"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav"></div>
      //   <form className="form-inline">
      //     <ul className="navbar-nav">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="#">
      //           {language[lang].home} <span className="sr-only">(current)</span>
      //         </a>
      //       </li>
      //       <li className="nav-item">

      //         <Link
      //           activeClass="active"
      //           to="about"
      //           spy={true}
      //           smooth={true}
      //           duration={500}
      //           className="nav-link"
      //         >
      //           {language[lang].aboutUs}
      //         </Link>

      //       </li>
      //       <li className="nav-item">

      //         <Link
      //           activeClass="active"
      //           to="contact"
      //           spy={true}
      //           smooth={true}
      //           duration={500}
      //           className="nav-link"
      //         >
      //           {language[lang].contact}
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" onClick={this.props.changeLang}>
      //           {language[lang].langLabel}
      //         </a>
      //       </li>
      //     </ul>
      //   </form>
      // </nav>
      <div className="nav-container container">
        <div className="row row-cols-4">
          <div className="col">
            <div className="icon">
              <img src={box} alt="product-icon" />
            </div>
            <div className="text">Products</div>
          </div>
          <div className="col">
            <div className="icon">
              <img src={box} alt="product-icon" />
            </div>
            <div className="text">Products</div>
          </div>
          <div className="col">
            <div className="icon">
              <img src={box} alt="product-icon" />
            </div>
            <div className="text">Products</div>
          </div>
          <div className="col">
            <div className="icon">
              <img src={box} alt="product-icon" />
            </div>
            <div className="text">Products</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
