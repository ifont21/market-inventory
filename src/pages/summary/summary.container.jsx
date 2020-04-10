import { createStructuredSelector } from "reselect";
import { selectIsLoadingInventory } from "../../redux/inventory/inventory.selectors";
import { connect } from "react-redux";
import { compose } from "redux";

import Summary from "./summary.component";
import { withSpinner } from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingInventory,
});

const SummaryContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Summary);

export default SummaryContainer;
