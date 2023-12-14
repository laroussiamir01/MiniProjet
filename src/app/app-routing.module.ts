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
import {MotdePasseComponent} from "./motde-passe/motde-passe.component";


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'change', component: MotdePasseComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent, children: [
      { path: 'commandef',loadChildren:()=>
          import('./commande-f/commandef.module').then(m=>m.CommandefModule)},
      {  path: 'product',loadChildren:()=>import('./product/product.module').then(((m)=>m.ProductModule))},
      {  path: 'commande',loadChildren:()=>import('./commande/commande.module').then(((m)=>m.CommandeModule))},
  {path:'lazy',loadChildren:()=>import('../app/etudiant/etudiant.module').then((m)=>m.EtudiantModule)},
  {path:'lazy',loadChildren:()=>import('../app/evenement/evenement.module').then((m)=>m.EvenementModule)},
      { path: 'menu',loadChildren:()=>
          import('./menu/menu.module').then(m=>m.MenuModule)},
      { path: 'plat',loadChildren:()=>
          import('./plat/plat.module').then(m=>m.PlatModule)}, { path: 'foyer',loadChildren:()=>
          import('./foyer/foyer.module').then(m=>m.FoyerModule)},
          { path: 'bloc',loadChildren:()=>
          import('./bloc/bloc.module').then(m=>m.BlocModule)},
          {
            path: 'gestion-reservation',
            data: { pageTitle: 'Gestion Reservation' },
            loadChildren: () =>
              import('./gestion-reservation/gestion-reservation.module').then(
                (m) => m.GestionReservationModule
              ),
          },
          {
            path: 'gestion-chambre',
            data: { pageTitle: 'Gestion Chambre' },
            loadChildren: () =>
              import('./gestion-chambre/gestion-chambre.module').then(
                (m) => m.GestionChambreModule
              ),
          },

          {
              path: 'lazy',
              loadChildren: () => import('./question/question.module').then((m) => m.QuestionModule)
          },
          {
              path: 'Reponse',
              loadChildren: () => import('../app/Reponse/reponse.module').then((m) => m.ReponseModule)
          },

    ]},
  {path: 'dashboardEtudiant', component: DashboardEtudiantComponent, children: [
          {path:'lazy',loadChildren:()=>import('../app/evenement/evenement.module').then((m)=>m.EvenementModule)},
          {  path: 'product',loadChildren:()=>import('./product/product-front/product-front.module').then(((m)=>m.ProductFrontModule))},
      {  path: 'commandef',loadChildren:()=>import('./commande-f/commandef.module').then(((m)=>m.CommandefModule))},
      {path:'lazy',loadChildren:()=>import('../app/etudiant/etudiant.module').then((m)=>m.EtudiantModule)},
      {path:'lazy',loadChildren:()=>import('../app/evenement/evenement.module').then((m)=>m.EvenementModule)},
          {
              path: 'lazy',
              loadChildren: () => import('./question/question.module').then((m) => m.QuestionModule)
          },
          {
              path: 'Reponse',
              loadChildren: () => import('../app/Reponse/reponse.module').then((m) => m.ReponseModule)
          },
      { path: 'foyer',loadChildren:()=>
      import('./foyer/foyer.module').then(m=>m.FoyerModule)},
      { path: 'bloc',loadChildren:()=>
      import('./bloc/bloc.module').then(m=>m.BlocModule)},
          { path: 'menu',loadChildren:()=> import('./menu/menu.module').then(m=>m.MenuModule)},
      {
        path: 'gestion-chambre',
        loadChildren: () =>
          import('./gestion-chambre/gestion-chambre.module').then(
            (m) => m.GestionChambreModule
          ),
      },
      ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
