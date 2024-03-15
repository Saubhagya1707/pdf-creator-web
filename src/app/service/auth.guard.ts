import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {SessionService} from "./session.service";


@Injectable({
  providedIn: "root"
})
class Permissions {
  constructor(private sessionService: SessionService, private router:Router) {
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(!this.sessionService.isLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}


export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  return inject(Permissions).canActivate(route,state);
};
