import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { JwtTokenStorageService } from "../Services/Auth/jwt-token-storage.service";


@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(private jwtTokenStorageService: JwtTokenStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.jwtTokenStorageService.jwtLoggedToken;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (token && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request);
  }
}
