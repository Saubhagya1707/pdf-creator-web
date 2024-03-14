import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SessionService} from "../../service/session.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = ''
  password: string = ''

  constructor(private _authService: AuthService, private sessionService: SessionService) {
  }

  login() {
    this._authService.login(this.email, this.password).subscribe((res) => {
        this.sessionService.setSession(res);
      },
      (err) => {
        console.error(err);
      },
      () => {

      });;
  }

}
