export const httpFetchInventoryByCategories = () => {
  return fetch("http://localhost:8081/api/products/inventory");
};

export const httpFetchProducts = () => {
  return fetch("http://localhost:8081/api/products");
};
