import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../model/Chambre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private url: String = 'http://localhost:8082/chambre';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http:HttpClient) { }
  getAllChambre(){
    return this.http.get('http://localhost:8082/chambre/allChambre');
  }
  addChambre(chambre:any){
    return this.http.post(this.url+'/addChambre',chambre);
  }
  deleteChambre(ch:Chambre):Observable<Chambre>{
    return this.http.delete<Chambre>('http://localhost:8082/chambre/deleteChambre/'+ch.idChambre );

  }


  getChambreById(id:any){
    return this.http.get('http://localhost:8082/chambre/chambre/'+id);
  }
  updateChambre(id:number,chambre:Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(this.url+'/updateChambre/'+id,chambre);
  }
  affecterChambreABloc(idChambre: number, idBloc: number): Observable<string> {
    return this.http.put<string>(this.url + '/affecterChambreABloc/' + idChambre + '/' + idBloc, null);
  }
  desaffecterChambreABloc(idChambre: number): Observable<string> {
    return this.http.put<string>(this.url + '/desaffecterChambreABloc/' + idChambre , null);
  }

}
