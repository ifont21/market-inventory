import React from "react";
import "./existence.styles.scss";

import { ExistenceItem } from "../../components/existence-item/existence-item.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddExistence from "../../components/add-existence/add-existence.component";

const Existence = ({ currentExistences, setToogleHiddenDialog }) => {
  return (
    <div className="existence__wrapper">
      {currentExistences.map((existence) => {
        return <ExistenceItem key={existence.id} {...existence} />;
      })}
      <AddItem handleClick={setToogleHiddenDialog} />
      <AddExistence />
    </div>
  );
};

export default Existence;
