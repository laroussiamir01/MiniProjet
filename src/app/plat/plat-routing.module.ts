import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePlatComponent } from './home-plat/home-plat.component';
import { ListePlatComponent } from './liste-plat/liste-plat.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { DetailPlatComponent } from './detail-plat/detail-plat.component';

const routes: Routes = [
  { path: '',component: HomePlatComponent , children: [
    {path: 'listePlat', component: ListePlatComponent},
    {path: 'addPlat', component: AddPlatComponent},
    {path: 'updatePlat/:idPlat', component: UpdatePlatComponent},
    { path: 'detailPlat/:idPlat', component: DetailPlatComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatRoutingModule { }
