import { Component } from '@angular/core';
import {RegisterRequest} from "../model/register-request";
import {AuthenticationResponse} from "../model/authentication-response";
import {AuthenticationService} from "../services/login/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../model/verification-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';

              this.router.navigate(['login']);

          }
        }
      });

  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the Welcome page';

            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['dashboard/lazy/etudiant']);

        }
      });
  }

}
