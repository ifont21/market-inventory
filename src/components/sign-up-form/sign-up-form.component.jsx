import React, { Component } from "react";
import "./sign-up-form.styles.scss";
import { UiButton } from "../ui-button/ui-button.component";
import { UiInput } from "../ui-input/ui-input.component";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  signUp = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords do not match! ");
      return;
    }

    try {
      // const { user } = await auth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      this.props.history.push("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="signup-form__wrapper">
        <div className="signup-form__textbox">
          <UiInput
            name="displayName"
            label="Display Name"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
          />
        </div>

        <div className="signup-form__textbox">
          <UiInput
            handleChange={this.handleChange}
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
          />
        </div>

        <div className="signup-form__textbox">
          <UiInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
        </div>

        <div className="signup-form__textbox">
          <UiInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
          />
        </div>

        <div className="signup-form__actions">
          <UiButton type="primary" handleClick={this.signUp}>
            Sign Up
          </UiButton>
        </div>
      </form>
    );
  }
}

export default withRouter(SignUpForm);
