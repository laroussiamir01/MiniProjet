import {Evenement} from "./evenement";

export class Etudiant{
    idEtudiant!: number ;
    nomEt!: string;
    prenomEt!: string;
    cin!: number;
    ecole!: string;
  hasParticipated!:boolean;
  email!: string;
  password!: string;
    dateNaissance!: Date;
  role!: string;
  mfaEnabled!: boolean;
 public evenements!: Evenement;
    }
