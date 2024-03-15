import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SessionService} from "../../service/session.service";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private router: Router, private sessionService: SessionService, private authService:AuthService) {
  }
  onLogin() {
    this.router.navigate(["login"]);
  }

  onLogOut() {
    this.sessionService.logOut();
  }

  isLoggedIn() {
    return this.sessionService.isLoggedIn();
  }
}
