import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';

import { Component } from '@angular/core';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';
import { DetailReservationComponent } from '../detail-reservation/detail-reservation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; // Assurez-vous d'importer MatIconModule
import {
  Calendar,
  CalendarOptions,
  EventApi,
  EventInput,

} from '@fullcalendar/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-planning-mat-ui',
  templateUrl: './planning-mat-ui.component.html',
  styleUrls: ['./planning-mat-ui.component.scss'],
})
export class PlanningMatUIComponent {
  selectedDate!: Date;
  reservations: Reservations[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    editable: true,
    eventDrop: this.handleEventDrop.bind(this),
    events: [],
  };

  constructor(
    private dialog: MatDialog,
    private reservationsService: ReservationsService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const data = await this.reservationsService
        .getAllReservations()
        .toPromise();

      if (data) {
        this.reservations = data as Reservations[];

        const events: EventInput[] = this.reservations.map((reservation) => ({
          title: reservation.idReservation?.toString() || '',
          start: reservation.anneeUniversite,
        }));

        this.calendarOptions.events = events;
      } else {
        console.error('Les données des réservations sont indéfinies.');
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des réservations :",
        error
      );
    }
  }
  handleEventClick(info: any): void {
    const eventId = +info.event.title; // Convert the ID to a number
    this.openReservationDetails(eventId);
  }
  openCalendar(): void {
    // Implémentez l'ouverture du calendrier ici si nécessaire
  }

  handleDateClick(arg: any): void {
    alert('date click! ' + arg.dateStr);
  }

  openReservationDetails(eventId: number): void {
    console.log('Trying to open reservation details for ID:', eventId);
    this.reservationsService.getReservationById(eventId).subscribe(
      (reservation: Reservations) => {
        console.log('Réservation récupérée pour ID:', eventId, reservation);
        const dialogRef = this.dialog.open(DetailReservationComponent, {
          width: '300px',
          data: { reservation },
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed with result:', result);
        });
      },
      (error: any) => {
        console.error('Error fetching reservation details for ID:', eventId, error);
      }
    );
  }



  handleEventDrop(info: any) {
    const eventId = +info.event.title; // Convert the ID to a number
    const rawDate = info.event.start;

    // Ensure info.event.start is a Date object
    if (!(rawDate instanceof Date)) {
      console.error('info.event.start is not a Date object');
      return;
    }

    // Format the date as "yyyy-MM-dd"
    const formattedDate = rawDate.toISOString().split('T')[0];

    console.log('info: ', info);
    console.log('eventId: ', eventId);
    console.log('formattedDate: ', formattedDate);

    console.log('Inside the block');
    const updatedReservation = this.reservationsService.updateDateById(
      eventId,
      formattedDate
    );
    console.log(
      'The database has been successfully updated.',
      updatedReservation
    );
  }
}
