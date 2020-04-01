import React from "react";
import "./product-dashboard.styles.scss";
import { Route, Switch } from "react-router-dom";

import { NavMenu } from "../../components/nav-menu/nav-menu.component";
import ProductTypes from "../product-types/product-types.component";
import Existence from "../existence/existence.component";

export const ProductDashboard = ({ match }) => {
  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__aside">
        <NavMenu match={match} />
      </div>
      <div className="dashboard__main-section">
        <Switch>
          <Route exact path={`${match.path}/`} component={ProductTypes} />
          <Route exact path={`${match.path}/existence`} component={Existence} />
        </Switch>
      </div>
    </div>
  );
};
