import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardEtudiantComponent} from "./dashboard-etudiant/dashboard-etudiant.component";
import {ProductFrontComponent} from "./product/product-front/product-front.component";


const routes: Routes = [

 {path: 'dashboard', component: DashboardComponent, children: [
   {  path: 'product',loadChildren:()=>import('./product/product.module').then(((m)=>m.ProductModule))},
     {  path: 'commande',loadChildren:()=>import('./commande/commande.module').then(((m)=>m.CommandeModule))},
    ]},
  {path: 'dashboardEtudiant', component: DashboardEtudiantComponent, children: [
      {  path: 'product',loadChildren:()=>import('./product/product-front/product-front.module').then(((m)=>m.ProductFrontModule))},
      {  path: 'commande',loadChildren:()=>import('./commande/commande.module').then(((m)=>m.CommandeModule))},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
