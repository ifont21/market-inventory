import React from "react";

import "./header.styles.scss";
import { UiButton } from "../ui-button/ui-button.component";

import {
  OptionLink,
  OptionLinkContainer,
  HeaderOptions,
} from "./header.styles";

const Header = ({ currentUser, history, setCurrentUser }) => {
  return (
    <div
      className={`header__wrapper ${
        currentUser ? "header--wrapper-logged-in" : ""
      }`}
    >
      <div className="header__logo">
        <h2>mInventory</h2>
      </div>
      <HeaderOptions>
        {currentUser ? (
          <span className="header__user">Hello {currentUser.displayName}</span>
        ) : (
          <OptionLinkContainer>
            <OptionLink to="/">Home</OptionLink>
            <OptionLink to="/">Pricing</OptionLink>
            <OptionLink to="/">Contact Us</OptionLink>
          </OptionLinkContainer>
        )}
        <OptionLinkContainer>
          {currentUser ? (
            <UiButton
              handleClick={() => {
                setCurrentUser(null);
                history.push("/");
              }}
            >
              Sign Out
            </UiButton>
          ) : (
            <OptionLink isbutton="true" primary="true" to="/signin">
              Sign In
            </OptionLink>
          )}
        </OptionLinkContainer>
      </HeaderOptions>
    </div>
  );
};

export default Header;
