import productTypes from "./product-types.component";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/product/product.provider";
import { httpFetchProducts } from "../../services/http-inventory.service";
import { withSpinner } from "../../hocs/with-spinner/with-spinner.component";

const withProductTypesData = (WrappedComponent) => (props) => {
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
    <WrappedComponent
      onToggleHidden={onToggleHidden}
      isLoading={isLoading}
      currentProducts={currentProducts}
      {...props}
    />
  );
};

const ProductTypesContainer = withProductTypesData(withSpinner(productTypes));

export default ProductTypesContainer;
