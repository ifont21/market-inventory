import React from "react";
import "./product.styles.scss";

export const Product = ({ handleSelect, ...product }) => {
  const { name, category, brands, img } = product;

  return (
    <div className="product__item" onClick={() => handleSelect(product)}>
      <div className="product__image">
        <img src={img} alt={name} />
      </div>
      <div className="product__content">
        <span className="product__name">{name}</span>
        <div className="product__existence">
          <span>Category: </span>
          <span>{category}</span>
        </div>
        <div className="product__brands">
          <span>Brands: </span>
          <span>{brands.length}</span>
        </div>
      </div>
    </div>
  );
};
