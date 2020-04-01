import React from "react";
import "./add-item.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddItem = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="add-item__wrapper">
      <FontAwesomeIcon className="add-item__icon" icon="plus" />
    </div>
  );
};
