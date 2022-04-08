import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((err) => this.handleErrorReq(err)));
  }
  private handleErrorReq(err: HttpErrorResponse): Observable<never> {
    switch (err.status) {
      case 401:
        break;

      case 403:
        break;

      case 500:
        break;
    }

    return throwError(err);
  }
}

function throwError(err: HttpErrorResponse): Observable<never>
{
    throw new Error("Function not implemented.");
}
