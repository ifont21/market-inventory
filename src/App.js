import React from "react";
import "./App.scss";

import { HomePage } from "./pages/homepage/homepage.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Redirect } from "react-router-dom";

import { Route, Switch } from "react-router-dom";
import { SignInGate } from "./pages/signin-gate/signin-gate.component";
import ProductDashboard from "./pages/product-dashboard/product-dashboard.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import HeaderContainer from "./components/header/header.container";

library.add(fab, faSearch, faPlus);

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    setCurrentUser({
      id: "asdsada",
      displayName: "Ignacio Fontalvo",
      email: "igfont21@gmail.com",
    });
  }

  render() {
    return (
      <div className="market-inventory__wrapper">
        <div className="market-inventory__header">
          <HeaderContainer />
        </div>
        <div className="market-inventory__content">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/dashboard" component={ProductDashboard}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const dispatchConnect = connect(mapStateToProps, mapDispatchToProps);

export default dispatchConnect(App);
