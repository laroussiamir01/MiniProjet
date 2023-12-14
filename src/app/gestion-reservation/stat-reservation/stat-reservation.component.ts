import { Component } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-stat-reservation',
  templateUrl: './stat-reservation.component.html',
  styleUrls: ['./stat-reservation.component.scss']
})
export class StatReservationComponent {
  countValidReservations!: number;
  countInvalidReservations!: number;
  showPercentageValue = false;
  percentageValue!: number;

  constructor(private reservationService: ReservationsService) { }

  ngOnInit(): void {
    this.reservationService.countValideReservations().subscribe(
      count => this.countValidReservations = count
    );

    this.reservationService.countNonValideReservations().subscribe(
      count => this.countInvalidReservations = count
    );
  }
  showPercentage(event: MouseEvent): void {
    const progressBar = event.currentTarget as HTMLElement;
    const percentage = (event.offsetX / progressBar.clientWidth) * 100;
    this.showPercentageValue = true;
    this.percentageValue = Math.round(percentage);
  }

  hidePercentage(): void {
    this.showPercentageValue = false;
  }
}
