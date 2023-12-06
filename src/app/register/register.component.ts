import { Component } from '@angular/core';
import {RegisterRequest} from "../model/register-request";
import {AuthenticationResponse} from "../model/authentication-response";
import {AuthenticationService} from "../services/login/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../model/verification-request";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm !: FormGroup;
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      lastname: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      cin: ['', [Validators.required,Validators.pattern('^[0-9]{8}$')]],
      ecole: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      dateNaissance: ['', [Validators.required,this.dateFinValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      rememberMe: [false]});
  }

  registerUser() {
    this.message = '';
    this.registerRequest.nomEt =this.registerForm.get('firstname')?.value;
    this.registerRequest.prenomEt =this.registerForm.get('lastname')?.value;
    this.registerRequest.cin =this.registerForm.get('cin')?.value;
    this.registerRequest.ecole =this.registerForm.get('ecole')?.value;
    this.registerRequest.dateNaissance =this.registerForm.get('dateNaissance')?.value;
    this.registerRequest.email =this.registerForm.get('email')?.value
    this.registerRequest.password =this.registerForm.get('password')?.value;
    this.registerRequest.mfaEnabled =this.registerForm.get('rememberMe')?.value;

    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page';

              this.router.navigate(['login']);

          }
        }
      });

  }

  dateFinValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (selectedDate >= currentDate) {
      return { 'invalidDate': true };
    }

    return null;
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

          localStorage.setItem('token1', response.accessToken as string);
          this.router.navigate(['login']);


        }
      });
  }


}
