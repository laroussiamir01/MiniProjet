import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeQuestionComponent } from './home-question/home-question.component';
import { InjectionToken } from '@angular/core';
import {ListeQuestionComponent} from "./liste-question/liste-question.component";

export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData');
@NgModule({
  providers: [
    // Provide the InjectionToken
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
    // Other providers...
  ],
  declarations: [


    HomeQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
      MatDialogModule,
      MatPaginatorModule,
    MatTableModule,

  ]
})
export class QuestionModule { }
