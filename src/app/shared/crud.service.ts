import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {Commande} from "../commande/shared/model/commande.module";

@Injectable()
export class CrudService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(protected http: HttpClient){

  }
  url:String ='';


  getById(id: number): Observable<any> {
    return this.http.get(environment.api_url + this.url + `/${id}`);
  }
  add(entity :any): Observable<any>{
    return this.http.post(environment.api_url + this.url, entity);
  }

  update(entity:any): Observable<any>{
    return this.http.put(environment.api_url + this.url, entity);
  }



  addAll(list:any): Observable<any>{
    return this.http.post(environment.api_url + this.url + '/all', list);
  }
  getAll(): Observable<any>{
    return this.http.get(environment.api_url + this.url);
  }



  affecterProduitCommande(idProduit: number, idCommande: number): Observable<string> {
    return this.http.put<string>(environment.api_url  + this.url +`/commandeaffecte/${idProduit}/${idCommande}`, null);
  }
}
