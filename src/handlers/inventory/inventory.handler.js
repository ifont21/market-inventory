export const getCurrentInventoryList = (currentInventory) => {
  if (!currentInventory) return [];

  const inventoryByCategory = Object.keys(currentInventory).map((category) => {
    const categoryItems = currentInventory[category];
    return {
      ...categoryItems,
      name: category.toUpperCase(),
    };
  });

  return inventoryByCategory;
};

export const getInventoryCategory = (currentInventory, category) => {
  if (!category) return [];

  if (!currentInventory) return [];

  return currentInventory[category].items;
};
