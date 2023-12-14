import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeBlocComponent } from './liste-bloc/liste-bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { DetailBlocComponent } from './detail-bloc/detail-bloc.component';
import { HomeBlocComponent } from './home-bloc/home-bloc.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { DetailBlocEtudiantComponent } from './detail-bloc-etudiant/detail-bloc-etudiant.component';
import { ListeBlocEtudiantComponent } from './liste-bloc-etudiant/liste-bloc-etudiant.component';

const routes: Routes = [
  { path: '', component: HomeBlocComponent , children: [ { path: 'listBloc', component: ListeBlocComponent },
  { path: 'listBlocEtudiant', component: ListeBlocEtudiantComponent },
  { path: 'addBloc', component: AddBlocComponent },
  { path: 'updateBloc/:idBloc', component: UpdateBlocComponent },
  { path: 'detailBloc/:idBloc', component: DetailBlocComponent },
  { path: 'detailBlocEtudiant/:idBloc', component: DetailBlocEtudiantComponent },
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
