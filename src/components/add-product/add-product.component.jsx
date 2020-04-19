import React, { useState } from "react";
import "./add-product.styles.scss";

import { UiInput } from "../../components/ui-input/ui-input.component";
import { UiButton } from "../../components/ui-button/ui-button.component";
import { useContext } from "react";
import { ProductContext } from "../../providers/product/product.provider";
import { httpCreateProduct } from "../../services/http-inventory.service";
import UiSelect from "../uiSelect/uiSelect";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
  });

  const { onToggleHidden, hidden, state, fetchProductsAsync } = useContext(
    ProductContext
  );
  const { currentProducts } = state;
  const { name } = product;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSelectChange = (change) => {
    const { name, value } = change;
    setProduct({ ...product, [name]: value.key });
  };

  const cancel = (event) => {
    event.preventDefault();
    onToggleHidden();
  };

  const addProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      ...product,
      id: currentProducts.productsCount + 1,
      img:
        "https://www.buckhill.co.uk/assets/images/ximg_placeholder.png.pagespeed.ic.N8PbnIMBT7.png",
      brands: [],
    };

    httpCreateProduct(newProduct)
      .then((response) => {
        setProduct({
          name: "",
          category: "",
        });
        fetchProductsAsync();
        onToggleHidden();
      })
      .catch((error) => console.error(error));

    setProduct({
      name: "",
      category: "",
    });
  };

  const categories = [
    { key: "CLEAN", value: "CLEAN" },
    { key: "BEAUTY", value: "BEAUTY" },
    { key: "FOOD", value: "FOOD" },
  ];

  return (
    <div
      style={{ display: !hidden ? "block" : "none" }}
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
            <UiSelect
              placeholder="Select Category"
              name="category"
              options={categories}
              handleChange={handleSelectChange}
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

export default AddProduct;
