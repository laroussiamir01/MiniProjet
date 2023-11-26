import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class CrudService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient){

  }
  url:String ='';



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
}
