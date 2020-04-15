import React, { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";

const INITIAL_STATE = {
  currentProducts: [],
  isLoading: false,
  error: null,
};

export const ProductContext = createContext({
  hidden: true,
  onToggleHidden: () => {},
  fetchProducts: () => {},
  fetchProductsSuccess: () => {},
  fetchProductsError: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        currentProducts: action.payload,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        currentProducts: action.error,
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [hidden, setToggleHidden] = useState(true);
  const onToggleHidden = () => setToggleHidden(!hidden);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchProducts = () => dispatch({ type: "FETCH_PRODUCTS" });

  const fetchProductsSuccess = (products) =>
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });

  const fetchProductsError = (error) =>
    dispatch({ type: "FETCH_PRODUCTS_ERROR", payload: error });

  return (
    <ProductContext.Provider
      value={{
        hidden,
        onToggleHidden,
        state,
        fetchProducts,
        fetchProductsSuccess,
        fetchProductsError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
