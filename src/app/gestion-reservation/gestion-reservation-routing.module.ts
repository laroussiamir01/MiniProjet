import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashreservationComponent } from './dashreservation/dashreservation.component';
import { GestionReservationComponent } from './gestion-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { StatReservationComponent } from './stat-reservation/stat-reservation.component';
import { ListnonvalideComponent } from './listnonvalide/listnonvalide.component';
import { ListvalideComponent } from './listvalide/listvalide.component';
import { PlanningMatUIComponent } from './planning-mat-ui/planning-mat-ui.component';

const routes: Routes = [
  {
    path: '',
    component: DashreservationComponent,
    children: [
      { path: 'dashres', component: GestionReservationComponent },

      {
        path: 'addRes',
        component: AddReservationComponent,
        data: { pageTitle: 'Gestion Reservation' },
      },
      {
        path: 'allres',
        component: ShowReservationComponent,
        data: { pageTitle: 'Gestion Reservation' },
      },
      {
        path: 'detailRes/:idReservation',
        component: DetailReservationComponent,
      },
      {
        path: 'updateRes/:idReservation',
        component: UpdateReservationComponent,
      },
      { path: 'statRes', component: StatReservationComponent  },
      { path: 'planning', component: PlanningMatUIComponent },
      { path: 'nonValide', component: ListnonvalideComponent },
      { path: 'Valide', component: ListvalideComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionReservationRoutingModule { }
