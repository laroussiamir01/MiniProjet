import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Question} from "../model/question";

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

  getAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8082/questions');
  }
  addQuestion(question: Question): Observable<any> {
    return this.http.post<Question>(this.questionUrl+"/question",question, this.httpOptions);
  }
  getQuestionById(idQuestion: number): Observable<Question> {
    return this.http.get<Question>(this.questionUrl +'/question/'+ idQuestion);
  }
  updateQuestion(idQuestion: number, question:Question): Observable<Question> {
    return this.http.put<Question>(this.questionUrl+'/question/'+ idQuestion, question,this.httpOptions);
  }
  deleteQuestion(question: Question): Observable<Question> {
    const url = this.questionUrl + '/question/' + question.idQuestion;
    return this.http.delete<Question>(url);
  }
}
