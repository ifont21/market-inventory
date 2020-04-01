import React from "react";
import "./existence-item.styles.scss";

export const ExistenceItem = ({ brand, img, amount }) => {
  return (
    <div className="existence__item">
      <div className="existence__image">
        <img src={img} alt={brand} />
      </div>
      <div className="existence__content">
        <span className="existence__brand">{brand}</span>
        <div className="existence__amount">
          <span>Amount: </span>
          <span>{amount}</span>
        </div>
      </div>
    </div>
  );
};
