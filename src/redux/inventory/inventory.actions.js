import { types } from "./inventory.types";

export const fetchInventory = () => ({
  type: types.FETCH_INVENTORY,
});

export const fetchInventorySuccess = (inventory) => ({
  type: types.FETCH_INVENTORY_SUCCESS,
  payload: inventory,
});

export const fetchInventoryError = (error) => ({
  type: types.FETCH_INVENTORY_ERROR,
  payload: error,
});

export const fetchInventoryByCategories = () => (dispatch) => {
  dispatch(fetchInventory());
  fetch("http://localhost:8081/api/products/inventory")
    .then((response) => response.json())
    .then((inventory) => {
      dispatch(fetchInventorySuccess(inventory));
    })
    .catch((error) => dispatch(fetchInventoryError(error)));
};
