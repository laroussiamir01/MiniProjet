import { Reservations } from 'src/app/model/Reservations';
import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Router } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-listnonvalide',
  templateUrl: './listnonvalide.component.html',
  styleUrls: ['./listnonvalide.component.scss']
})
export class ListnonvalideComponent implements OnInit{
reservations:any[]=[];
searchTerm: string = '';
qrCodeUrl: string | null = null;
constructor(private sReservation:ReservationsService, private router:Router){}



ngOnInit(): void {
  this.loadReservationsNonValides();
  this.generateQRCodeForReservations();


}
loadReservationsNonValides(): void {
  this.sReservation.getReservationsNonValides().subscribe(
    (data) => {
      this.reservations = data;
    },
    (error) => {
      console.log('Error fetching non-valide reservations:', error);
    }
  );
}

approuverReservation(id: number): void {
  this.sReservation.approuverReservation(id).subscribe(
    () => {
      console.log('Reservation approved successfully.');
      this.loadReservationsNonValides();
    },
    (error) => {
      console.log('Error approving reservation:', error);
    }
  );
}
generateQRCodeForReservations() {
  this.reservations.forEach((reservation) => {
    const detailsReservation = {
      idReservation: reservation.idReservation,
      anneeUniversite: reservation.anneeUniversite,
      estValide: reservation.estValide,
    };
    QRCode.toDataURL(JSON.stringify(detailsReservation), (err, url) => {
      if (!err) {
        reservation.qrCodeUrl = url;
      } else {
        console.error('Erreur lors de la génération du QR Code:', err);
      }
    });
  });
}



// get filteredReservations() {
//   return this.reservations.filter(
//     (reservation) =>
//       reservation.idReservation.toString().includes(this.searchTerm) ||
//       reservation.anneeUniversite.toString().includes(this.searchTerm) ||
//       reservation.commentaire
//         .toLowerCase()
//         .includes(this.searchTerm.toLowerCase()) ||
//       (reservation.chambre &&
//         reservation.chambre.numeroChambre
//           .toString()
//           .includes(this.searchTerm))
//   );
// }


showDetails(idReservation: any) {
  this.router.navigate(['dashboard/gestion-reservation/detailRes', idReservation]);
}
}
