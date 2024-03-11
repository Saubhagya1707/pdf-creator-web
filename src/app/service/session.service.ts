import { Injectable } from '@angular/core';
import {Token} from "../model/token";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() { }
  setSession(token: Token){
    localStorage.setItem('token',token.token);
  }
}
