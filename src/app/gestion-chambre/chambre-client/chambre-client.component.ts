import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-chambre-client',
  templateUrl: './chambre-client.component.html',
  styleUrls: ['./chambre-client.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(500)]),
      transition(':leave', animate(500, style({ opacity: 0 }))),
    ]),
  ],
})
export class ChambreClientComponent implements OnInit {
  chambres: any[] = [];
  idEtudiant!:any;

  constructor(private sChambre: ChambreService, private sReservation:ReservationsService,private router: Router) {}

  ngOnInit(): void {
    this.getChambres();
    this.idEtudiant=localStorage.getItem("id");
  }
get chunkedChambres(): any[][] {
    const chunkSize = 3;
    const arrayCopy = [...this.chambres];
    const chunks = [];

    while (arrayCopy.length) {
      chunks.push(arrayCopy.splice(0, chunkSize));
    }

    return chunks;
  }


  getChambres(): void {
    this.sReservation.getAllChambreDoubleTripleClient().subscribe(
      (data) => {
        this.chambres = data;
        console.log('Liste des chambres :', this.chambres);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des chambres', error);
      }
    );
  }

  reserverChambre(chambreId: any) {
    console.log('ID de chambre envoyé :', chambreId);

    if (chambreId !== undefined && chambreId !== null) {
      this.sReservation.reserverChambre(chambreId,this.idEtudiant).subscribe(
        () => {
          console.log('Chambre réservée avec succès');
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la réservation de la chambre', error);
        }
      );
    } else {
      console.error('ID de chambre non défini');
    }
  }

}
