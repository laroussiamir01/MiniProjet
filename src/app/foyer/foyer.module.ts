import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { HomeFoyerComponent } from './home-foyer/home-foyer.component';
import { Foyer3dComponent } from './foyer3d/foyer3d.component';
import { ListeFoyerEtudintComponent } from './liste-foyer-etudint/liste-foyer-etudint.component';


@NgModule({
  declarations: [
    HomeFoyerComponent,
   // Foyer3dComponent,
    ListeFoyerEtudintComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule
  ]
})
export class FoyerModule { }
