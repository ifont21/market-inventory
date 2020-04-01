import { createSelector } from "reselect";

const selectProducts = state => state.products;

export const selectCurrentProducts = createSelector(
  [selectProducts],
  products => products.currentProducts
);

export const selectToggleDialog = createSelector(
  [selectProducts],
  products => products.toggleDialog
);

export const selectCurrentProductsCount = createSelector(
  [selectProducts],
  state => state.currentProducts && state.currentProducts.length
);
