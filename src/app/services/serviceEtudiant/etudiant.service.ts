import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../../model/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8082/api/v1/admin'
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  etudiantUrl:any ="http://localhost:8082";
  adminUrl:any ="http://localhost:8082/api/v1/admin";
  private userUrl = 'http://localhost:8082/api/v1/etu'



  getAllEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/etudiants");
   // return this.http.get<any[]>(`${this.baseUrl}/etudiants`);

  }
  addEtudiant(etudiant: Etudiant): Observable<any> {
    return this.http.post<Etudiant>(this.etudiantUrl+"/addEtudiant",etudiant, this.httpOptions);
  }
  getEtudiantById(idEtudiant: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.userUrl +'/etudiant/'+ idEtudiant);
  }
  updateEtudiant(idEtudiant: number, etudiant:Etudiant): Observable<Etudiant> {
   // return this.http.put<Etudiant>(this.etudiantUrl+'/updateEtudiant/'+ idEtudiant, etudiant);
   // return this.http.patch<Etudiant>(this.userUrl +'/updateEtudiant1/'+ idEtudiant,etudiant,{headers:this.requestHeader,});
    return this.http.put<Etudiant>(`http://localhost:8082/api/v1/etu/updateEtudiant/${idEtudiant}`,etudiant,this.httpOptions);

  }
  deleteEtudiant (etudiant: Etudiant): Observable<Etudiant> {
    /**const url=this.etudiantUrl+'/deleteEtudiant/'+ etudiant.idEtudiant;
    return this.http.delete<Etudiant>(url);**/
    return this.http.delete<Etudiant>(this.userUrl +'/deleteEtudiant/'+etudiant.idEtudiant);
  }
  affecterEvenementToEtudiant(idEtudiant: number,idEvenement:number):Observable<Etudiant>{
    const url = `http://localhost:8082/api/v1/etu/setEvenementToEtudiant/${idEtudiant}/${idEvenement}`;
  //  return this.http.put<Etudiant>('http://localhost:8082/setEvenementToEtudiant/'+idEtudiant+'/'+idEvenement);
    return this.http.put<Etudiant>(url, {});
  }
  desaffecterEtudiant(idEtudiant: number,idEvenement:number):Observable<string>{
    const url = `http://localhost:8082/api/v1/etu/desaffecterEtudiant/${idEtudiant}/${idEvenement}`;
    //  return this.http.put<Etudiant>('http://localhost:8082/setEvenementToEtudiant/'+idEtudiant+'/'+idEvenement);
    return  this.http.put<string>(url, {});
  }
  etudiantParticipeDeja(idEtudiant: number,idEvenement:number):Observable<boolean>{
    const url = `http://localhost:8082/etudiantParticipedeja/${idEtudiant}/${idEvenement}`;
    //  return this.http.put<Etudiant>('http://localhost:8082/setEvenementToEtudiant/'+idEtudiant+'/'+idEvenement);
    return  this.http.get<boolean>(url);
  }

}
