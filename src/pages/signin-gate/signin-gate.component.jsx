import React from "react";
import "./signin-gate.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

export const SignInGate = props => {
  return (
    <div className="inventory-gate__wrapper">
      <div className="inventory-gate__content">
        <div className="inventory-gate__signin">
          <h2>I Already have an account</h2>
          <SignInForm />
        </div>
        <div className="inventory-gate__signup">
          <h2>I Do Not have an Account</h2>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
