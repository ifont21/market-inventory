import React from "react";
import "./add-existence.styles.scss";

import { UiInput } from "../../components/ui-input/ui-input.component";
import { UiButton } from "../../components/ui-button/ui-button.component";
import { useState } from "react";
import { useContext } from "react";
import { InventoryContext } from "../../providers/inventory/inventory.provider";

const AddExistence = () => {
  const [newExistence, setExistence] = useState({
    id: "",
    brand: "",
    amount: 0,
  });

  const { setToogleHiddenDialog, hidden } = useContext(InventoryContext);

  const { id, brand, amount } = newExistence;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExistence({ ...newExistence, [name]: value });
  };

  const cancel = (event) => {
    event.preventDefault();
    setToogleHiddenDialog();
  };

  const createNewExistence = (event) => {
    event.preventDefault();

    const existence = {
      ...this.state,
      img:
        "https://www.buckhill.co.uk/assets/images/ximg_placeholder.png.pagespeed.ic.N8PbnIMBT7.png",
    };

    // dispatch(addExistence(existence));

    setExistence({
      id: "",
      brand: "",
      amount: 0,
    });
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
              name="id"
              label="Id"
              type="text"
              value={id}
              handleChange={handleChange}
            />
          </div>
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
