import React from "react";
import "./ui-input.styles.scss";

export const UiInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="ui-input__wrapper">
      <input
        className="ui-input__input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <span
          className={`${
            otherProps.value.length ? "ui-input--shrink" : "ui-input__label"
          }`}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
};
