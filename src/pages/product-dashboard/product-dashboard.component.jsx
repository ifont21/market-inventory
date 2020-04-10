import React from "react";
import "./product-dashboard.styles.scss";
import { Route, Switch } from "react-router-dom";

import { NavMenu } from "../../components/nav-menu/nav-menu.component";
import ProductTypes from "../product-types/product-types.component";
import { connect } from "react-redux";
import { fetchInventoryByCategories } from "../../redux/inventory/inventory.actions";

import SummaryContainer from "../summary/summary.container";
import ExistenceContainer from "../existence/existence.container";

class ProductDashboard extends React.Component {
  componentDidMount() {
    const { fetchInventory } = this.props;
    fetchInventory();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="dashboard__wrapper">
        <div className="dashboard__aside">
          <NavMenu match={match} />
        </div>
        <div className="dashboard__main-section">
          <Switch>
            <Route exact path={`${match.path}/`} component={SummaryContainer} />
            <Route
              exact
              path={`${match.path}/products`}
              component={ProductTypes}
            />
            <Route
              exact
              path={`${match.path}/:category`}
              component={ExistenceContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: () => dispatch(fetchInventoryByCategories()),
});

export default connect(null, mapDispatchToProps)(ProductDashboard);
