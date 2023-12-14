import {Product} from "../../../product/shared/model/product.module";

export class Commande{
  constructor(public idCommande?: number,
              public nomCommandeur?: string,
              public numTel?: number,
              public produits?:Product,


              ){

  }
}
