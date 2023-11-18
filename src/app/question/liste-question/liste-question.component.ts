import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {Question} from "../../model/question";
import {compareAsc, format} from 'date-fns';

@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.scss']
})
export class ListeQuestionComponent implements OnInit{
  constructor(private questionService:QuestionService, private router:Router,private route: ActivatedRoute){}
  questions !:any[];
  ngOnInit() {
   this.questionService.getAllQuestions().subscribe((data) => {
      this.questions = data;
      this.questions.sort((a, b) => compareAsc(new Date(b.dateAjoutQ), new Date(a.dateAjoutQ)));

      console.log(data);
    })
    this.questions = this.route.snapshot.data['questions'];
    console.log(this.questions);
  }
  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question).subscribe(() => {
      console.log('Suppression effectuée');
      // Redirect to the "ListeQuestionComponent"
     // window.location.reload();
      this.questionService.getAllQuestions().subscribe((data) => {
        this.questions = data;
        this.questions.sort((a, b) => compareAsc(new Date(b.dateAjoutQ), new Date(a.dateAjoutQ)));
      });

    });
  }
  updateQuestion(id: any): void {
    this.router.navigate(['dashboard/lazy/question/editQst', id]);
  }
  DetailQuestion(id: any): void {
    this.router.navigate(['dashboard/lazy/question/detailQst', id]);
  }

  formatDateString(dateString: string): string {
    // Convertissez la chaîne de date en objet Date
    const date = new Date(dateString);

    // Utilisez la fonction format de date-fns pour formater la date
    const formattedDate = format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");

    return formattedDate;
  }


}
