import { ChambreService } from './../../services/chambre.service';
import { Reservations } from './../../model/Reservations';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Chambre } from 'src/app/model/Chambre';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss'],

})
export class DetailReservationComponent implements OnInit {
  reservation: any;
  idReservation: any;
  chambres: Chambre[] = [];
  selectedchambres!: number;

  constructor(
    private route: ActivatedRoute,
    private sReservation: ReservationsService,
    private router: Router,
    private chambreService: ChambreService
  ) {}
  ngOnInit() {
    this.loadChambre();

    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('idReservation');
      if (idParam !== null) {
        //const resId = +idParam;//persister pour convertir l'id en number
        this.sReservation
          .getReservationById(idParam)
          .subscribe((reservation) => {
            this.reservation = reservation;
          });
      } else {
      }
    });
  }

  loadChambre() {
    this.chambreService.getAllChambre().subscribe((data: any) => {
      this.chambres = data;
    });
  }
}
