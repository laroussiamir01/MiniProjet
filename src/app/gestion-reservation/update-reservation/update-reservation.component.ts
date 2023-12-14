import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/model/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss'],
})
export class UpdateReservationComponent {
  reservation: any;
  idReservation: any;
  chambres: Chambre[] = [];
  selectedchambres!: number;
  constructor(
    private sReservation: ReservationsService,
    private ac: ActivatedRoute,
    private sChambre: ChambreService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.idReservation = this.ac.snapshot.params['idReservation'];
  }
  ngOnInit() {
    this.loadChambre();
    this.sReservation
      .getReservationById(this.idReservation)
      .subscribe((data) => {
        this.reservation = data;
        console.log(this.reservation);
      });
  }

  updateReservation() {
    this.sReservation
      .updateReservation(this.idReservation, this.reservation)
      .subscribe(
        () => {
          console.log(this.reservation);
          this.router.navigate(['/dashboard/gestion-reservation/allres']);
          this.openSnackBar(
            'La réservation a été mise à jour avec succès',
            'Fermer'
          );
        },
        (error) => {
          console.error(
            'Erreur lors de la mise à jour de la réservation:',
            error
          );
          this.openSnackBar(
            'Erreur lors de la mise à jour de la réservation',
            'Fermer'
          );
        }
      );
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action || 'Fermer', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  loadChambre() {
    this.sChambre.getAllChambre().subscribe((data: any) => {
      this.chambres = data;
    });
  }

  affecterReservationAChambre() {
    if (this.reservation && this.reservation.idReservation) {
      if (this.selectedchambres) {
        this.sReservation
          .affecterReservationChambre(
            this.reservation.idReservation,
            this.selectedchambres
          )
          .subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              this.openSnackBar(
                'affectation de la chambre à la reservation avec succès',
                'Fermer'
              );
              this.router.navigate(['/dashboard/gestion-reservation/allres']);

              console.error(
                "Erreur lors de l'affectation du reservation au chambre :",
                error
              );
            }
          );
      } else {
        console.error('Veuillez sélectionner une chambre.');
      }
    } else {
      console.error('Veuillez sélectionner une réservation.');
    }
  }

  desaffecterReservationDeChambre() {
    console.log('chambre' + this.selectedchambres);
    if (this.reservation && this.reservation.idReservation) {
      this.sReservation
        .desaffacterReservationChambre(this.reservation.idReservation)
        .subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/dashboard/gestion-reservation/allres']);
          },
          (error) => {
            this.openSnackBar(
              'désaffectation de la chambre à la reservation avec succès',
              'Fermer'
            );
            this.router.navigate(['/dashboard/gestion-reservation/allres']);
            console.error(
              'Erreur lors de la désaffectation de la réservation de la chambre :',
              error
            );
          }
        );
    } else {
      console.error('Veuillez sélectionner une réservation.');
    }
  }
}
