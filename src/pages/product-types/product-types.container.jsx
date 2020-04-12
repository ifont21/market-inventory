import { createStructuredSelector } from "reselect";
import {
  selectCurrentProducts,
  selectToggleDialog,
} from "../../redux/products/products.selectors";
import {
  fetchProductsAsync,
  toggleCreate,
} from "../../redux/products/products.actions";
import { compose } from "redux";
import productTypes from "./product-types.component";
import { connect } from "react-redux";
import { withSpinner } from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  currentProducts: selectCurrentProducts,
  toggleDialog: selectToggleDialog,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsAsync()),
  toggleCreate: () => dispatch(toggleCreate()),
});

const ProductTypesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSpinner
)(productTypes);

export default ProductTypesContainer;
