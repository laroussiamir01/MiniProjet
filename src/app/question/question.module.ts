import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { ShowQuestionComponent } from './show-question/show-question.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddQuestionComponent} from "./add-question/add-question.component";
import {DeleteQuestionComponent} from "./delete-question/delete-question.component";
import {DetailQuestionComponent} from "./detail-question/detail-question.component";
import {ListeQuestionComponent} from "./liste-question/liste-question.component";
import {UpdateQuestionComponent} from "./update-question/update-question.component";


@NgModule({
  declarations: [
    ListeQuestionComponent,
    AddQuestionComponent,
    DeleteQuestionComponent,
    DetailQuestionComponent,
    ShowQuestionComponent,
    UpdateQuestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class QuestionModule { }
