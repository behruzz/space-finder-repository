import React from "react";
import { User } from "../models/Models";
import { AuthService } from "../services/AuthService";

interface AppStat {
  user: User | undefined;
}

export class App extends React.Component<{}, AppStat> {
  private authService: AuthService = new AuthService();

  render() {
    return <h2>Hello</h2>;
  }
}
