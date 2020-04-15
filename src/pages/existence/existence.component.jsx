import React, { useContext } from "react";

import "./existence.styles.scss";
import { ExistenceItem } from "../../components/existence-item/existence-item.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddExistence from "../../components/add-existence/add-existence.component";

import { InventoryContext } from "../../providers/inventory/inventory.provider";
import { getInventoryCategory } from "../../handlers/inventory/inventory.handler";
import { UiSpinner } from "../../components/with-spinner/ui-spinner.component";

const Existence = ({ match }) => {
  const category = match && match.params && match.params.category;
  const { setToogleHiddenDialog, state } = useContext(InventoryContext);
  const { isLoading, currentInventory } = state;
  const currentExistences = getInventoryCategory(currentInventory, category);

  return (
    <React.Fragment>
      {isLoading ? (
        <UiSpinner />
      ) : (
        <div className="existence__wrapper">
          {currentExistences.map((existence) => {
            return <ExistenceItem key={existence.id} {...existence} />;
          })}
          <AddItem handleClick={setToogleHiddenDialog} />
          <AddExistence />
        </div>
      )}
    </React.Fragment>
  );
};

export default Existence;
