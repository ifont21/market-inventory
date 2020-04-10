import React from "react";

import "./existence.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ExistenceItem } from "../../components/existence-item/existence-item.component";
import { AddItem } from "../../components/add-item/add-item.component";
import { selectToggleAdd } from "../../redux/existences/existences.selectors";
import { toggleAdd } from "../../redux/existences/existences.actions";
import AddExistence from "../../components/add-existence/add-existence.component";
import { selectInventoryCategory } from "../../redux/inventory/inventory.selectors";

const Existence = ({ dispatch, currentExistences, openedPanel }) => {
  const openAddExistence = () => dispatch(toggleAdd());

  return (
    <div className="existence__wrapper">
      {currentExistences.map((existence) => {
        return <ExistenceItem key={existence.id} {...existence} />;
      })}
      <AddItem handleClick={openAddExistence} />
      <AddExistence open={openedPanel} />
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  currentExistences: selectInventoryCategory(
    match && match.params && match.params.category
  )(state),
  openedPanel: selectToggleAdd(state),
});

export default connect(mapStateToProps)(Existence);
