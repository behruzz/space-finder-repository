import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService;
}

interface CustomeEvent {
  target: HTMLInputElement;
}

interface LoginState {
  username: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessfull: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
  // constructor() {
  //   // super();
  // }
  state: LoginState = {
    username: "",
    password: "",
    loginAttempted: false,
    loginSuccessfull: false,
  };

  private setUserName(event: CustomeEvent) {
    this.setState({
      username: event.target.value,
    });
    // console.log(event.target.value);
  }

  private setPassword(event: CustomeEvent) {
    this.setState({
      password: event.target.value,
    });
    // console.log(event.target.value);
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const result = await this.props.authService.login(
      this.state.username,
      this.state.password
    );
    console.log(result);
  }

  render() {
    return (
      <div>
        <h2>Please login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setUserName(e)}
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e)}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
