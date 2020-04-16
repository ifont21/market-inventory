import React from "react";
import "./product-types.styles.scss";
import { Product } from "../../components/product/product.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddProduct from "../../components/add-product/add-product.component";

const ProductTypes = ({ currentProducts, onToggleHidden }) => {
  return (
    <div className="products__wrapper">
      {currentProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
      <AddItem handleClick={onToggleHidden} />
      <AddProduct />
    </div>
  );
};

export default ProductTypes;
