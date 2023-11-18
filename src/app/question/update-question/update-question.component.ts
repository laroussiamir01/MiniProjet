import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss']
})
export class UpdateQuestionComponent implements OnInit{
  question !:any;
  constructor(private questionService: QuestionService,  private ac:ActivatedRoute , private router:Router){}

  ngOnInit() {
    this.ac.paramMap.subscribe((next) =>
      this.questionService
        .getQuestionById(Number(next.get('idQuestion')))
        .subscribe(
          (res) => {
            this.question = res;
            this.question.descriptionQuestion = res.descriptionQuestion; // Assign the value of descriptionQuestion
          },
          (error) => console.log(error)
        )
    );
  }

  update() {
    this.questionService.updateQuestion(this.question.idQuestion, this.question).subscribe();
    this.router.navigate(['/lazy/question']);
  }
}
