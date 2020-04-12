import { types } from "./products.types";

const INITIAL_STATE = {
  currentProducts: [],
  isLoading: false,
  error: null,
  toggleDialog: false,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        currentProducts: action.payload,
        isLoading: false,
      };
    case types.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case types.TOGGLE_CREATE:
      return {
        ...state,
        toggleDialog: !state.toggleDialog,
      };

    case types.CREATE_PRODUCT:
      return {
        ...state,
        toggleDialog: !state.toggleDialog,
        currentProducts: [...state.currentProducts, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
