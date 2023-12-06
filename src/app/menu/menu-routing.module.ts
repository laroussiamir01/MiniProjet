import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ListeMenuComponent } from './liste-menu/liste-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';

const routes: Routes = [
  { path: '',component: HomeMenuComponent , children: [
    {path: 'listeMenu', component: ListeMenuComponent},
    {path: 'addMenu', component: AddMenuComponent},
    {path: 'updateMenu/:idMenu', component: UpdateMenuComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
