import React, { Component } from "react";
import "./sign-in-form.styles.scss";
import { UiButton } from "../ui-button/ui-button.component";
import { UiInput } from "../ui-input/ui-input.component";
import { withRouter } from "react-router-dom";
import { singInWithGoogle, auth } from "../../firebase/firebase.util";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  signIn = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    await auth.signInWithEmailAndPassword(email, password);

    this.setState({
      email: "",
      password: ""
    });
    try {
    } catch (error) {
      console.error(error);
    }

    this.props.history.push("/dashboard");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="signin-form__wrapper">
        <div className="signin-form__textbox">
          <UiInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
        </div>

        <div className="signin-form__textbox">
          <UiInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
        </div>

        <div className="signin-form__actions">
          <UiButton type="primary" handleClick={this.signIn}>
            Sign In
          </UiButton>
          <UiButton type="google" handleClick={singInWithGoogle}>
            Sign In With Google
          </UiButton>
        </div>
      </form>
    );
  }
}

export default withRouter(SignInForm);
