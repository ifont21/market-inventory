import React from "react";
import { Product } from "../product/product.component";
import "./product-list.styles.scss";

export const ProductList = props => {
  return (
    <div className="market-inventory__products">
      {props.products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
