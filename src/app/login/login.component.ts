import { Component } from '@angular/core';
import {AuthenticationRequest} from "../model/authentication-request";
import {AuthenticationResponse} from "../model/authentication-response";
import {AuthenticationService} from "../services/login/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../model/verification-request";
import {UserAuthService} from "../services/user-auth/user-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {
  }

  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response:any) => {
          this.authResponse = response;
          console.log(response.access_token);
          console.log(response.user.role);
          this.userAuthService.setRoles(response.user.role);
          this.userAuthService.setToken(response.access_token);
          const role =response.user.role;
            this.router.navigate(['dashboard/lazy/evenement']);

          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.access_token as string);
            this.router.navigate(['dashboard/lazy/etudiant']);
          }
        }
      });
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['dashboard/lazy/etudiant']);
        }
      });
  }

}
