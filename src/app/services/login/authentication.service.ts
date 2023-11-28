import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterRequest} from "../../model/register-request";
import {AuthenticationResponse} from "../../model/authentication-response";
import {AuthenticationRequest} from "../../model/authentication-request";
import {VerificationRequest} from "../../model/verification-request";
import {UserAuthService} from "../user-auth/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8082/api/v1/auth'
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private http: HttpClient,private userAuthService: UserAuthService
  ) { }

  register(
    registerRequest: RegisterRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`, registerRequest);
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/authenticate`, authRequest,{headers:this.requestHeader,});
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/verify`, verificationRequest);
  }

  logout(): void {
    this.http.post(`${this.baseUrl}/logout`, {}).subscribe(
      () => {
        // La déconnexion a réussi
        // Effectuez ici les traitements supplémentaires nécessaires
      },
      (error) => {
        // Gérez ici les erreurs de déconnexion
      }
    );
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
