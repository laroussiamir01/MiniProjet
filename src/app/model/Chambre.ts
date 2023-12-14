import { Bloc } from "./bloc";
import { TypeChambre } from "./typeChambre";

export class Chambre{
  idChambre!:number;
  numeroChambre!:number;
  typeChambre?:TypeChambre;
  bloc!:Bloc;
  // dateDebut!:Date;
  // dateFin!:Date;

}
