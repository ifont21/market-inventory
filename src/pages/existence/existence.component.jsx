import React from "react";

import "./existence.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ExistenceItem } from "../../components/existence-item/existence-item.component";
import { AddItem } from "../../components/add-item/add-item.component";
import {
  selectCurrentExistences,
  selectToggleAdd
} from "../../redux/existences/existences.selectors";
import {
  loadExistence,
  toggleAdd
} from "../../redux/existences/existences.actions";
import { existences } from "../../redux/existences/existences.mock";
import AddExistence from "../../components/add-existence/add-existence.component";

class Existence extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadExistence(existences));
  }

  openAddExistence = () => {
    const { dispatch } = this.props;
    dispatch(toggleAdd());
  };

  render() {
    const { toggleAdd } = this.props;

    return (
      <div className="existence__wrapper">
        {this.props.currentExistences.map(existence => {
          return <ExistenceItem key={existence.id} {...existence} />;
        })}
        <AddItem handleClick={this.openAddExistence} />
        <AddExistence open={toggleAdd} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentExistences: selectCurrentExistences,
  toggleAdd: selectToggleAdd
});

export default connect(mapStateToProps)(Existence);
