import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../services/question.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  addQuestionForm !: FormGroup;
  constructor(private questionService: QuestionService, private formBuilder:FormBuilder, private router: Router){
    this.addQuestionForm = this.formBuilder.group(
      {
        descriptionQuestion:['',Validators.required],

      }
    );
  }
  onSubmit() {
    if (this.addQuestionForm.valid) {
      const question = this.addQuestionForm.value;
      this.questionService.addQuestion(question).subscribe(() => {
        console.log("ajout");
        this.router.navigate(['/question']); // Redirect to the "ListeQuestionComponent"
      });
    }
  }

}
