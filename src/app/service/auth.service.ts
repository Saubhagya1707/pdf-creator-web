import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "../model/token";

const backendBaseUri = 'http://localhost:8080/pdf-utility'
@Injectable({
  providedIn: "root"
})
export class AuthService{
  constructor(private _httpClient: HttpClient) {
  }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }
  login(email: string, password: string){
    return this._httpClient.post<Token>(backendBaseUri+ '/public/login', {
      'email': email,
      'password': password
    },this.httpOptions);
  }
}
