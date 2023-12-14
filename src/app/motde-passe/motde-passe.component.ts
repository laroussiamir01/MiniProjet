import {Component, OnInit} from '@angular/core';
import {ChangePasswordRequest} from "../model/changePasswordRequest";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/login/authentication.service";
import {UserAuthService} from "../services/user-auth/user-auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-motde-passe',
  templateUrl: './motde-passe.component.html',
  styleUrls: ['./motde-passe.component.scss']
})
export class MotdePasseComponent{
  currentPassword!: string;
  newPassword!: string;
  confirmationPassword!: string;

  constructor(private userService: AuthenticationService,private router:Router) { }

  onSubmit() {
    const request = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      confirmationPassword: this.confirmationPassword
    };

    this.userService.changePassword(request).subscribe(
      () => {
        // La demande a réussi, faites quelque chose si nécessaire
      },
      (error) => {
        // La demande a échoué, traitez l'erreur si nécessaire
      }
    );
    this.router.navigate(['dashboard']);

  }

}
