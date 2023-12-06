import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reponse} from "../model/reponse";
import {Question} from "../model/question";
import {differenceInDays, format, formatDistanceToNow} from "date-fns";
import {fr} from "date-fns/locale";


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

  formatDynamicTime(dateString: Date | string): string {
    const date = new Date(dateString);
    const now = new Date();

    // Calculate the difference in days
    const differenceInDayss = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    const differenceInDaysValue = differenceInDays(now, date);
    if (differenceInDayss > 2) {
      // If more than 2 days, format as a complete date
      return format(date, "dd MMM yyyy", { locale: fr });
    } else {
      const timeAgo = formatDistanceToNow(date, { locale: fr });
      if (differenceInDaysValue > 0) {
        return `Il y a ${differenceInDaysValue} jours`;
      } else {
        return timeAgo;
      }
    }

    }



}
