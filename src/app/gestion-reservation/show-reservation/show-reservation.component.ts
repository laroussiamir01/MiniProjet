import { ReservationsService } from 'src/app/services/reservations.service';
import { Reservations } from '../../model/Reservations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as QRCode from 'qrcode';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { rgb } from 'pdf-lib';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.scss'],
})
export class ShowReservationComponent implements OnInit {
  reservation: any = {}; // Initialisation avec un objet vide pour le pdf
  pdfGenerated = false;
  reservations: any[] = [];
  searchTerm: string = '';
  qrCodeUrl: string | null = null; // Nouvelle propriété pour contenir l'URL du code QR

  constructor(
    private sReservation: ReservationsService,
    private router: Router
  ) {}

  getRes() {
    this.sReservation.getAllReservations().subscribe((data: any) => {
      console.log(data);
      this.reservations = data;
      this.generateQRCodeForReservations();
    });
  }
  ngOnInit(): void {
    this.getRes();
  }
  addReservation() {
    this.router.navigate(['dashboard/gestion-reservation/addRes']); // Naviguer vers la page d'ajout
  }
  showDetails(idReservation: any) {
    this.router.navigate([
      'dashboard/gestion-reservation/detailRes',
      idReservation,
    ]);
  }

  deleteReservation(resv: Reservations) {
    this.sReservation.deleteReservation(resv).subscribe((data) => {
      console.log(data);
      this.getRes();
    });
  }
  editReservation(idReservation: any) {
    this.router.navigate([
      'dashboard/gestion-reservation/updateRes',
      idReservation,
    ]);
  }
  listeNonValide() {
    this.router.navigate(['dashboard/gestion-reservation/nonValide']);
  }
  listeValide() {
    this.router.navigate(['dashboard/gestion-reservation/Valide']);
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

  get filteredReservations() {
    return this.reservations.filter(
      (reservation) =>
        reservation.idReservation.toString().includes(this.searchTerm) ||
        reservation.anneeUniversite.toString().includes(this.searchTerm) ||
        reservation.commentaire
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        (reservation.chambre &&
          reservation.chambre.numeroChambre
            .toString()
            .includes(this.searchTerm))
    );
  }

  //  t5dem
  async generatePdfForReservation(reservation: any) {

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Use different fonts for title and text
    const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const textFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Embed your logo image


    // Calculate logo dimensions


    // Add a custom title with a colored background box
    const titleBackgroundColor = rgb(0.1, 0.3, 0.6);
    page.drawRectangle({
      x: 50,
      y: height - 60,
      width: width - 100,
      height: 40,
      color: titleBackgroundColor,
    });
    page.drawText('Reservation Details', {
      x: 110,
      y: height - 50,
      font: titleFont,
      color: rgb(1, 1, 1),
      size: 18,
    });

    // Draw the logo on the page


    const reservationText = `
        Reservation ID: ${reservation.idReservation}
        Academic Year: ${reservation.anneeUniversite}
        Is Valid: ${reservation.estValide ? 'Yes' : 'No'}
      `;

    page.drawRectangle({
      x: 50,
      y: height - 160,
      width: width - 100,
      height: 120,
      color: rgb(0.95, 0.95, 0.95),
    });
    page.drawText(reservationText, {
      x: 60,
      y: height - 170,
      font: textFont,
      color: rgb(0, 0, 0),
      size: 14,
    });

    page.drawLine({
      start: { x: 50, y: height - 170 },
      end: { x: width - 50, y: height - 170 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `reservation_${reservation.idReservation}.pdf`;
    link.click();
  }
}
