import React, { Component } from "react";
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
    return (
      <div id="products" className="container options">
        <h3 className="title">Products</h3>
        <div className="row margin-top">
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">Rich mix</p>
            <img className="products-img" src={richmix} />
            <p className="products-description">
              It contains silicon. Silicon has the potential to be used in the
              production of floriculture crops to increase flower and stem size,
              accelerate flowering and improve resistance to stresses including
              drought.
            </p>
          </div>
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">Micromix</p>
            <img className="products-img" src={micromix} />
            <p className="products-description">
              It contains : Zink 5% Ferous 2% Copper 0.5% Boron 1% Manganes 1%
            </p>
          </div>
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">Humi Rich</p>
            <img className="products-img" src={humirich} />
            <p className="products-description">
              It helps to increase the photosynthesis process in plants. Because
              of it crops get required nutrients. It can be used for all types
              of crops.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">Rich Mag</p>
            <img className="products-img" src={richmag} />
            <p className="products-description">
              It contains 9.6% Magnesium sulfate (MgSo4) Our magnesium sulfate
              fertilizer is designed to easily correct or prevent magnesium
              deficiencies for all types of crops and soil conditions.
            </p>
          </div>
          <div className="container col-lg-4 products-box">
            <i className="fab fa-think-peaks products-icon"></i>
            <p className="products-heading">Rich Neem</p>
            <img className="products-img" src={richneem} />
            <p className="products-description">
              This is 100% pure organic manure.
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default Products;
