import React, { useState, useRef } from "react";
import "./existence.styles.scss";

import { ExistenceItem } from "../../components/existence-item/existence-item.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddExistence from "../../components/addExistence/addExistence";
import EditInventory from "../../components/editInventory/editInventory.component";

const Existence = ({ currentExistences, setToogleHiddenDialog, category }) => {
  const [selectedProduct, selectProduct] = useState(null);
  const dialogRef = useRef();

  const onEditProduct = (product) => {
    selectProduct(product);
    dialogRef.current.open();
  };

  return (
    <div className="existence__wrapper">
      {currentExistences.map((existence) => {
        return (
          <ExistenceItem
            key={existence.id}
            {...existence}
            handleSelect={onEditProduct}
          />
        );
      })}
      <AddItem handleClick={setToogleHiddenDialog} />
      <AddExistence category={category} />
      <EditInventory ref={dialogRef} product={selectedProduct} />
    </div>
  );
};

export default Existence;
