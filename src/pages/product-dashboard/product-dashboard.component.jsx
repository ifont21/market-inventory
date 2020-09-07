import React from "react";
import "./product-dashboard.styles.scss";
import { Route, Switch } from "react-router-dom";

import { NavMenu } from "../../components/nav-menu/nav-menu.component";
import { useRouteMatch } from "react-router-dom";
import SummaryContainer from "../summary/summary.container";
import ExistenceContainer from "../existence/existence.container";
import ProductTypesContainer from "../product-types/product-types.container";
import { Redirect } from "react-router-dom";
import ProductProvider from "../../providers/product/product.provider";
import withDashboardData from "./product-dashboard.container";
import HeaderProduct from "../../components/headerProduct/headerProduct";

const ProductDashboard = () => {
  const match = useRouteMatch();

  return (
    <div className="dashboard__wrapper">
      <HeaderProduct />
      <div className="dashboard__section">
        <div className="dashboard__aside">
          <NavMenu match={match} />
        </div>
        <div className="dashboard__main-section">
          <ProductProvider>
            <Switch>
              <Route
                exact
                path={`${match.path}/`}
                render={() => <Redirect to={`${match.path}/inventory`} />}
              />
              <Route
                exact
                path={`${match.path}/inventory`}
                component={SummaryContainer}
              />
              <Route
                exact
                path={`${match.path}/inventory/:category`}
                component={ExistenceContainer}
              />
              <Route
                exact
                path={`${match.path}/products`}
                component={ProductTypesContainer}
              />
            </Switch>
          </ProductProvider>
        </div>
      </div>
    </div>
  );
};

export default withDashboardData(ProductDashboard);
