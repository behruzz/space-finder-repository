import React from "react";
import { User } from "../model/Models";
import { AuthService } from "../services/AuthService";

interface AppStat {
  user: User | undefined;
}
export class App extends React.Component {
  render() {
    return <h2>Hello</h2>;
  }
}
