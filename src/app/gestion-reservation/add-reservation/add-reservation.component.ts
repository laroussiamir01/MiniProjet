import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent {
  addRes: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sReservation: ReservationsService,
    private router: Router
  ) {
    this.addRes = this.fb.group({
      anneeUniversite: ['', [Validators.required, this.validateYear]],
      estValide: [false, Validators.required],
    });
  }

  onSubmit() {
    if (this.addRes.valid) {
      const reservation = this.addRes.value;
      this.sReservation.addReservation(reservation).subscribe((data) => {
        console.log(data);
        alert('Réservation ajoutée avec succès');
        this.router.navigate(['/dashboard/gestion-reservation/allres']);
      });
    }
  }

  validateYear(control: AbstractControl): { [key: string]: boolean } | null {
    const currentYear = new Date().getFullYear();
    const selectedYear = new Date(control.value).getFullYear();

    if (selectedYear < currentYear) {
      return { 'invalidYear': true };
    }

    return null;
  }
}
