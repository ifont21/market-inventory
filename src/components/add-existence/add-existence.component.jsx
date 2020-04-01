import React from "react";
import "./add-existence.styles.scss";

import { UiInput } from "../../components/ui-input/ui-input.component";
import { UiButton } from "../../components/ui-button/ui-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  toggleAdd,
  addExistence
} from "../../redux/existences/existences.actions";

class AddExistence extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      brand: "",
      amount: 0
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  cancel = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(toggleAdd());
  };

  addExistence = event => {
    const { dispatch } = this.props;
    event.preventDefault();

    const existence = {
      ...this.state,
      img:
        "https://www.buckhill.co.uk/assets/images/ximg_placeholder.png.pagespeed.ic.N8PbnIMBT7.png"
    };

    dispatch(addExistence(existence));

    this.setState({
      id: "",
      brand: "",
      amount: 0
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
            <h2>New Existence</h2>
            <div className="add-product__input">
              <UiInput
                name="id"
                label="Id"
                type="text"
                value={this.state.id}
                handleChange={this.handleChange}
              />
            </div>
            <div className="add-product__input">
              <UiInput
                name="brand"
                label="Brand"
                type="text"
                value={this.state.brand}
                handleChange={this.handleChange}
              />
            </div>
            <div className="add-product__input">
              <UiInput
                name="amount"
                label="Amount"
                type="number"
                value={this.state.amount}
                handleChange={this.handleChange}
              />
            </div>
          </div>

          <div className="add-product__actions">
            <UiButton handleClick={this.cancel}> Cancel </UiButton>
            <UiButton handleClick={this.addExistence} type="primary">
              Save
            </UiButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null)(AddExistence);
