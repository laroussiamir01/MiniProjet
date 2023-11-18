import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponseRoutingModule } from './reponse-routing.module';
import {EditReponseComponent} from "./edit-reponse/edit-reponse.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    EditReponseComponent
  ],
  imports: [
    CommonModule,
    ReponseRoutingModule,
    FormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ]
})
export class ReponseModule { }
