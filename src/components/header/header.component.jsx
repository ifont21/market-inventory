import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { UiButton } from "../ui-button/ui-button.component";
import { auth } from "../../firebase/firebase.util";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, history }) => {
  return (
    <div
      className={`header__wrapper ${
        currentUser ? "header--wrapper-logged-in" : ""
      }`}
    >
      <div className="header__logo">
        <h2>mInventory</h2>
      </div>
      <div className="header__options">
        {currentUser ? (
          <span className="header__user">Hello {currentUser.displayName}</span>
        ) : (
          <div className="header__links">
            <Link to="/" className="header__link-item">
              Home
            </Link>
            <Link to="pricing" className="header__link-item">
              Pricing
            </Link>
            <Link to="contactus" className="header__link-item">
              Contact Us
            </Link>
          </div>
        )}
        <div className="header__actions">
          {currentUser ? (
            <UiButton
              handleClick={() => {
                auth.signOut();
                history.push("/");
              }}
            >
              Sign Out
            </UiButton>
          ) : (
            <Link
              to="signin"
              className="header__link-item header--button-link primary"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const storeConnect = connect(mapStateToProps);

export default withRouter(storeConnect(Header));
