import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditReponseComponent} from "./edit-reponse/edit-reponse.component";

const routes: Routes = [


      {path: 'editReponse/:idReponse', component: EditReponseComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReponseRoutingModule { }
