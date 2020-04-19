import React, { useEffect } from "react";
import withDialog from "../../hocs/withDialog/withDialog.component";
import { useState } from "react";
import { UiInput } from "../ui-input/ui-input.component";
import { UiButton } from "../ui-button/ui-button.component";
import { EditInventoryWrapper, Actions } from "./editInventory.styles";
import { updateInventoryAmount } from "../../services/http-inventory.service";
import { useContext } from "react";
import { InventoryContext } from "../../providers/inventory/inventory.provider";

const EditInventory = ({ product, closeModal }) => {
  product = product || {};
  let { id, brand, amount } = product;

  const [amountField, setAmount] = useState(0);
  const { fetchInventoryAsync } = useContext(InventoryContext);

  useEffect(() => {
    setAmount(amount);
  }, [amount]);

  const handleAmountChange = ({ target }) => {
    const { value } = target;
    setAmount(value);
  };

  const closeDialog = (event) => {
    event.preventDefault();
    closeModal();
  };

  const updateAmount = (event) => {
    event.preventDefault();
    updateInventoryAmount({ id, amount: amountField })
      .then((response) => {
        fetchInventoryAsync();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <EditInventoryWrapper>
      <h2>Update {brand} amount</h2>
      <form>
        <UiInput
          name="amount"
          label="Amount"
          type="number"
          value={amountField || 0}
          handleChange={handleAmountChange}
        />
        <Actions>
          <UiButton handleClick={closeDialog}>Cancel</UiButton>
          <UiButton handleClick={updateAmount} type="primary">
            Update
          </UiButton>
        </Actions>
      </form>
    </EditInventoryWrapper>
  );
};

export default withDialog(EditInventory);
