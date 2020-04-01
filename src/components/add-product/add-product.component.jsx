import React from "react";
import "./add-product.styles.scss";

import { UiInput } from "../../components/ui-input/ui-input.component";
import { UiButton } from "../../components/ui-button/ui-button.component";
import {
  createProduct, toggleCreate
} from "../../redux/products/products.actions";
import { connect } from "react-redux";
import { selectCurrentProductsCount } from "../../redux/products/products.selectors";
import { createStructuredSelector } from "reselect";

class AddProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      type: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  cancel = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(toggleCreate());
  };

  addProduct = event => {
    const { dispatch, productsCount } = this.props;
    event.preventDefault();

    const product = {
      ...this.state,
      id: productsCount + 1,
      img:
        "https://www.buckhill.co.uk/assets/images/ximg_placeholder.png.pagespeed.ic.N8PbnIMBT7.png",
      existence: [],
      registeredBrands: []
    };

    dispatch(createProduct(product));

    this.setState({
      name: "",
      type: ""
    });
  };

  render() {
    const { open } = this.props;

    return (
      <div
        style={{ visibility: open ? "visible" : "hidden" }}
        className="add-product__wrapper"
      >
        <form className="add-product__form">
          <div className="add-product__body">
            <h2>New Product</h2>
            <div className="add-product__input">
              <UiInput
                name="name"
                label="Name"
                type="text"
                value={this.state.name}
                handleChange={this.handleChange}
              />
            </div>
            <div className="add-product__input">
              <UiInput
                name="type"
                label="Type"
                type="text"
                value={this.state.type}
                handleChange={this.handleChange}
              />
            </div>
          </div>

          <div className="add-product__actions">
            <UiButton handleClick={this.cancel}> Cancel </UiButton>
            <UiButton handleClick={this.addProduct} type="primary">
              Save
            </UiButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  productsCount: selectCurrentProductsCount
});

const stateConnect = connect(mapStateToProps);

export default stateConnect(AddProduct);
