import React from "react";
import "./homepage.styles.scss";

export const HomePage = () => {
  return (
    <div className="homepage__wrapper">
      <span className="homepage__main-text">Plan Your Market Better!</span>
      <ul className="homepage__steps">
        <li>
          <span>1.</span>Start creating products
        </li>
        <li>
          <span>2.</span>Keep updating the product status
        </li>
        <li>
          <span>3.</span>Export your List
        </li>
      </ul>
    </div>
  );
};
