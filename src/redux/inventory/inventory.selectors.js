import { createSelector } from "reselect";

const selectInventory = (state) => state.inventory;

export const selectIsLoadingInventory = createSelector(
  selectInventory,
  (inventory) => inventory && inventory.isLoading
);

export const selectErrorLoadingInventory = createSelector(
  selectInventory,
  (inventory) => inventory && inventory.error
);

export const selectCurrentInventory = createSelector(
  selectInventory,
  (inventory) => {
    const currentInventory = inventory && inventory.currentInventory;

    if (!currentInventory) return [];

    const inventoryByCategory = Object.keys(currentInventory).map(
      (category) => {
        const categoryItems = currentInventory[category];
        return {
          ...categoryItems,
          name: category.toUpperCase(),
        };
      }
    );

    return inventoryByCategory;
  }
);

export const selectInventoryCategory = (category) =>
  createSelector(selectInventory, (inventory) => {
    const currentInventory = inventory && inventory.currentInventory;

    if (!currentInventory) return [];

    return currentInventory[category].items;
  });
