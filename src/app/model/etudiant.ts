import {Evenement} from "./evenement";

export class Etudiant{
    idEtudiant!: number ;
    nomEt!: string;
    prenomEt!: string;
    cin!: number;
    ecole!: string;
    dateNaissance!: Date;
 public evenements!: Evenement;
    }
