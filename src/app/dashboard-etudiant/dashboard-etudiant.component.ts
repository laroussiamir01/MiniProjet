import { Component } from '@angular/core';
import {UserAuthService} from "../services/user-auth/user-auth.service";
import {AuthenticationService} from "../services/login/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.scss']
})
export class DashboardEtudiantComponent {
  constructor(private userAuthService: UserAuthService, private auth :AuthenticationService, private router: Router ) {
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
  public name(){
    console.log(this.userAuthService.name());
    return this.userAuthService.name();
  }

}
