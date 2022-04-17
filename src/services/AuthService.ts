import { User } from "../model/Models";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    return userName === "user" && password === "1234"
      ? { userName: userName, email: "sample@gmail.com" }
      : undefined;
  }
}
