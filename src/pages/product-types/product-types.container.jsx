import productTypes from "./product-types.component";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/product/product.provider";
import { withSpinner } from "../../hocs/with-spinner/with-spinner.component";

const withProductTypesData = (WrappedComponent) => (props) => {
  const { onToggleHidden, state, fetchProductsAsync } = useContext(
    ProductContext
  );
  const { isLoading, currentProducts } = state;

  useEffect(() => {
    fetchProductsAsync();
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
