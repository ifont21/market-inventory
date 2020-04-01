import React from "react";
import "./product.styles.scss";

export const Product = ({ name, existence, registeredBrands, img }) => (
  <div className="product__item">
    <div className="product__image">
      <img src={img} alt={name} />
    </div>
    <div className="product__content">
      <span className="product__name">{name}</span>
      <div className="product__existence">
        <span>Existence: </span>
        <span>{existence}</span>
      </div>
      <div className="product__brands">
        <span>Brands: </span>
        <span>{registeredBrands.length}</span>
      </div>
    </div>
  </div>
);
