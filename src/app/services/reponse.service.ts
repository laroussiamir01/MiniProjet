import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reponse} from "../model/reponse";
import {Question} from "../model/question";


@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  reponseUrl:any ='http://localhost:8082';

  getAllReponses(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8082/Reponse');
  }

  addReponse(reponse: Reponse, idQuestion: number): Observable<Reponse> {
    return this.http.post<Reponse>(`${this.reponseUrl}/ReponseQ/${idQuestion}`, reponse);
  }
  getReponseById(idReponse: number): Observable<Reponse> {
    return this.http.get<Reponse>(this.reponseUrl +'/Reponse/'+ idReponse);
  }
    getReponseByIdQuestion(idQuestion: number): Observable<Reponse> {
        return this.http.get<Reponse>(this.reponseUrl +'/Reponse/'+ idQuestion);
    }

  updateReponse(reponse: Reponse): Observable<Reponse> {
    return this.http.put<Reponse>(`${this.reponseUrl}/Reponse/${reponse.idReponse}`, reponse);
  }

  deleteReponse(reponse: Reponse): Observable<Reponse> {
    const url = this.reponseUrl + '/Reponse/' + reponse.idReponse;
    return this.http.delete<Reponse>(url);
  }

  likeReponse(id: number): Observable<any> {
    return this.http.post(`${this.reponseUrl}/${id}/like`, null);
  }

  dislikeReponse(id: number): Observable<any> {
    return this.http.post(`${this.reponseUrl}/${id}/dislike`, null);
  }


}
