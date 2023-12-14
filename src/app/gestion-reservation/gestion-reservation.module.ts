import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionReservationRoutingModule } from './gestion-reservation-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { DashreservationComponent } from './dashreservation/dashreservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { ListnonvalideComponent } from './listnonvalide/listnonvalide.component';
import { ListvalideComponent } from './listvalide/listvalide.component';
import { PlanningMatUIComponent } from './planning-mat-ui/planning-mat-ui.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { StatReservationComponent } from './stat-reservation/stat-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; // Assurez-vous d'importer MatIconModule
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import { GestionReservationComponent } from './gestion-reservation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GestionReservationRoutingModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    FullCalendarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class GestionReservationModule {}
