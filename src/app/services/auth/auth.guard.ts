import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router, CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth/user-auth.service';
import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private userService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuthService.getToken() !== null) {
      const role = route.data['roles'] as string;

      if (role) {
        const match = this.userService.roleMatch(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
