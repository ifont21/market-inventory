import axios from "axios";

export const httpFetchInventoryByCategories = () => {
  return fetch("http://localhost:8081/api/products/inventory");
};

export const httpFetchProducts = () => {
  return fetch("http://localhost:8081/api/products");
};

export const httpCreateProduct = (product) => {
  return axios.post("http://localhost:8081/api/products", product);
};

export const httpAddExistence = (inventory) => {
  return axios.post("http://localhost:8081/api/products/inventory", inventory);
};

export const updateInventoryAmount = ({ id, amount }) => {
  const payload = {
    type: "existence",
    payload: {
      amount,
    },
  };
  return axios.patch(
    `http://localhost:8081/api/products/inventory/${id}`,
    payload
  );
};
