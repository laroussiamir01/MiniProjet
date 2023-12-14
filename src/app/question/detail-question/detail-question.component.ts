import {Component, Inject, OnInit} from '@angular/core';
import {EditReponseComponent} from "../../Reponse/edit-reponse/edit-reponse.component";
import {Reponse} from "../../model/reponse";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {ReponseService} from "../../services/reponse.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import { format} from 'date-fns';


@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss']
})
export class DetailQuestionComponent implements OnInit {
  question: any = {};
  addReponseForm: FormGroup;
  responses: Reponse[] = [];
  idQuestion!: number;  // Utilisation de l'opérateur ! pour indiquer que la variable sera initialisée
  descriptionReponse: string = '';


  constructor(
    private route: ActivatedRoute,
    private reponseService: ReponseService,
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { descriptionReponse: string, questionId: number }

  ) {
    this.addReponseForm = this.formBuilder.group({
      descriptionReponse: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log('Dialog Data Object:', this.data);
    this.route.params.subscribe(params => {
      this.idQuestion = +params['idQuestion'];  // Assigner la valeur à idQuestion
      this.fetchQuestionDetails(this.idQuestion);

      this.fetchReponses();
    });
  }
  private fetchReponses(): void {
    this.reponseService.getReponseByIdQuestion(this.idQuestion).subscribe((data) => {
      this.responses = Array.isArray(data) ? data : [data];
      this.responses.sort((a, b) => b.like - a.like);
    });
  }
  fetchQuestionDetails(idQuestion: number) {
    // Fetch the question details based on the idQuestion
    // You might want to call the questionService here to get the question details
    // this.questionService.getQuestionById(idQuestion).subscribe(
    //   (response) => {
    //     this.question = response;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );

    // For demonstration purposes, setting a mock question
    this.question = { id: idQuestion, /* other properties */ };
  }

  addReponse() {
    if (this.question && this.question.id && this.addReponseForm.valid) {
      const idQuestion = this.question.id;
      const reponse = this.addReponseForm.value;

      // Assigner la valeur à descriptionReponse
      this.descriptionReponse = reponse.descriptionReponse;

      console.log('Form Value:', reponse);
      console.log('Description Reponse:', this.descriptionReponse);

      this.reponseService.addReponse(reponse, idQuestion).subscribe((response) => {
        console.log("Response from backend:", response);
        console.log("ajout");
        // Redirect or handle the success scenario
        this.fetchReponses();
      }, (error) => {
        console.error("Error adding response:", error);
      });

      console.log("ID (inside if):", idQuestion);
    } else {
      console.log("Invalid question or id:", this.question);
      console.log("Form not valid:", this.addReponseForm.errors); // Log form errors
      // Handle the case where the ID is not available, show an error message, or take appropriate action
    }
  }

  deleteReponse(reponse: Reponse): void {
    this.reponseService.deleteReponse(reponse).subscribe(() => {
      console.log('Suppression effectuée');
      // Redirect to the "ListeQuestionComponent"
      // window.location.reload();
      this.fetchReponses();
    });
  }

  editReponse(reponse: Reponse) {
    console.log('Original Reponse Object:', reponse);

    const dialogRef = this.dialog.open(EditReponseComponent, {
      width: '400px',
      data: { descriptionReponse: reponse.descriptionReponse, questionId: reponse.questionId }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        reponse.descriptionReponse = result;

        this.reponseService.updateReponse(reponse).subscribe(
          (updatedReponse) => {
            console.log('Réponse mise à jour avec succès :', updatedReponse);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de la réponse :', error);
          }
        );
      }
    });
  }
  likeReponse(id: number): void {
    this.reponseService.likeReponse(id).subscribe(() => {
      this.fetchReponses();
    });
  }

  dislikeReponse(id: number): void {
    this.reponseService.dislikeReponse(id).subscribe(() => {
      this.fetchReponses();
    });
  }

  formatDateString(dateString: Date): string {
    // Convertissez la chaîne de date en objet Date
    const date = new Date(dateString);

    // Utilisez la fonction format de date-fns pour formater la date
    const formattedDate = format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");

    return formattedDate;
  }
  formatDynamicTime(date: Date | string): string {
    return this.reponseService.formatDynamicTime(date);
  }
}

