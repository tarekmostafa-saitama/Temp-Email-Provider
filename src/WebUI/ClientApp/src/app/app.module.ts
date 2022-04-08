import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { JwtTokenInterceptor } from './Shared/Interceptors/jwt-token-interceptor';
import { ErrorHandlingInterceptor } from './Shared/Interceptors/error-handling-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
