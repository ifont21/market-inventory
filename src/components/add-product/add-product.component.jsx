import React, { useState } from "react";
import "./add-product.styles.scss";

import { UiInput } from "../../components/ui-input/ui-input.component";
import { UiButton } from "../../components/ui-button/ui-button.component";
import {
  createProduct,
  toggleCreate,
} from "../../redux/products/products.actions";
import { connect } from "react-redux";
import { selectCurrentProductsCount } from "../../redux/products/products.selectors";
import { createStructuredSelector } from "reselect";
import { useContext } from "react";
import ProductContext from "../../context/product.context";

const AddProduct = ({ dispatch, productsCount }) => {
  const [product, setProduct] = useState({
    name: "",
    type: "",
  });

  const { onToggleHidden, hidden } = useContext(ProductContext);

  const { name, type } = product;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const cancel = (event) => {
    event.preventDefault();
    onToggleHidden();
  };

  const addProduct = (event) => {
    event.preventDefault();

    const product = {
      ...this.state,
      id: productsCount + 1,
      img:
        "https://www.buckhill.co.uk/assets/images/ximg_placeholder.png.pagespeed.ic.N8PbnIMBT7.png",
      existence: [],
      registeredBrands: [],
    };

    dispatch(createProduct(product));

    setProduct({
      name: "",
      type: "",
    });
  };

  return (
    <div
      style={{ visibility: !hidden ? "visible" : "hidden" }}
      className="add-product__wrapper"
    >
      <form className="add-product__form">
        <div className="add-product__body">
          <h2>New Product</h2>
          <div className="add-product__input">
            <UiInput
              name="name"
              label="Name"
              type="text"
              value={name}
              handleChange={handleChange}
            />
          </div>
          <div className="add-product__input">
            <UiInput
              name="type"
              label="Type"
              type="text"
              value={type}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="add-product__actions">
          <UiButton handleClick={cancel}> Cancel </UiButton>
          <UiButton handleClick={addProduct} type="primary">
            Save
          </UiButton>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  productsCount: selectCurrentProductsCount,
});

const stateConnect = connect(mapStateToProps);

export default stateConnect(AddProduct);
