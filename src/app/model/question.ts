import {Reponse} from "./reponse";
import {Etudiant} from "./etudiant";

export class Question{
  idQuestion!: number ;
  descriptionQuestion!: string;
  reponses!: Reponse[];
  dateAjoutQ!: Date;
  idEtudiant!: Etudiant;



}
