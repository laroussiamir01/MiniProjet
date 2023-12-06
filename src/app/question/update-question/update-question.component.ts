import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {compareAsc} from "date-fns";

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss']
})
export class UpdateQuestionComponent implements OnInit{
  question !:any;
  editedDescription: string;
  dateU:Date;
  questions !:any[];
  errorMessage: string='';
  constructor(private questionService: QuestionService,  private ac:ActivatedRoute , private router:Router,
              public dialogRef: MatDialogRef<UpdateQuestionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { descriptionQuestion: string, dateAjoutQ: Date}){
    this.editedDescription = data.descriptionQuestion;
    this.dateU=data.dateAjoutQ;
  }
  ngOnInit() {

  }
  saveChanges() {
    if (!this.editedDescription) {
      this.errorMessage = 'La description ne peut pas être vide.';
    }
    else {
      this.dialogRef.close({descriptionQuestion: this.editedDescription, dateAjoutQ: new Date()});
    }
  }
  cancel() {
    this.dialogRef.close();  // Cette ligne ferme le modal sans passer de données
  }

}
