import React from "react";
import "./product.styles.scss";

export const Product = props => (
  <div className="market-inventory__product">
    <img className="market-inventory__img" src={props.product.img} />
    <div className="market-inventory__name">{props.product.name}</div>
  </div>
);
