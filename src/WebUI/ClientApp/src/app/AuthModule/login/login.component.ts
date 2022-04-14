import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtTokenStorageService } from 'src/app/Shared/Services/Auth/jwt-token-storage.service';
import { UserAuthService } from 'src/app/Shared/Services/Auth/user-auth.service';
import { LoginUserRequest } from 'src/app/web-api-client';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private jwtTokenStorageService: JwtTokenStorageService
  ) {}
  signinForm: FormGroup;
  ngOnInit(): void {
     this.signinForm = new FormGroup({
       email: new FormControl("", [Validators.email, Validators.required]),
       password: new FormControl("", [Validators.required]),
     });
  }

  login() {
    this.userAuthService
      .login(
        new LoginUserRequest({
          email: this.signinForm.value.email,
          password: this.signinForm.value.password
        })
      )
      .subscribe((x) => {
        this.jwtTokenStorageService.SetAuthTokens(x);
      });
  }
}
