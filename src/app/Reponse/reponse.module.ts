import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponseRoutingModule } from './reponse-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {EditReponseComponent} from "./edit-reponse/edit-reponse.component";
import { HomeReponseComponent } from './home-reponse/home-reponse.component';
import {MAT_MDC_DIALOG_DATA} from "../question/question.module";


@NgModule({
  providers: [
    // Provide the InjectionToken
    { provide: MAT_MDC_DIALOG_DATA, useValue: {} },
    // Other providers...
  ],
  declarations: [


    HomeReponseComponent
  ],
  imports: [
    CommonModule,
    ReponseRoutingModule,
    FormsModule,

    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ]
})
export class ReponseModule { }
