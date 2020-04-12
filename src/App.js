import React from "react";
import "./App.scss";

import { HomePage } from "./pages/homepage/homepage.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Route, Switch } from "react-router-dom";
import { SignInGate } from "./pages/signin-gate/signin-gate.component";
import ProductDashboard from "./pages/product-dashboard/product-dashboard.component";
import HeaderContainer from "./components/header/header.container";

library.add(fab, faSearch, faPlus);

const App = () => {
  return (
    <div className="market-inventory__wrapper">
      <div className="market-inventory__header">
        <HeaderContainer />
      </div>
      <div className="market-inventory__content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInGate} />
          <Route path="/dashboard" component={ProductDashboard} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
