import React, { useEffect, useContext } from "react";
import { InventoryContext } from "../../providers/inventory/inventory.provider";

const withDashboardData = (WrappedComponent) => {
  const ProductDashboardData = (props) => {
    const { fetchInventoryAsync } = useContext(InventoryContext);

    useEffect(() => {
      fetchInventoryAsync();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ProductDashboardData;
};

export default withDashboardData;
