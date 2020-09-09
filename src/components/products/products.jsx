import React, { Component } from "react";
import language from "../../constants/language.json";
import "./products.css";
// products images
import richmix from "../../assets/products/richmix.JPG";
import humirich from "../../assets/products/humirich.png";
import micromix from "../../assets/products/micromix.png";
import richmag from "../../assets/products/richmag.png";
import richneem from "../../assets/products/richneem.png";

class Products extends Component {
  state = {};
  render() {
    const lang = this.props.lang;
    return (
      <div id="products" className="container options">
        <div className="title">{language[lang].topProducts}</div>
        <div className="row margin-top">
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">{language[lang].richmix}</p>
            <img className="products-img" src={richmix} />
            <p className="products-description">{language[lang].richmixDes}</p>
          </div>
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">{language[lang].micromix}</p>
            <img className="products-img" src={micromix} />
            <p className="products-description">{language[lang].micromixDes}</p>
          </div>
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">{language[lang].humirich}</p>
            <img className="products-img" src={humirich} />
            <p className="products-description">{language[lang].humirichDes}</p>
          </div>
        </div>
        <div className="row">
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">{language[lang].richmag}</p>
            <img className="products-img" src={richmag} />
            <p className="products-description">{language[lang].richmagDes}</p>
          </div>
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">{language[lang].richneem}</p>
            <img className="products-img" src={richneem} />
            <p className="products-description">{language[lang].richneemDes}</p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default Products;
