import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "../../model/evenement";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  evenementUrl:any ="http://localhost:8082";

  getAllEvenements(): Observable<any[]> {
    return this.http.get<any[]>(this.evenementUrl+"/evenements");
  }
  addEvenement(evenement: Evenement): Observable<any> {
    return this.http.post<Evenement>(this.evenementUrl+"/addEvenement",evenement, this.httpOptions);
  }
  getEvenementById(idEvenement: number): Observable<Evenement> {
    return this.http.get<Evenement>(this.evenementUrl +'/evenement/'+ idEvenement);
  }
  updateEvenement(idEvenement: number, evenement:Evenement): Observable<Evenement> {
    // return this.http.put<Etudiant>(this.etudiantUrl+'/updateEtudiant/'+ idEtudiant, etudiant);
    return this.http.put<Evenement>('http://localhost:8082/updateEvenement/'+idEvenement,evenement);
  }
  deleteEvenement (evenement: Evenement): Observable<Evenement> {
    /**const url=this.etudiantUrl+'/deleteEtudiant/'+ etudiant.idEtudiant;
     return this.http.delete<Etudiant>(url);**/
    return this.http.delete<Evenement>('http://localhost:8082/deleteEvenement/'+evenement.idEvenement);
  }


}
