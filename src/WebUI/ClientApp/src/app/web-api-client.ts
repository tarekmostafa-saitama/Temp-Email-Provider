/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.14.4.0 (NJsonSchema v10.5.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IAccountClient {
    getToken(model: LoginUserRequest): Observable<AuthenticateResponse>;
    refreshToken(model: RefreshRequest): Observable<AuthenticateResponse>;
    register(model: RegisterUserRequest): Observable<AuthenticateResponse>;
}

@Injectable({
    providedIn: 'root'
})
export class AccountClient implements IAccountClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getToken(model: LoginUserRequest) : Observable<AuthenticateResponse> {
        let url_ = this.baseUrl + "/api/Account/Get-Token";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetToken(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetToken(<any>response_);
                } catch (e) {
                    return <Observable<AuthenticateResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<AuthenticateResponse>><any>_observableThrow(response_);
        }));
    }

    protected processGetToken(response: HttpResponseBase): Observable<AuthenticateResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticateResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AuthenticateResponse>(<any>null);
    }

    refreshToken(model: RefreshRequest) : Observable<AuthenticateResponse> {
        let url_ = this.baseUrl + "/api/Account/Refresh-Token";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRefreshToken(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRefreshToken(<any>response_);
                } catch (e) {
                    return <Observable<AuthenticateResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<AuthenticateResponse>><any>_observableThrow(response_);
        }));
    }

    protected processRefreshToken(response: HttpResponseBase): Observable<AuthenticateResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticateResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AuthenticateResponse>(<any>null);
    }

    register(model: RegisterUserRequest) : Observable<AuthenticateResponse> {
        let url_ = this.baseUrl + "/api/Account/Register";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRegister(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRegister(<any>response_);
                } catch (e) {
                    return <Observable<AuthenticateResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<AuthenticateResponse>><any>_observableThrow(response_);
        }));
    }

    protected processRegister(response: HttpResponseBase): Observable<AuthenticateResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticateResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AuthenticateResponse>(<any>null);
    }
}

export class AuthenticateResponse implements IAuthenticateResponse {
    isSuccess?: boolean;
    error?: string | undefined;
    accessToken?: string | undefined;
    refreshToken?: string | undefined;

    constructor(data?: IAuthenticateResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.error = _data["error"];
            this.accessToken = _data["accessToken"];
            this.refreshToken = _data["refreshToken"];
        }
    }

    static fromJS(data: any): AuthenticateResponse {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["error"] = this.error;
        data["accessToken"] = this.accessToken;
        data["refreshToken"] = this.refreshToken;
        return data; 
    }
}

export interface IAuthenticateResponse {
    isSuccess?: boolean;
    error?: string | undefined;
    accessToken?: string | undefined;
    refreshToken?: string | undefined;
}

export class LoginUserRequest implements ILoginUserRequest {
    email?: string | undefined;
    password?: string | undefined;

    constructor(data?: ILoginUserRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): LoginUserRequest {
        data = typeof data === 'object' ? data : {};
        let result = new LoginUserRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["password"] = this.password;
        return data; 
    }
}

export interface ILoginUserRequest {
    email?: string | undefined;
    password?: string | undefined;
}

export class RefreshRequest implements IRefreshRequest {
    refreshToken?: string | undefined;

    constructor(data?: IRefreshRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.refreshToken = _data["refreshToken"];
        }
    }

    static fromJS(data: any): RefreshRequest {
        data = typeof data === 'object' ? data : {};
        let result = new RefreshRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["refreshToken"] = this.refreshToken;
        return data; 
    }
}

export interface IRefreshRequest {
    refreshToken?: string | undefined;
}

export class RegisterUserRequest implements IRegisterUserRequest {
    fullName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    role?: Role;

    constructor(data?: IRegisterUserRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.fullName = _data["fullName"];
            this.email = _data["email"];
            this.password = _data["password"];
            this.role = _data["role"];
        }
    }

    static fromJS(data: any): RegisterUserRequest {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterUserRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["fullName"] = this.fullName;
        data["email"] = this.email;
        data["password"] = this.password;
        data["role"] = this.role;
        return data; 
    }
}

export interface IRegisterUserRequest {
    fullName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    role?: Role;
}

export enum Role {
    User = 0,
    Admin = 1,
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}