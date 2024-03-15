import { Injectable } from '@angular/core';
import {Token} from "../model/token";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private router:Router) { }
  setSession(token: Token){
    localStorage.setItem('token',token.token);
  }
  isLoggedIn() {
    let token= localStorage.getItem('token');
    if (token){
      const payload = atob(token.split('.')[1]);
      const parsedPayload = JSON.parse(payload);
      console.log('#isLoggedIn',payload,parsedPayload);
      return parsedPayload.exp > Date.now() / 1000;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(["login"]);
  }
}
