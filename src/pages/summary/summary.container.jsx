import React, { useContext } from "react";
import Summary from "./summary.component";
import { InventoryContext } from "../../providers/inventory/inventory.provider";
import { getCurrentInventoryList } from "../../handlers/inventory/inventory.handler";
import { withSpinner } from "../../hocs/with-spinner/with-spinner.component";

const withSummaryData = (WrappedComponent) => (props) => {
  const { state } = useContext(InventoryContext);
  const { currentInventory: inventory, isLoading } = state;
  const currentInventory = getCurrentInventoryList(inventory);

  return (
    <WrappedComponent
      isLoading={isLoading}
      currentInventory={currentInventory}
      {...props}
    />
  );
};

const SummaryContainer = withSummaryData(withSpinner(Summary));

export default SummaryContainer;
