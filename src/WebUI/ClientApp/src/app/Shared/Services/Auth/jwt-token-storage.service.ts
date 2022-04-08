import { Injectable } from "@angular/core";
import { AuthResponse } from "../../Models/auth-response";

@Injectable({
  providedIn: "root",
})
export class JwtTokenStorageService {
  jwtLoggedToken: string;
  jwtRefreshToken: string;

  constructor() {
    this.SetupAuthTokens();
  }

  public SetAuthTokens(tokenResponse: AuthResponse): void {
    localStorage.setItem("access-token", tokenResponse.AccessToken);
    localStorage.setItem("refresh-token", tokenResponse.RefreshToken);
    this.SetupAuthTokens();
  }
  private SetupAuthTokens() {
    this.jwtLoggedToken = localStorage.getItem("access-token");
    this.jwtRefreshToken = localStorage.getItem("refresh-token");
  }
}
