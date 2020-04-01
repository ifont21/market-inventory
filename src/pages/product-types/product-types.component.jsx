import React from "react";
import { connect } from "react-redux";
import "./product-types.styles.scss";
import { Product } from "../../components/product/product.component";
import {
  setProducts,
  toggleCreate
} from "../../redux/products/products.actions";
import { AddItem } from "../../components/add-item/add-item.component";
import AddProduct from "../../components/add-product/add-product.component";
import {
  selectCurrentProducts,
  selectToggleDialog
} from "../../redux/products/products.selectors";
import { createStructuredSelector } from "reselect";
import { products } from "../../redux/products/products.mock";

class ProductTypes extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(setProducts(products));
  }

  toggleCreate = () => {
    const { dispatch } = this.props;
    dispatch(toggleCreate());
  };

  render() {
    const { toggleDialog } = this.props;
    return (
      <div className="products__wrapper">
        {this.props.currentProducts.map(product => {
          return <Product key={product.id} {...product} />;
        })}
        <AddItem handleClick={this.toggleCreate} />
        <AddProduct open={toggleDialog} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentProducts: selectCurrentProducts,
  toggleDialog: selectToggleDialog
});

export default connect(mapStateToProps)(ProductTypes);
