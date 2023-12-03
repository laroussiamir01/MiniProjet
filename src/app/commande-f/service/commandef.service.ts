import { Injectable } from '@angular/core';
import {CrudService} from "../../shared/crud.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Commande} from "../../commande/shared/model/commande.module";


@Injectable({
  providedIn: 'root'
})
export class CommandefService extends CrudService{
  override url = '/commande';

}
