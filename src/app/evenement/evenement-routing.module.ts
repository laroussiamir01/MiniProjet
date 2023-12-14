import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListEvenementComponent} from "./list-evenement/list-evenement.component";
import {AddEvenementComponent} from "./add-evenement/add-evenement.component";
import {UpdateEvenementComponent} from "./update-evenement/update-evenement.component";

const routes: Routes = [
  {path:'evenement', children:[
      {path:'',component:ListEvenementComponent},
      { path: 'addEvenement', component: AddEvenementComponent},
      // {path:'detail/:id',component:DetailComponent},
      //  {path:'detail/:attribute/:attributeVal',component:ShowUserComponent},
      //{path:'delete/:id',component:DeleteEtudiantComponent},
      {path:'updateEvenement',component:UpdateEvenementComponent},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
