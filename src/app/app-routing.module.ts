import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent, children: [
  {
    path: 'lazy',
    loadChildren: () => import('../app/question/question.module').then((m) => m.QuestionModule)
  },
  {
    path: 'Reponse',
    loadChildren: () => import('../app/Reponse/reponse.module').then((m) => m.ReponseModule)
  },


    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
