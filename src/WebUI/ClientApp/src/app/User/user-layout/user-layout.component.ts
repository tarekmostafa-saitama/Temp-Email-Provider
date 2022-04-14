import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Shared/Services/Auth/user-auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userAuthService.logout();
    this.router.navigateByUrl("/login");
  }
}
