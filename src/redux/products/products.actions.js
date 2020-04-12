import { types } from "./products.types";

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (products) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = (error) => ({
  type: types.FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const toggleCreate = () => ({
  type: types.TOGGLE_CREATE,
});

export const createProduct = (product) => ({
  type: types.CREATE_PRODUCT,
  payload: product,
});

export const fetchProductsAsync = () => (dispatch) => {
  dispatch(fetchProducts());
  fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((products) => dispatch(fetchProductsSuccess(products)))
    .catch((error) => dispatch(fetchProductsError(error)));
};
