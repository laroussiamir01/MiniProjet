import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from '../model/foyer';
@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http:HttpClient) { }
  foyerUrl:any ="http://localhost:8082";
   getAllFoyers(): Observable<any[]> {
    return this.http.get<any[]>(this.foyerUrl+"/foyers");
    }
    addFoyer(foyer: Foyer): Observable<any> {
      return this.http.post<Foyer>(this.foyerUrl+"/addFoyer",foyer, this.httpOptions);
    }
     getFoyerById(idFoyer: number): Observable<Foyer> {
      return this.http.get<Foyer>(this.foyerUrl +'/foyer/'+ idFoyer); 
     }
    updateFoyer(idFoyer: number, foyer:Foyer): Observable<Foyer> {
      return this.http.put<Foyer>(this.foyerUrl+'/updateFoyer/'+ idFoyer, foyer,this.httpOptions);
    }
    deleteFoyer (foyer: Foyer): Observable<Foyer> {
     const url=this.foyerUrl+'/deleteFoyer/'+ foyer.idFoyer;
     return this.http.delete<Foyer>(url);
     }
    

}
