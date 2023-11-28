import {Etudiant} from "./etudiant";

export interface AuthenticationResponse{
  accessToken?: string;
  mfaEnabled?: string;
  secretImageUri?: string;
  user?: Etudiant;
}
