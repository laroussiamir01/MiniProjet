import { Chambre } from 'src/app/model/Chambre';
export class Reservations {
  idReservation!: Number;
  anneeUniversite!:Date;
  estValide!:boolean;
  capaciteRes!:Number;
  chambre!:Chambre;
}
