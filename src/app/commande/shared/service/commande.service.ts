import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';
import {Commande} from "../model/commande.module";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

class Produit {
}

@Injectable({
  providedIn: 'root'
})
export class CommandeService extends CrudService{
  override url = '/commande';
  /*addCommandeWithProduct(commande: Commande, produit: Produit): Observable<any> {
    const commandeProduitDTO = {
      commande: commande,
      produit: produit
    };
    return this.http.post<any>(`${environment.api_url + this.url}/commande/addWithProduct`, commandeProduitDTO);
  }*/
}
