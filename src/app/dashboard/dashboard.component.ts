import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../services/user-auth/user-auth.service";
import {AuthenticationService} from "../services/login/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
constructor(private userAuthService: UserAuthService, private auth :AuthenticationService, private router: Router ) {
}
ngOnInit() {
}
public isLoggedIn(){
  console.log(this.userAuthService.isLoggedIn());
  return this.userAuthService.isLoggedIn();
}
public logout(){
 // return this.auth.logout();
  this.userAuthService.clear();
  this.router.navigate(['login']);
}

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {

          if (userRoles == allowedRoles) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
    }
    return isMatch;
  }

}
