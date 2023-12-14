import {Etudiant} from "./etudiant";
export class Evenement{
  idEvenement!: number ;
  titre!: string;
  description!: string;
  dateDebut!: Date;
  dateFin!: Date;
  placeDisponible!:number;
  hasParticipated!:boolean;
  etudiants!: Etudiant ;
}
