import React from "react";
import "./addExistence.scss";

import { UiInput } from "../../components/ui-input/ui-input.component";
import { UiButton } from "../../components/ui-button/ui-button.component";
import { useState } from "react";
import { useContext } from "react";
import { InventoryContext } from "../../providers/inventory/inventory.provider";
import UiSelect from "../uiSelect/uiSelect";
import { ProductContext } from "../../providers/product/product.provider";
import { httpAddExistence } from "../../services/http-inventory.service";

const AddExistence = ({ category }) => {
  const [newExistence, setExistence] = useState({
    brand: "",
    amount: 0,
    type: null,
  });

  const { setToogleHiddenDialog, hidden, fetchInventoryAsync } = useContext(
    InventoryContext
  );
  const {
    state: { currentProducts },
  } = useContext(ProductContext);

  const productsItems =
    currentProducts &&
    currentProducts.map((product) => ({
      key: product.id,
      value: product.name,
    }));

  const { brand, amount } = newExistence;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExistence({ ...newExistence, [name]: value });
  };

  const handleSelectChange = (change) => {
    const { name, value } = change;
    setExistence({ ...newExistence, [name]: value.key });
  };

  const cleanForm = () => {
    setExistence({
      id: "",
      brand: "",
      amount: 0,
      type: null,
    });
  };

  const cancel = (event) => {
    event.preventDefault();
    setToogleHiddenDialog();
  };

  const createNewExistence = (event) => {
    event.preventDefault();

    const inventory = {
      ...newExistence,
      img:
        "https://www.buckhill.co.uk/assets/images/ximg_placeholder.png.pagespeed.ic.N8PbnIMBT7.png",
      category: category.toUpperCase(),
      exist: amount > 0,
    };

    httpAddExistence(inventory)
      .then((inventory) => {
        fetchInventoryAsync();
        setToogleHiddenDialog();
        cleanForm();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{ visibility: !hidden ? "visible" : "hidden" }}
      className="add-product__wrapper"
    >
      <form className="add-product__form">
        <div className="add-product__body">
          <h2>New Existence</h2>
          <div className="add-product__input">
            <UiInput
              name="brand"
              label="Brand"
              type="text"
              value={brand}
              handleChange={handleChange}
            />
          </div>
          <div className="add-product__input">
            <UiInput
              name="amount"
              label="Amount"
              type="number"
              value={amount}
              handleChange={handleChange}
            />
          </div>
          <div className="add-product__input">
            <UiSelect
              name="type"
              options={productsItems}
              handleChange={handleSelectChange}
            />
          </div>
        </div>

        <div className="add-product__actions">
          <UiButton handleClick={cancel}> Cancel </UiButton>
          <UiButton handleClick={createNewExistence} type="primary">
            Save
          </UiButton>
        </div>
      </form>
    </div>
  );
};

export default AddExistence;
