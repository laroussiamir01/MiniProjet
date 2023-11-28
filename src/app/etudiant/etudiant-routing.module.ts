import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeEtudiantComponent} from "./liste-etudiant/liste-etudiant.component";
import {DeleteEtudiantComponent} from "./delete-etudiant/delete-etudiant.component";
import {UpdateEtudiantComponent} from "./update-etudiant/update-etudiant.component";
import {AddEtudiantComponent} from "./add-etudiant/add-etudiant.component";


const routes: Routes = [
  {path:'etudiant', children:[
      {
        path:'',component:ListeEtudiantComponent,
        data: {
          authorities: ['ROLE_ADMIN','ROLE_USER'],
          pageTitle: 'CNI 23'
        }
      },
      { path: 'addEtudiant', component: AddEtudiantComponent },
     // {path:'detail/:id',component:DetailComponent},
    //  {path:'detail/:attribute/:attributeVal',component:ShowUserComponent},
      //{path:'delete/:id',component:DeleteEtudiantComponent},
      {path:'updateEtudiant',component:UpdateEtudiantComponent},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
