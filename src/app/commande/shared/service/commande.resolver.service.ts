import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import {CommandeService} from "./commande.service";


@Injectable({
  providedIn: 'root'
})
export class CommandeResolver implements Resolve<any>{

  constructor(private commandeService:CommandeService){

  }
  resolve(){
    return this.commandeService.getAll();
  }
}
