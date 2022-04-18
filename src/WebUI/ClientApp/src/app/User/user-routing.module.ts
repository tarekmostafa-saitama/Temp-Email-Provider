import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedInGuard } from '../Shared/Guards/user-logged-in.guard';
import { GenerateMailComponent } from './generate-mail/generate-mail.component';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
  {
    path: "user",
    component: UserLayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
        canActivate: [UserLoggedInGuard],
      },
      {
        path: "generate-mail",
        component: GenerateMailComponent,
        canActivate: [UserLoggedInGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
