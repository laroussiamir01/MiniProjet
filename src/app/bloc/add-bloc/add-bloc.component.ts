import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.scss']
})
export class AddBlocComponent {
  addBlocForm: FormGroup;

  constructor(
    private blocService: BlocService,
    private formBuilder: FormBuilder,
    private router: Router,
    private foyerService: FoyerService , private _snackBar: MatSnackBar)
  {
    this.addBlocForm = this.formBuilder.group({
      nomBloc: ['', Validators.required ],
      capaciteBloc: ['', Validators.min(5)],
    });
  }

  onSubmit() {
    if (this.addBlocForm.valid) {
      const blocData = this.addBlocForm.value;

      this.blocService.addBloc(blocData).subscribe(() => {
        this.router.navigate(['dashboard/bloc/listBloc']);
        this.openSnackBar('Bloc ajouté avec succès', 'Fermer');
      },
      (error) => {
       // console.error('Erreur lors de l\'ajout du bloc : ', error);
        this.openSnackBar('Erreur lors de l\'ajout du bloc', 'Fermer');
      }
    );
    }
    else{
      this.openSnackBar('Erreur lors de l\'ajout du bloc', 'Fermer');
    }
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, 
    });
  }
}
