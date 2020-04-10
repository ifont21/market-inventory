import { types } from "./inventory.types";

const INITIAL_STATE = {
  currentInventory: null,
  isLoading: false,
  error: null,
};

const inventoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.FETCH_INVENTORY:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_INVENTORY_SUCCESS:
      return {
        ...state,
        currentInventory: payload,
        isLoading: false,
      };
    case types.FETCH_INVENTORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
