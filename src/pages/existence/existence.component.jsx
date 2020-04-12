import React, { useContext } from "react";

import "./existence.styles.scss";
import { connect } from "react-redux";
import { ExistenceItem } from "../../components/existence-item/existence-item.component";
import { AddItem } from "../../components/add-item/add-item.component";
import AddExistence from "../../components/add-existence/add-existence.component";
import { selectInventoryCategory } from "../../redux/inventory/inventory.selectors";

import { ExistenceContext } from "../../providers/existence/existence.provider";

const Existence = ({ currentExistences }) => {
  const { setToogleHiddenDialog } = useContext(ExistenceContext);

  return (
    <div className="existence__wrapper">
      {currentExistences.map((existence) => {
        return <ExistenceItem key={existence.id} {...existence} />;
      })}
      <AddItem handleClick={setToogleHiddenDialog} />
      <AddExistence />
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  currentExistences: selectInventoryCategory(
    match && match.params && match.params.category
  )(state),
});

export default connect(mapStateToProps)(Existence);
