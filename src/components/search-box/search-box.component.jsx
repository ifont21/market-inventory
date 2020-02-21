import React from "react";
import "./search-box.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBox = ({ onSearchTerm, hideSearchBox, onShowFilter }) => {
  return (
    <div className="search-box__wrapper">
      <FontAwesomeIcon
        className="search-box__icon"
        icon="search"
        onClick={onShowFilter}
      />
      <input
        hidden={hideSearchBox}
        type="text"
        className="search-box__input"
        placeholder="search product"
        onChange={onSearchTerm}
      />
    </div>
  );
};
