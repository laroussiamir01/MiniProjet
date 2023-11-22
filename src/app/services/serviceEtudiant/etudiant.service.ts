import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../../model/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  etudiantUrl:any ="http://localhost:8082";
  getAllEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.etudiantUrl+"/etudiants");
  }
  addEtudiant(etudiant: Etudiant): Observable<any> {
    return this.http.post<Etudiant>(this.etudiantUrl+"/addEtudiant",etudiant, this.httpOptions);
  }
  getEtudiantById(idEtudiant: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.etudiantUrl +'/etudiant/'+ idEtudiant);
  }
  updateEtudiant(idEtudiant: number, etudiant:Etudiant): Observable<Etudiant> {
   // return this.http.put<Etudiant>(this.etudiantUrl+'/updateEtudiant/'+ idEtudiant, etudiant);
    return this.http.put<Etudiant>('http://localhost:8082/updateEtudiant/'+idEtudiant,etudiant);
  }
  deleteEtudiant (etudiant: Etudiant): Observable<Etudiant> {
    /**const url=this.etudiantUrl+'/deleteEtudiant/'+ etudiant.idEtudiant;
    return this.http.delete<Etudiant>(url);**/
    return this.http.delete<Etudiant>('http://localhost:8082/deleteEtudiant/'+etudiant.idEtudiant);
  }
  affecterEvenementToEtudiant(idEtudiant: number,idEvenement:number):Observable<Etudiant>{
    const url = `http://localhost:8082/setEvenementToEtudiant/${idEtudiant}/${idEvenement}`;
  //  return this.http.put<Etudiant>('http://localhost:8082/setEvenementToEtudiant/'+idEtudiant+'/'+idEvenement);
    return this.http.put<Etudiant>(url, {});
  }
  desaffecterEtudiant(idEtudiant: number,idEvenement:number):Observable<string>{
    const url = `http://localhost:8082/desaffecterEtudiant/${idEtudiant}/${idEvenement}`;
    //  return this.http.put<Etudiant>('http://localhost:8082/setEvenementToEtudiant/'+idEtudiant+'/'+idEvenement);
    return  this.http.put<string>(url, {});
  }
  etudiantParticipeDeja(idEtudiant: number,idEvenement:number):Observable<boolean>{
    const url = `http://localhost:8082/etudiantParticipedeja/${idEtudiant}/${idEvenement}`;
    //  return this.http.put<Etudiant>('http://localhost:8082/setEvenementToEtudiant/'+idEtudiant+'/'+idEvenement);
    return  this.http.get<boolean>(url);
  }

}
