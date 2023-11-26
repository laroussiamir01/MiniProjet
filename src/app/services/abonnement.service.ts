import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Abonnement} from "../model/abonnement";

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  abonnementUrl:any ="http://localhost:8082";
  getAllAbonnements(): Observable<any[]> {
    return this.http.get<any[]>(this.abonnementUrl+"/listeAbonnement");
  }
  addAbonnement(abonnement: Abonnement): Observable<any> {
    return this.http.post<Abonnement>(this.abonnementUrl+"/addAbonnement",abonnement, this.httpOptions);
  }
  getAbonnementById(idAbonnement: number): Observable<Abonnement> {
    return this.http.get<Abonnement>(this.abonnementUrl +'/abonnement/'+ idAbonnement);
  }
  updateAbonnement(idAbonnement: number, abonnement:Abonnement): Observable<Abonnement> {
    return this.http.put<Abonnement>(this.abonnementUrl+'/updateAbonnement/'+ idAbonnement,abonnement,this.httpOptions);
  }
  deleteAbonnement (abonnement: Abonnement): Observable<Abonnement> {
    const url=this.abonnementUrl+'/deleteAbonnement/'+ abonnement.idAbonnement;
    return this.http.delete<Abonnement>(url);
  }
  affecterAbonnementAPack(idPack: number, idAbonnement: number): Observable<string> {
    const url = `${this.abonnementUrl}/affecterFoyerBloc/${idPack}/${idAbonnement}`;
    return this.http.put<string>(url, {});
  }
  desaffecterAbonnementAPack(idAbonnement: number): Observable<Abonnement> {
    const url = `${this.abonnementUrl}/desaffecterFoyerBloc/${idAbonnement}`;
    return this.http.put<Abonnement>(url, {});
  }
}
