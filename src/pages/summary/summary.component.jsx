import React from "react";
import "./summary.styles.scss";
import { connect } from "react-redux";
import { selectCurrentInventory } from "../../redux/inventory/inventory.selectors";
import { createStructuredSelector } from "reselect";
import CategoryCard from "../../components/category-card/category-card.component";

const Summary = ({ currentInventory, match }) => {
  return (
    <div className="summary__wrapper">
      {currentInventory.map((inventory, index) => (
        <CategoryCard key={index} match={match} {...inventory} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentInventory: selectCurrentInventory,
});

export default connect(mapStateToProps)(Summary);
