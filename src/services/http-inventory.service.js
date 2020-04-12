export const fetchInventoryByCategories = () => {
  return fetch("http://localhost:8081/api/products/inventory");
};
