import { createStructuredSelector } from "reselect";
import { selectIsLoadingInventory } from "../../redux/inventory/inventory.selectors";
import { connect } from "react-redux";
import { compose } from "redux";

import Existence from "./existence.component";
import { withSpinner } from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingInventory,
});

const ExistenceContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Existence);

export default ExistenceContainer;
