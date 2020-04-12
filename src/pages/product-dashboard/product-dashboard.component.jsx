import React from "react";
import "./product-dashboard.styles.scss";
import { Route, Switch } from "react-router-dom";

import { NavMenu } from "../../components/nav-menu/nav-menu.component";
import { connect } from "react-redux";
import { fetchInventoryByCategories } from "../../redux/inventory/inventory.actions";

import SummaryContainer from "../summary/summary.container";
import ExistenceContainer from "../existence/existence.container";
import { useEffect } from "react";
import ProductTypesContainer from "../product-types/product-types.container";
import ExistenceProviders from "../../providers/existence/existence.provider";

const ProductDashboard = ({ match, fetchInventory }) => {
  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__aside">
        <NavMenu match={match} />
      </div>
      <div className="dashboard__main-section">
        <ExistenceProviders>
          <Switch>
            <Route exact path={`${match.path}/`} component={SummaryContainer} />
            <Route
              exact
              path={`${match.path}/:category`}
              component={ExistenceContainer}
            />
            <Route
              exact
              path={`${match.path}/products`}
              component={ProductTypesContainer}
            />
          </Switch>
        </ExistenceProviders>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: () => dispatch(fetchInventoryByCategories()),
});

export default connect(null, mapDispatchToProps)(ProductDashboard);
