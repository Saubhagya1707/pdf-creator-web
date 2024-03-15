import {Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {authGuard} from "./service/auth.guard";
import {inject} from "@angular/core";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "home" , component: HomeComponent, canActivate: [authGuard]},
  { path: "about", component: AboutComponent}
];


