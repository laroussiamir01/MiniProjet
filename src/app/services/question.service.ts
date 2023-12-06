import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Question} from "../model/question";
import {Reponse} from "../model/reponse";
import {differenceInDays, format, formatDistanceToNow} from "date-fns";
import {fr} from "date-fns/locale";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  questionUrl:any ='http://localhost:8082';

  formatDynamicTime(dateString: string | Date): string {
    const date = new Date(dateString);
    const now = new Date();

    // Calculate the difference in days
    const differenceInDayss = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    const differenceInDaysValue = differenceInDays(now, date);
    if (differenceInDayss > 2) {
      // If more than 2 days, format as a complete date
      return format(date, "dd MMM yyyy", {locale: fr});
    } else {
      const timeAgo = formatDistanceToNow(date, {locale: fr});
      if (differenceInDaysValue > 0) {
        return `Il y a ${differenceInDaysValue} jours`;
      } else {
        return timeAgo;
      }
    }
  }

  getAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8082/questions');
  }
  addQuestion(question: Question): Observable<any> {
    return this.http.post<Question>(this.questionUrl+"/question",question, this.httpOptions);
  }
  getQuestionById(idQuestion: number): Observable<Question> {
    return this.http.get<Question>(this.questionUrl +'/question/'+ idQuestion);
  }
  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(this.questionUrl+"/question",question, this.httpOptions);
  }
  deleteQuestion(question: Question): Observable<Question> {
    const url = this.questionUrl + '/question/' + question.idQuestion;
    return this.http.delete<Question>(url);
  }
  searchQuestions(descriptionQuestion: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.questionUrl}/questions/search?descriptionQuestion=${descriptionQuestion}`);
  }


}
