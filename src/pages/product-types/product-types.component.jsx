import React, { useEffect, useContext } from "react";
import "./product-types.styles.scss";
import { Product } from "../../components/product/product.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddProduct from "../../components/add-product/add-product.component";
import { ProductContext } from "../../providers/product/product.provider";
import { httpFetchProducts } from "../../services/http-inventory.service";
import { UiSpinner } from "../../components/with-spinner/ui-spinner.component";

const ProductTypes = () => {
  const {
    onToggleHidden,
    state,
    fetchProducts,
    fetchProductsSuccess,
    fetchProductsError,
  } = useContext(ProductContext);

  const { isLoading, currentProducts } = state;

  useEffect(() => {
    fetchProducts();
    httpFetchProducts()
      .then((res) => res.json())
      .then((products) => fetchProductsSuccess(products))
      .catch((error) => fetchProductsError(error));
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <UiSpinner />
      ) : (
        <div className="products__wrapper">
          {currentProducts.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
          <AddItem handleClick={onToggleHidden} />
          <AddProduct />
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductTypes;
