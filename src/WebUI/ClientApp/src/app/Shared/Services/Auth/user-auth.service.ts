import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountClient, AuthenticateResponse, LoginUserRequest } from 'src/app/web-api-client';
import { JwtTokenStorageService } from './jwt-token-storage.service';

@Injectable({
  providedIn: "root",
})
export class UserAuthService {
  constructor(
    private jwtTokenStorageService: JwtTokenStorageService,
    private accountClient: AccountClient
  ) {}

  public getUserAccessToken(): string {
    return this.jwtTokenStorageService.jwtLoggedToken;
  }
  public getUserRefreshToken(): string {
    return this.jwtTokenStorageService.jwtRefreshToken;
  }
  public login(model: LoginUserRequest): Observable<AuthenticateResponse> {
    return this.accountClient.getToken(model);
  }
  public register(model: LoginUserRequest): Observable<AuthenticateResponse> {
    return this.accountClient.getToken(model);
  }
}
