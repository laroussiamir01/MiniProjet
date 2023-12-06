import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeMenuComponent,
   
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    
  ]
})
export class MenuModule { }
