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

}
