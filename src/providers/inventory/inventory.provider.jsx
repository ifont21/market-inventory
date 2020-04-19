import React, { createContext, useState, useReducer } from "react";
import { httpFetchInventoryByCategories } from "../../services/http-inventory.service";

export const InventoryContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  fetchInventoryAsync: () => {},
});

const INITIAL_STATE = {
  currentInventory: null,
  isLoading: false,
  error: null,
};

const inventoryReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_INVENTORY_SUCCESS":
      return {
        ...state,
        currentInventory: action.payload,
        isLoading: false,
      };
    case "FETCH_INVENTORY_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const InventoryProvider = ({ children }) => {
  const [hidden, setDialogHidden] = useState(true);
  const [state, dispatch] = useReducer(inventoryReducer, INITIAL_STATE);

  const setToogleHiddenDialog = () => setDialogHidden(!hidden);

  const fetchInventoryStart = () => dispatch({ type: "FETCH_INVENTORY" });

  const fetchInventorySuccess = (currentInventory) =>
    dispatch({ type: "FETCH_INVENTORY_SUCCESS", payload: currentInventory });

  const fetchInventoryError = (error) =>
    dispatch({ type: "FETCH_INVENTORY_ERROR", payload: error });

  const fetchInventoryAsync = () => {
    fetchInventoryStart();
    httpFetchInventoryByCategories()
      .then((res) => res.json())
      .then((inventory) => fetchInventorySuccess(inventory))
      .catch((error) => fetchInventoryError(error));
  };

  return (
    <InventoryContext.Provider
      value={{
        hidden,
        setToogleHiddenDialog,
        state,
        fetchInventoryAsync,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
