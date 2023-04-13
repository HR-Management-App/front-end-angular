import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  // Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router) { }

  // Information about the route and state of the router
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = sessionStorage.getItem('token');

    if (!token) {
      alert('Please login first!');
      this._router.navigate([""]);
      return false;
    } else {
      const allowedRoles = route.data.allowedRoles;
      if (sessionStorage.getItem('user_id') != '1') {// user 
        let rol = 'user';
        if (allowedRoles.findIndex(rols => rols === rol) >= 0) {
          return true;
        } else {
          alert('Forbidden');
          this._router.navigate(["user-home"]);
          return false;
        }
      } else { //admin
        let rol = 'hr';
        if (allowedRoles.findIndex(rols => rols === rol) >= 0) {
          return true;
        } else {
          alert('Forbidden');
          this._router.navigate(["admin-home"]);
          return false;
        }
      }
    }

    return true;
  }
}
