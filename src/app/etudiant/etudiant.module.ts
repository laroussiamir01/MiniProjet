import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EtudiantRoutingModule} from "./etudiant-routing.module";
import {ListeEtudiantComponent} from "./liste-etudiant/liste-etudiant.component";
import {AddEtudiantComponent} from "./add-etudiant/add-etudiant.component";
import {UpdateEtudiantComponent} from "./update-etudiant/update-etudiant.component";


@NgModule({
  declarations: [
    ListeEtudiantComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EtudiantModule { }
