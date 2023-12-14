import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../model/question";
import {QuestionService} from "../../services/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {UpdateQuestionComponent} from "../update-question/update-question.component";
import {EditReponseComponent} from "../../Reponse/edit-reponse/edit-reponse.component";
import {compareAsc, format} from 'date-fns';


@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.scss']
})
export class ListeQuestionComponent implements OnInit{
  addQuestionForm !: FormGroup;
  currentPage: number = 1;
  totalPages: number = 0;
  pagedQuestions: Question[] = [];
  pages: number[] = [];
  itemsPerPage: number = 4;
  questions !:any[];
  descriptionSearch: string = '';
  idEtudiant!: any;


  // Déclarez la propriété dataSource
  constructor(private questionService:QuestionService, private router:Router,private route: ActivatedRoute,  private formBuilder:FormBuilder,
              private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { descriptionQuestion: string }
  ){
    this.addQuestionForm = this.formBuilder.group(
      {
        descriptionQuestion:['',Validators.required],

      }
    );

  }


  editQuestion(question: Question): void {
    const dialogRef = this.dialog.open(UpdateQuestionComponent, {
      width: '400px',
      data: { descriptionQuestion: question.descriptionQuestion, dateAjoutQ: question.dateAjoutQ }
    });

    dialogRef.afterClosed().subscribe((result: { descriptionQuestion: string, dateAjoutQ: Date }) => {
      if (result) {
        question.descriptionQuestion = result.descriptionQuestion;
        question.dateAjoutQ = result.dateAjoutQ;

        this.questionService.updateQuestion(question).subscribe(
          (updatedQuestion) => {
            console.log('Question mise à jour avec succès :', updatedQuestion);
            // Mettez à jour la question dans la liste
            const index = this.questions.findIndex(q => q.idQuestion === updatedQuestion.idQuestion);
            if (index !== -1) {
              this.questions[index] = updatedQuestion;
            }
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de la question :', error);
          }
        );
      }
    });
  }

  ngOnInit() {
    this.questionService.getAllQuestions().subscribe((data) => {
      this.questions = data;
      this.questions.sort((a, b) => compareAsc(new Date(b.dateAjoutQ), new Date(a.dateAjoutQ)));
      this.calculateTotalPages();
      this.goToPage(this.currentPage);
      console.log(data);
      this.idEtudiant=localStorage.getItem("id");

    })
    this.questions = this.route.snapshot.data['questions'];
    console.log(this.questions);
    this.calculateTotalPages();
    this.goToPage(this.currentPage);
  }
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.questions.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      const startIndex = (page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.pagedQuestions = this.questions.slice(startIndex, endIndex);
    }
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  private fetchReponses(): void {
    this.questionService.getAllQuestions().subscribe((data) => {
      this.questions = data;
      this.questions.sort((a, b) => compareAsc(new Date(b.dateAjoutQ), new Date(a.dateAjoutQ)));
      this.goToPage(this.currentPage);
      console.log(data);
    })
  }
  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question).subscribe(() => {
      console.log('Suppression effectuée');
      // Redirect to the "ListeQuestionComponent"
      // window.location.reload();
      this.fetchReponses();

    });


  }
  /*  updateQuestion(id: any): void {
      this.router.navigate(['dashboard/lazy/question/editQst', id]);
    }*/

  updateQuestion(question: Question) {
    console.log('Original Question Object:', question);

    const dialogRef = this.dialog.open(UpdateQuestionComponent, {
      width: '400px',
      data: { descriptionQuestion: question.descriptionQuestion, questionId : question.idQuestion }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        question.descriptionQuestion = result;

        this.questionService.updateQuestion(question).subscribe(
          (updatedQuestion) => {
            console.log('Question mise à jour avec succès :', updatedQuestion);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de la Question :', error);
            console.log(this.data)

          }
        );
      }
    });
  }
  DetailQuestion(id: any): void {
    this.router.navigate(['dashboard/lazy/detailQst', id]);
  }

  formatDateString(dateString: string): string {
    // Convertissez la chaîne de date en objet Date
    const date = new Date(dateString);

    // Utilisez la fonction format de date-fns pour formater la date
    const formattedDate = format(date, "dd MMM yyyy");

    return formattedDate;
  }
  formatDynamicTime(dateString: string | Date): string {
    return this.questionService.formatDynamicTime(dateString);
  }


  searchQuestions(): void {
    if (this.descriptionSearch) {
      this.questionService.searchQuestions(this.descriptionSearch).subscribe(
        (data) => {

          this.questions = data;
        },
        (error) => {
          console.error('Error during search:', error);
        }
      );
    } else {
      // Si la description de recherche est vide, chargez toutes les questions
      this.fetchReponses();

    }
  }
  onSubmit() {
    if (this.addQuestionForm.valid) {
      const question = this.addQuestionForm.value;
      this.questionService.addQuestEt(question,this.idEtudiant).subscribe(() => {
        console.log("ajout");
        this.fetchReponses();
      });
    }
    this.addQuestionForm.reset();
  }


}

