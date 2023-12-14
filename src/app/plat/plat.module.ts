import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatRoutingModule } from './plat-routing.module';
import { HomePlatComponent } from './home-plat/home-plat.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    HomePlatComponent,
  ],
  imports: [
    CommonModule,
    PlatRoutingModule,
    MatSnackBarModule,
    RouterModule,
    FormsModule,
    
  ]
})
export class PlatModule { }
