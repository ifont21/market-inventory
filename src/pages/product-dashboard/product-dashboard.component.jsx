import React from "react";
import "./product-dashboard.styles.scss";
import { Route, Switch } from "react-router-dom";

import { NavMenu } from "../../components/nav-menu/nav-menu.component";
import { useRouteMatch } from "react-router-dom";
import SummaryContainer from "../summary/summary.container";
import ExistenceContainer from "../existence/existence.container";
import { useEffect } from "react";
import ProductTypesContainer from "../product-types/product-types.container";
import { InventoryContext } from "../../providers/inventory/inventory.provider";
import { Redirect } from "react-router-dom";
import ProductProvider from "../../providers/product/product.provider";
import { useContext } from "react";
import { httpFetchInventoryByCategories } from "../../services/http-inventory.service";

const ProductDashboard = () => {
  const {
    fetchInventoryStart,
    fetchInventorySuccess,
    fetchInventoryError,
  } = useContext(InventoryContext);

  const match = useRouteMatch();

  useEffect(() => {
    fetchInventoryStart();
    httpFetchInventoryByCategories()
      .then((res) => res.json())
      .then((inventory) => fetchInventorySuccess(inventory))
      .catch((error) => fetchInventoryError(error));
  }, []);

  return (
    <div className="dashboard__wrapper">
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
  );
};

export default ProductDashboard;
