import React, { useState, useContext } from "react";
import "./sign-in-form.styles.scss";
import { UiButton } from "../ui-button/ui-button.component";
import { UiInput } from "../ui-input/ui-input.component";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../providers/user/userProvider";

const SignInForm = ({ history }) => {
  const { loadUser } = useContext(UserContext);

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const signIn = (event) => {
    event.preventDefault();

    loadUser({
      id: "asdsada",
      displayName: "Ignacio Fontalvo",
      email: "igfont21@gmail.com",
    });

    setCredentials({
      email: "",
      password: "",
    });

    history.push("/dashboard");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const singInWithGoogle = () => {};

  return (
    <form className="signin-form__wrapper">
      <div className="signin-form__textbox">
        <UiInput
          name="email"
          label="Email"
          type="email"
          value={email}
          handleChange={handleChange}
        />
      </div>

      <div className="signin-form__textbox">
        <UiInput
          name="password"
          label="Password"
          type="password"
          value={password}
          handleChange={handleChange}
        />
      </div>

      <div className="signin-form__actions">
        <UiButton type="primary" handleClick={signIn}>
          Sign In
        </UiButton>
        <UiButton type="google" handleClick={singInWithGoogle}>
          Sign In With Google
        </UiButton>
      </div>
    </form>
  );
};

export default withRouter(SignInForm);
