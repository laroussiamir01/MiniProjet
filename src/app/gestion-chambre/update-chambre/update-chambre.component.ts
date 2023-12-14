import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/model/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bloc } from 'src/app/model/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.scss']
})
export class UpdateChambreComponent {
ch:any;
idChambre:any;
selectedblocs!:number;
blocs:Bloc[]=[];

constructor(private sChambre:ChambreService, private ac:ActivatedRoute, private route:Router,private snackBar: MatSnackBar,private sBloc:BlocService
  ) {
  this.idChambre = this.ac.snapshot.params['idChambre'];

}
ngOnInit() {
  this.loadBlocs();

  this.sChambre.getChambreById(this.idChambre).subscribe(data => {
    this.ch = data;
  });
}
loadBlocs() {
  this.sBloc.getAllBlocs().subscribe((data: any) => {
    this.blocs = data;
  });
}

update() {
  this.sChambre.updateChambre(this.idChambre,this.ch).subscribe(
    () => {
      console.log(this.ch);
      this.route.navigate(['/dashboard/gestion-chambre/allch']);
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




affecterChambreAbloc() {
  if (this.ch && this.ch.idChambre) {
    if (this.selectedblocs) {
      this.sChambre
        .affecterChambreABloc(
          this.ch.idChambre,
          this.selectedblocs
        )
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            this.openSnackBar(
              'affectation de la chambre au bloc avec succès',
              'Fermer'
            );
            this.route.navigate(['/dashboard/gestion-chambre/allch']);

            console.error(
              "Erreur lors de l'affectation du chambre au bloc :",
              error
            );
          }
        );
    } else {
      console.error('Veuillez sélectionner un bloc.');
    }
  } else {
    console.error('Veuillez sélectionner un bloc.');
  }
}

desaffecterChambredeBloc() {
  console.log('bloc' + this.selectedblocs);
  if (this.ch && this.ch.idChambre) {
    this.sChambre
      .desaffecterChambreABloc(this.ch.idChambre)
      .subscribe(
        (response) => {
          console.log(response);
          this.route.navigate(['/dashboard/gestion-chambre/allch']);
        },
        (error) => {
          this.openSnackBar(
            'désaffectation de la chambre au bloc avec succès',
            'Fermer'
          );
          this.route.navigate(['/dashboard/gestion-chambre/allch']);
          console.error(
            'Erreur lors de la désaffectation de la chambre au bloc :',
            error
          );
        }
      );
  } else {
    console.error('Veuillez sélectionner un bloc.');
  }
}
openSnackBar(message: string, action?: string) {
  this.snackBar.open(message, action || 'Fermer', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  });
}

}




