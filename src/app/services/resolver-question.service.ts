// question-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverQuestionService implements Resolve<any>{

  constructor(private questionService: QuestionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Utilisez le service QuestionService pour récupérer les données
    return this.questionService.getAllQuestions();
  }
}
