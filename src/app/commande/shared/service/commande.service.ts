import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';
import {Commande} from "../model/commande.module";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class CommandeService extends CrudService{
  override url = '/commande';
  searchByNomC(nomCommandeur: string): Observable<any> {
    return this.http.get(environment.api_url + this.url + '/searchC', {params: {nomCommandeur: nomCommandeur}});
  }
  deletec(id:any): Observable<any>{
    return this.http.delete(environment.api_url + this.url + `/${id}`);
  }
}
