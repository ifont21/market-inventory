import React from "react";
import "./summary.styles.scss";
import CategoryCard from "../../components/category-card/category-card.component";

const Summary = ({ match, currentInventory }) => {
  return (
    <div className="summary__wrapper">
      {currentInventory.map((inventory, index) => (
        <CategoryCard key={index} match={match} {...inventory} />
      ))}
    </div>
  );
};

export default Summary;
