import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  addQuestionForm !: FormGroup;
  idEtudiant!:any;
  constructor(private questionService: QuestionService, private formBuilder:FormBuilder, private router: Router){
    this.addQuestionForm = this.formBuilder.group(
      {
        descriptionQuestion:['',Validators.required],

      }
    );
  }
  ngOnInit(): void {

    this.idEtudiant=localStorage.getItem("id");
  }
  onSubmit() {
    if (this.addQuestionForm.valid) {
      const question = this.addQuestionForm.value;
      this.questionService.addQuestEt(question,this.idEtudiant).subscribe(() => {
        console.log("ajout");
        this.router.navigate(['/question']); // Redirect to the "ListeQuestionComponent"
      });
    }
  }

}

