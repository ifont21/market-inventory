import React from "react";
import "./ui-button.styles.scss";

export const UiButton = ({ type, children, handleClick }) => {
  return (
    <button className={`btn ${type}`} onClick={handleClick}>
      {children}
    </button>
  );
};
