import React, { useEffect } from "react";
import "./product-types.styles.scss";
import { Product } from "../../components/product/product.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddProduct from "../../components/add-product/add-product.component";
import { useState } from "react";
import ProductContext from "../../context/product.context";

const ProductTypes = ({ fetchProducts, currentProducts }) => {
  const [hidden, setHiddenDialog] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onToggleHidden = () => {
    setHiddenDialog(!hidden);
  };

  return (
    <div className="products__wrapper">
      {currentProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
      <AddItem handleClick={onToggleHidden} />
      <ProductContext.Provider
        value={{
          hidden,
          onToggleHidden,
        }}
      >
        <AddProduct />
      </ProductContext.Provider>
    </div>
  );
};

export default ProductTypes;
