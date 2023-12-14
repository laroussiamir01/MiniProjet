import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { RouterModule } from '@angular/router';
import { AffecterPlatComponent } from './affecter-plat/affecter-plat.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HomeMenuComponent,
    AffecterPlatComponent,
    
   
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    FormsModule,
    
  ]
})
export class MenuModule { }
