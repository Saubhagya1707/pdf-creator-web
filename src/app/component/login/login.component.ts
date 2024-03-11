import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SessionService} from "../../service/session.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _authService: AuthService, private sessionService: SessionService) {
  }

  onSubmit(f: NgForm) {
    console.log('values: ',f.value);
    this._authService.login(f.value.email, f.value.password).subscribe((res) => {
        this.sessionService.setSession(res);
      },
      (err) => {
        console.error(err);
      },
      () => {

      });;
  }
}
