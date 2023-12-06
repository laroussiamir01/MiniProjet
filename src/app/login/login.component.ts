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
           this.userAuthService.setRoles(response.user.role);
          this.userAuthService.setToken(response.accessToken);
          localStorage.setItem('id',response.user.idEtudiant);
          localStorage.setItem('hasParticipated',response.user.hasParticipated);
          localStorage.setItem('token2',response.accessToken);
          localStorage.setItem('jwtToken',response.accessToken);
         // const role =response.user.role;
           // this.router.navigate(['dashboard/lazy/evenement']);

          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token',response.accessToken as string);
            this.router.navigate(['dashboard']);
            // @ts-ignore
            // if(this.userAuthService.getRoles()=="ADMIN"){
            //   this.userAuthService.setToken(response.accessToken);
            //   localStorage.setItem('token', response.accessToken as string);
            //   this.router.navigate(['dashboard']);
            // }else
            //   this.userAuthService.setToken(response.accessToken);
            // localStorage.setItem('token', response.accessToken as string);
            // this.router.navigate(['dashboard']);
          }
        //  else    this.userAuthService.setToken(response.accessToken);

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
        next: (response:any) => {
         // this.authResponse = response;
         // this.userAuthService.setToken(response.accessToken);
         // localStorage.setItem('token',response.accessToken as string);
         // this.userAuthService.setToken(response.accessToken);
          this.router.navigate(['dashboard']);
        }
      });
  }

}
