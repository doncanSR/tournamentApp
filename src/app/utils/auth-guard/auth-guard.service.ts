import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let rol = route.data.role;
    let tokenRol;
    if (sessionStorage.TOKEN) {
      // logged in so return true
      tokenRol = this.jwtHelperService.decodeToken(sessionStorage.TOKEN);
      if (rol === tokenRol['role']) {
        return true;
      } else {
        this.router.navigate([''], {});
        return false;
      }
    }

    this.router.navigate([''], {});
    return false;
  }
}
