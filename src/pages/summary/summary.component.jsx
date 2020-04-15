import React from "react";
import "./summary.styles.scss";
import CategoryCard from "../../components/category-card/category-card.component";
import { getCurrentInventoryList } from "../../handlers/inventory/inventory.handler";
import { useContext } from "react";
import { InventoryContext } from "../../providers/inventory/inventory.provider";
import { UiSpinner } from "../../components/with-spinner/ui-spinner.component";

const Summary = ({ match }) => {
  const { state } = useContext(InventoryContext);
  const { currentInventory: inventory, isLoading } = state;
  const currentInventory = getCurrentInventoryList(inventory);

  return (
    <React.Fragment>
      {isLoading ? (
        <UiSpinner />
      ) : (
        <div className="summary__wrapper">
          {currentInventory.map((inventory, index) => (
            <CategoryCard key={index} match={match} {...inventory} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Summary;
