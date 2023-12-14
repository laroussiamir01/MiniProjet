import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionChambreRoutingModule } from './gestion-chambre-routing.module';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { ChambreClientComponent } from './chambre-client/chambre-client.component';
import { DashchambreComponent } from './dashchambre/dashchambre.component';
import { DeleteChambreComponent } from './delete-chambre/delete-chambre.component';
import { DetailChambreComponent } from './detail-chambre/detail-chambre.component';
import { ShowChambreComponent } from './show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';


@NgModule({
  declarations: [

],
  imports: [
    CommonModule,
    GestionChambreRoutingModule
  ]
})
export class GestionChambreModule { }
