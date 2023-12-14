import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashchambreComponent } from './dashchambre/dashchambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { GestionChambreComponent } from './gestion-chambre.component';
import { ShowChambreComponent } from './show-chambre/show-chambre.component';
import { DetailChambreComponent } from './detail-chambre/detail-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { ChambreClientComponent } from './chambre-client/chambre-client.component';

const routes: Routes = [
  {path:'',component:DashchambreComponent,children:[{
     path: 'addch',
     component: AddChambreComponent,
   },
   {path:'dashch',component:GestionChambreComponent},
   {
     path: 'allch',
     component: ShowChambreComponent,
   },
   { path: 'detailCh/:idChambre', component: DetailChambreComponent },
   { path: 'updateCh/:idChambre', component: UpdateChambreComponent },
   {path:'chclient',component:ChambreClientComponent},


 ]},

 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionChambreRoutingModule { }
