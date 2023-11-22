import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFoyerComponent } from './foyer/liste-foyer/liste-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './foyer/update-foyer/update-foyer.component';
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  { path: 'listFoyer', component: ListeFoyerComponent },
  { path: 'addFoyer', component: AddFoyerComponent },
  { path: 'updateFoyer/:idFoyer', component: UpdateFoyerComponent },
  {path: 'dashboard', component: DashboardComponent, children: [
  {path:'lazy',loadChildren:()=>import('../app/etudiant/etudiant.module').then((m)=>m.EtudiantModule)},
  {path:'lazy',loadChildren:()=>import('../app/evenement/evenement.module').then((m)=>m.EvenementModule)},]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
