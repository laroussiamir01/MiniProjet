import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardEtudiantComponent} from "./dashboard-etudiant/dashboard-etudiant.component";



const routes: Routes = [
 {path: 'dashboard', component: DashboardComponent, children: [
     { path: 'commandef',loadChildren:()=>
                 import('./commande-f/commandef.module').then(m=>m.CommandefModule)},
   {  path: 'product',loadChildren:()=>import('./product/product.module').then(((m)=>m.ProductModule))},
     {  path: 'commande',loadChildren:()=>import('./commande/commande.module').then(((m)=>m.CommandeModule))},
    ]},
  {path: 'dashboardEtudiant', component: DashboardEtudiantComponent, children: [
      {  path: 'product',loadChildren:()=>import('./product/product-front/product-front.module').then(((m)=>m.ProductFrontModule))},
      {  path: 'commandef',loadChildren:()=>import('./commande-f/commandef.module').then(((m)=>m.CommandefModule))},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
