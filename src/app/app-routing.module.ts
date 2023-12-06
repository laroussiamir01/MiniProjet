import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFoyerComponent } from './foyer/liste-foyer/liste-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './foyer/update-foyer/update-foyer.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardEtudiantComponent} from "./dashboard-etudiant/dashboard-etudiant.component";
import {ListeEtudiantComponent} from "./etudiant/liste-etudiant/liste-etudiant.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'listFoyer', component: ListeFoyerComponent },
  { path: 'addFoyer', component: AddFoyerComponent },
  { path: 'updateFoyer/:idFoyer', component: UpdateFoyerComponent },
  { path: 'listEtudiant', component: ListeEtudiantComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent, children: [
  {path:'lazy',loadChildren:()=>import('../app/etudiant/etudiant.module').then((m)=>m.EtudiantModule)},
  {path:'lazy',loadChildren:()=>import('../app/evenement/evenement.module').then((m)=>m.EvenementModule)},
      { path: 'menu',loadChildren:()=>
          import('./menu/menu.module').then(m=>m.MenuModule)},
      { path: 'plat',loadChildren:()=>
          import('./plat/plat.module').then(m=>m.PlatModule)},
    ]},
  {path: 'dashboardEtudiant', component: DashboardEtudiantComponent, children: [
      {path:'lazy',loadChildren:()=>import('../app/etudiant/etudiant.module').then((m)=>m.EtudiantModule)},
      {path:'lazy',loadChildren:()=>import('../app/evenement/evenement.module').then((m)=>m.EvenementModule)},]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
