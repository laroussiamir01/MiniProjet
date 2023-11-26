import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pack} from "../model/pack";

@Injectable({
  providedIn: 'root'
})
export class PackService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  packUrl:any ="http://localhost:8082";
  getAllPacks(): Observable<any[]> {
    return this.http.get<any[]>(this.packUrl+"/listePack");
  }
  addPack(pack: Pack): Observable<any> {
    return this.http.post<Pack>(this.packUrl+"/addPack",pack, this.httpOptions);
  }
  getPackById(idPack: number): Observable<Pack> {
    return this.http.get<Pack>(this.packUrl +'/pack/'+ idPack);
  }
  updatePack(idPack: number, pack:Pack): Observable<Pack> {
    return this.http.put<Pack>(this.packUrl+'/updatePack/'+ idPack, pack,this.httpOptions);
  }
  deletePack (pack: Pack): Observable<Pack> {
    const url=this.packUrl+'/deletePack/'+ pack.idPack;
    return this.http.delete<Pack>(url);
  }
}
