import React from "react";
import "./with-spinner.styles.scss";

export const withSpinner = (WrappedComponent) => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <div className="spinner__wrapper">
      <div className="spinner__item"></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
