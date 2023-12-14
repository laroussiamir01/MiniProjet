import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFoyerComponent } from './liste-foyer/liste-foyer.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { DetailFoyerComponent } from './detail-foyer/detail-foyer.component';
import { HomeFoyerComponent } from './home-foyer/home-foyer.component';
import { Foyer3dComponent } from './foyer3d/foyer3d.component';
import { ListeFoyerEtudintComponent } from './liste-foyer-etudint/liste-foyer-etudint.component';


const routes: Routes = [
  { path: '', component: HomeFoyerComponent , children: [ { path: 'listFoyer', component: ListeFoyerComponent },
  { path: 'listFoyerEtudiant', component: ListeFoyerEtudintComponent },
  { path: 'addFoyer', component: AddFoyerComponent },
  { path: 'updateFoyer/:idFoyer', component: UpdateFoyerComponent },
  { path: 'detailFoyer/:idFoyer', component: DetailFoyerComponent },
  {path:'scene',component:Foyer3dComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
