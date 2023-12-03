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

  delete(id:any): Observable<any>{
    return this.http.delete(environment.api_url + this.url + `/${id}`);
  }

  addAll(list:any): Observable<any>{
    return this.http.post(environment.api_url + this.url + '/all', list);
  }
  getAll(): Observable<any>{
    return this.http.get(environment.api_url + this.url);
  }
  searchByRef(ref: string): Observable<any> {
    return this.http.get(environment.api_url + this.url + '/search', {params: {ref: ref}});
  }
  searchByNomC(nomCommandeur: string): Observable<any> {
    return this.http.get(environment.api_url + this.url + '/searchC', {params: {nomCommandeur: nomCommandeur}});
  }
  affecterProduitCommande(idProduct: number, idCommande: number): Observable<string> {

    const url = `${environment.api_url}/commandeaffecte/${idProduct}/${idCommande}`;
    return this.http.put<string>(url, {});
  }

}
