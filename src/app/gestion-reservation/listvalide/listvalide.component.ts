import { Component, OnInit } from '@angular/core';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-listvalide',
  templateUrl: './listvalide.component.html',
  styleUrls: ['./listvalide.component.scss'],
})
export class ListvalideComponent implements OnInit {
  reservations: Reservations[] = [];

  constructor(private sReservation: ReservationsService) {}
  ngOnInit(): void {
    this.LoadReservationValides();
  }
  LoadReservationValides(): void {
    this.sReservation.getReservationsValides().subscribe(
      (data) => {
        this.reservations = data;
      },
      (error) => {
        console.log('Error fetching non-valide reservations:', error);
      }
    );
  }
}
