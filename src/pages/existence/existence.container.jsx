import React, { useContext } from "react";
import Existence from "./existence.component";
import { InventoryContext } from "../../providers/inventory/inventory.provider";
import { getInventoryCategory } from "../../handlers/inventory/inventory.handler";
import { withSpinner } from "../../hocs/with-spinner/with-spinner.component";

const withExistenceData = (WrappedComponent) => ({ match, ...props }) => {
  const category = match && match.params && match.params.category;
  const { setToogleHiddenDialog, state } = useContext(InventoryContext);
  const { isLoading, currentInventory } = state;
  const currentExistences = getInventoryCategory(currentInventory, category);

  return (
    <WrappedComponent
      isLoading={isLoading}
      category={category}
      currentExistences={currentExistences}
      setToogleHiddenDialog={setToogleHiddenDialog}
      {...props}
    />
  );
};

const ExistenceContainer = withExistenceData(withSpinner(Existence));

export default ExistenceContainer;
