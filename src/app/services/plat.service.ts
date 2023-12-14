import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plat } from '../model/plat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlatService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  platUrl: any = 'http://localhost:8082'
  constructor(private http: HttpClient) {}
    getAllPlats(): Observable<any[]> {
      return this.http.get<any[]>(this.platUrl + "/getPlats");
    }
    addPlat(plat: Plat): Observable<any> {
      return this.http.post<Plat>(this.platUrl + "/addPlat", plat, this.httpOptions);
    }
    getPlatById(idPlat: number): Observable<Plat> {
      return this.http.get<Plat>(this.platUrl + '/getPlat/' + idPlat);
    }
    updatePlat(idPlat: number, plat:Plat): Observable<Plat> {
      return this.http.put<Plat>(this.platUrl+'/updatePlat/'+ idPlat, plat,this.httpOptions);
    }
    deletePlat(plat: Plat): Observable<Plat> {
      const url = this.platUrl + '/deletePlat/' +plat.id;
      return this.http.delete<Plat>(url);
    }
    /*affecterMenuToPlat(idPlat: number, idMenu: number): Observable<any> {
      const url = `${this.platUrl}/affecterMenuToPlat/${idPlat}/${idMenu}`;
      return this.http.put(url, null);
    }*/


}
