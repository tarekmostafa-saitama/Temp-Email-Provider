import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { GenerateMailComponent } from './generate-mail/generate-mail.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserLayoutComponent,
    GenerateMailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
