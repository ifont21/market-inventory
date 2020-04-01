import { types } from "./products.types";

export const setProducts = products => ({
  type: types.SET_PRODUCTS,
  payload: products
});

export const toggleCreate = () => ({
  type: types.TOGGLE_CREATE
});

export const createProduct = product => ({
  type: types.CREATE_PRODUCT,
  payload: product
});
