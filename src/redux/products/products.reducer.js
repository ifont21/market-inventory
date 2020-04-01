import { types } from "./products.types";

const INITIAL_STATE = {
  currentProducts: [],
  toggleDialog: false
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {
        ...state,
        currentProducts: action.payload
      };

    case types.TOGGLE_CREATE:
      return {
        ...state,
        toggleDialog: !state.toggleDialog
      };

    case types.CREATE_PRODUCT:
      return {
        ...state,
        toggleDialog: !state.toggleDialog,
        currentProducts: [...state.currentProducts, action.payload]
      };
    default:
      return state;
  }
};

export default productsReducer;
