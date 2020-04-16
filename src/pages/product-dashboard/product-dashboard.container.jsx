import React, { useEffect, useContext } from "react";
import { InventoryContext } from "../../providers/inventory/inventory.provider";
import { httpFetchInventoryByCategories } from "../../services/http-inventory.service";

const withDashboardData = (WrappedComponent) => {
  const ProductDashboardData = (props) => {
    const {
      fetchInventoryStart,
      fetchInventorySuccess,
      fetchInventoryError,
    } = useContext(InventoryContext);

    useEffect(() => {
      fetchInventoryStart();
      httpFetchInventoryByCategories()
        .then((res) => res.json())
        .then((inventory) => fetchInventorySuccess(inventory))
        .catch((error) => fetchInventoryError(error));
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ProductDashboardData;
};

export default withDashboardData;
