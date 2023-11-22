import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListEvenementComponent,
    AddEvenementComponent,
    UpdateEvenementComponent
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
      ReactiveFormsModule,
    FormsModule
  ]
})
export class EvenementModule { }
